import { Router } from 'express';
import log from '@helpers';

function createApp({ router, controller, model }) {
  return function resource(context) {
    try {
      // create new router for reseource
      const _route = new Router();

      // get controller object of resource
      const _controller = controller({ model, ...context });

      // run router function to attach _route with _controller
      router(_route, _controller);
      return _route;
    } catch (err) {
      log.error('[error] [' + resourceController + '] ' + err);
    }
  };
}

export default createApp;
