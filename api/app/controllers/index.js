import { Router } from "express";

export class Controller {
    constructor(context) {
        // extract items out of
        const { config, db } = context;

        this.config = config;
        this.db = db;
    }
}

export function resource(ResourceController, resourceFunction) {
    return function (context) {
        const route = new Router();
        const controller = new ResourceController(context)
        resourceFunction(route, controller);
        return route;
    }
}