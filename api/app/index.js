import { Router } from 'express';
import registerResources from '@resources';
import registerRoutes from './routes';

function apiProvider(context) {
  const api = Router();

  // global routes
  registerRoutes(api, context);

  // resources
  registerResources(api, context);

  return api;
}

export default apiProvider;
