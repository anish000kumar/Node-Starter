import errors from './errors';
import jwt from 'jsonwebtoken';
import { trycatch } from "@helpers";

function authController({ model: User, config }) {
  //Login
  async function login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      return res.json({
        user,
        token: getToken(user),
      });
    }
    return res.status(401).json(errors.INVALID_CREDENTIALS);
  }

  //Register
  async function register(req, res) {
      const user = new User(req.body);
      if (isUserValid(user)) {
        await user.save();
        return res.json(user);
      }
      res.status(500).json(errors.INVALID_USER_DETAILS());
  }

  function isUserValid(user) {
    return 1;
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
  });
}

export default authController;
