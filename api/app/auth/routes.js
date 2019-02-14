import auth from './middleware';

export default function authRoutes(route, controller) {
  route.post('/login', controller.login);
  route.post('/register', controller.register);
  route.post('/password/request', controller.requestResetPassword);
  route.post('/password/reset', controller.resetPassword);
  route.put('/password/change', auth, controller.changePassword);
  return route;
}
