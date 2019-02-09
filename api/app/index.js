import { Router } from 'express';
import userResource from "@resources/user"
import authResource from "@resources/auth"
import rootController from "@controllers/rootController";


export default function apiProvider(context) {
    const api = Router();

    api.get('/', rootController.index);
    api.use('/user', userResource(context))
    api.use('/auth', authResource(context))

    return api;
}