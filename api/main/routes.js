import rootController from '@controllers/rootController';

function registerRoutes(api, ctx) {
  //register your routes at root level here
  api.get('/', rootController().index);
  api.get('/about', rootController().about);
  api.get('/version', rootController().getVersion);
}

export default registerRoutes;
