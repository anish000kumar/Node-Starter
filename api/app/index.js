import { Router } from 'express';
import registerResources from "@resource";
import registerRoutes from "./resources";

 function apiProvider(context) {
    const api = Router();

    // global routes
    registerRoutes(api, context);
    // resources
    registerResources(api, context);

    return api;
}


export default apiProvider