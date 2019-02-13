import errors from './errors';
import jwt from 'jsonwebtoken';
import { trycatch } from '@helpers';
import { hash, compare } from 'bcryptjs';

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

    if (isUserValid(user)) {
      await user.save();
      return res.json(user);
    }
    res.status(500).json(errors.INVALID_USER_DETAILS());
  }

  function isUserValid(user) {
    return 1;
  }

  // Change Password with old one
  async function changePassword(req, res) {
    const { oldPassword, repeatOldPassword, newPassword, userId } = req;
    if (!oldPassword === repeatOldPassword)
      return res.status(500).json(error.PASSWORD_MISMATCH);
    const user = await User.findById(userId);
    user.password = await bcrypt.hash(newPassword, 10);
    user.save();
    res.json(user);
  }

  // request to reset password
  async function requestResetPassword(req, res) {
    const { email } = req;
  }

  // reset password
  async function resetPassword(req, res) {}

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
