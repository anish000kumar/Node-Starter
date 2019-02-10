import User from '@app/user/model';
import errors from './errors';
import jwt from 'jsonwebtoken';
import { log } from '@helpers';

export default function authMiddleware(req, res, next) {
  try {
    const authToken = req.get('Authorization');
    if (!authToken) {
      return res.status(500).json(errors.INVALID_TOKEN);
    }

    const data = jwt.decode(authToken);
    if (data && data.id) {
      const user = User.findById(data.id);
      req.user = user;
      return next();
    }

    res.status(500).json(errors.INVALID_TOKEN);
  } catch (err) {
    log.error(err);
    res.json({
      error: true,
      message: 'Error logged',
    });
  }
}
