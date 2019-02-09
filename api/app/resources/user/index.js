import { createResource } from "@helpers";
import userController from "./controller";
import userRouter from "./routes.js";
import userModel from "./model.js"

export default createResource({
    router: userRouter,
    controller: userController,
    model: userModel
})