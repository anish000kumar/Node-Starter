import { createResource } from '@helpers';
import authController from './controller';
import authRouter from './routes.js';

export default createResource({
  router: authRouter,
  controller: authController,
});
