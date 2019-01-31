import { Router } from 'express';
import userResource from "./resources/user"
import authResource from "./resources/auth"
import RootController from "./controllers/rootController";


export default function apiMain(context) {
    const api = Router();
    const rootController = new RootController(context);

    api.get('/', rootController.index);
    api.use('/user', userResource(context))
    api.use('/auth', authResource(context))

    return api;
}