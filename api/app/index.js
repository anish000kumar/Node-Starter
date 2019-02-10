import userApp from '@app/user';
import authApp from '@app/auth';
import auth from '@app/auth/middleware';

function registerApps(app, context) {
  app.use('/user', auth, userApp(context));
  app.use('/auth', authApp(context));
}

export default registerApps;
