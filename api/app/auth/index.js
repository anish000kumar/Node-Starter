import { createApp } from '@helpers';
import authController from './controller';
import authRouter from './routes.js';

export default createApp({
  router: authRouter,
  controller: authController,
});
