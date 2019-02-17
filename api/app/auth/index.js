import _authMiddleware from './middleware';
import _authController from './controller';

export default function({ router, model, fields = {}, routes = {} }) {
  const auth = _authMiddleware(model);
  const {
    login = '/login',
    register = '/register',
    requestPassword = '/password/request',
    resetPassword = '/password/reset',
    changePassword = '/password/change',
  } = routes;

  const authController = _authController({ model, fields });

  router.post(login, authController.login);
  router.post(register, authController.register);
  router.post(requestPassword, authController.requestResetPassword);
  router.post(resetPassword, authController.resetPassword);
  router.put(changePassword, auth, authController.changePassword);

  return auth;
}
