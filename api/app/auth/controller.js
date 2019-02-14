import errors from './errors';
import jwt from 'jsonwebtoken';
import { trycatch } from '@helpers';
import { hash, compare } from 'bcryptjs';
import crypto from 'crypto';
import { sendMail } from '@helpers';

function authController({ model: User, config }) {
  //Login
  async function login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const isPassCorrect = await compare(password, user.password);
      if (isPassCorrect) {
        return res.json({
          user,
          token: getToken(user),
        });
      } else return res.status(401).json(errors.INVALID_PASSWORD);
    }
    return res.status(401).json(errors.INVALID_CREDENTIALS);
  }

  //Register
  async function register(req, res) {
    const user = new User(req.body);
    user.password = await hash(user.password, 10);
    await user.save();
    return res.json(user);
  }

  // Change Password with old one
  async function changePassword(req, res) {
    const user = req.user;
    const { oldPassword, confirmPassword, newPassword } = req.body;
    if (!(newPassword === confirmPassword))
      return res.status(500).json(errors.PASSWORD_MISMATCH);

    const isPassCorrect = await compare(oldPassword, user.password);
    if (!isPassCorrect) return res.status(500).json(errors.INVALID_CREDENTIALS);

    user.password = await hash(newPassword, 10);
    user.save();
    res.json(user);
  }

  // request to reset password
  async function requestResetPassword(req, res) {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(500).json(errors.INVALID_EMAIL);
    user.resetPasswordHash = crypto.randomBytes(64).toString('hex');
    await user.save();
    sendMail({
      to: user.email,
      subject: 'Reset Password',
      html: `
        <p>use this link to reset password: </p>
        <a href="http://localhost:3000/api/auth/reset-password/${user.id}/${
        user.resetPasswordHash
      }"> RESET </a>
      `,
    });

    res.send({ success: true });
  }

  async function resetPassword(req, res) {
    const { password, confirmPassword, userId, resetPasswordHash } = req.body;
    const user = await User.findById(userId);
    if (user && user.resetPasswordHash === resetPasswordHash) {
      if (password === confirmPassword) {
        user.password = await hash(password, 10);
        await user.save();
        user.resetPasswordHash = null;
        await user.save();
        res.send({ success: true, user });
      }
      return res.status(500).json(errors.PASSWORD_MISMATCH);
    }
    res.status(500).json(errors.INVALID_USER_DETAILS('Invalid token'));
  }

  // Return signed JWT token
  function getToken(user) {
    return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
      expiresIn: config.jwtExpiry,
    });
  }

  //Public methods
  return trycatch({
    login,
    register,
    requestResetPassword,
    resetPassword,
    changePassword,
  });
}

export default authController;
