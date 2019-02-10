import { createApp } from '@helpers';
import userController from './controller';
import userRouter from './routes.js';
import userModel from './model.js';

export default createApp({
  router: userRouter,
  controller: userController,
  model: userModel,
});
