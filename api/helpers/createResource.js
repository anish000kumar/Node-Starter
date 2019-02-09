import { Router } from "express";
import log from "@helpers"

export default function createResource({router, controller, model}) {
    return function (context) {
        try {
            // create new router for reseource
            const _route = new Router();

            // get controller object of resource
            const _controller = controller({model, ...context});

            // run router function to attach _route with _controller
            return router(_route, _controller);
        }
        catch (err) {
            log.error("[error] [" + resourceController + "] " + err)
        }
    }
}
