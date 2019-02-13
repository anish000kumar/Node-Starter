export default function authRoutes(route, controller) {
  route.post('/login', controller.login);
  route.post('/register', controller.register);
  route.put('/resetPassword', controller.resetPassword);
  route.put('/changePassword', controller.changePassword);
  route.post('/requestReset', controller.requestResetPassword);

  return route;
}
