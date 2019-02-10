import { createApp } from '@helpers';
import authController from './controller';
import authRouter from './routes.js';
import userModel from '@app/user/model';

export default createApp({
  router: authRouter,
  controller: authController,
  model: userModel,
});
