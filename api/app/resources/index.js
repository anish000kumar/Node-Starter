import { Router } from "express";
import { log } from "@helpers"

export function resource(resourceRouter, resourceController, resourceModel) {
    return function (context) {
        try {
            context = { model: resourceModel, ...context };
            const route = new Router();
            const controller = resourceController(context);
            resourceRouter(route, controller);
            return route;
        }
        catch (err) {
            log.error("[error] [" + resourceController + "] " + err)
        }
    }
}
