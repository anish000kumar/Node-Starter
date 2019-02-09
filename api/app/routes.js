import _rootController from '@controllers/rootController';

function registerRoutes(api, context) {
  const rootController = _rootController(context);
  api.get('/', rootController.index);
}

export default registerRoutes;
