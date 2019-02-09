import { Router } from 'express';
import rootController from "@controllers/rootController";
import registerResources from "@resources";

 function apiProvider(context) {


    const api = Router();
    // global routes
    api.get('/', rootController(context).index);

    // resources
    registerResources(api, context);
    return api;
}


export default apiProvider