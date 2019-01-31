import { resource } from "../../controllers";
import AuthController from "./authController";

function authRouter(route, controller) {

    route.post("/login", controller.login);
    route.post("/register", controller.register)

}

export default resource(AuthController, authRouter)
