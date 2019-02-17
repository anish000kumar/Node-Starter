import { Router } from 'express';
import userController from './controller';
import enableAuth from '../auth';
import User from './model';

const app = new Router();

export const auth = enableAuth({
  router: app,
  model: User,
  fields: {
    hash: 'resetPasswordHash',
    username: ['email', 'username'],
  },
});

app.get('/', userController.getAll);
// app.post('/', userController.create);
app.get('/:userId', userController.get);
app.put('/:userId', userController.update);
app.delete('/:userId', userController.destroy);

export default app;
