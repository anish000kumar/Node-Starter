import { Router } from 'express';
import registerApps from '@app';
import registerRoutes from './routes';

function mainProvider(context) {
  const mainApp = Router();

  // root level routes
  registerRoutes(mainApp, context);

  // apps
  registerApps(mainApp, context);

  return mainApp;
}

export default mainProvider;
