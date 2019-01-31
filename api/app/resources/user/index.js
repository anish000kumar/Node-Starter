import { resource } from "../../controllers";
import UserController from "./userController";

function userRouter(route, controller) {

    route.get("/", controller.getAll);
    route.post("/", controller.create);
    route.get("/:id", controller.get);
    route.put("/:id", controller.update);
    route.delete("/:id", controller.destroy);

}

export default resource(UserController, userRouter)