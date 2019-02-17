import errors from './errors';
import jwt from 'jsonwebtoken';
import { log } from '@helpers';

export default function(User, key = 'user') {
  return async function authMiddleware(req, res, next) {
    try {
      const authToken = req.get('Authorization');
      if (!authToken) return res.status(500).json(errors.INVALID_TOKEN);

      const data = jwt.decode(authToken);
      if (data && data.id) {
        const user = await User.findById(data.id);
        if (user) {
          req['user'] = user;
          return next();
        }
      }
      return res.status(500).json(errors.INVALID_TOKEN);
    } catch (err) {
      log.error(err);
      res.json({
        error: true,
        message: 'Error logged',
      });
    }
  };
}
