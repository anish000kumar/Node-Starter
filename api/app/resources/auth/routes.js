
export default function authRoutes(route, controller) {
    route.post("/login", controller.login);
    route.post("/register", controller.register)
}