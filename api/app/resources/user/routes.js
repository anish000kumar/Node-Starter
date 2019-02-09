
export default function userRouter(route, controller) {

    route.get("/", controller.getAll);
    route.post("/", controller.create);
    route.get("/:userId", controller.get);
    route.put("/:userId", controller.update);
    route.delete("/:userId", controller.destroy);

    return route;
}