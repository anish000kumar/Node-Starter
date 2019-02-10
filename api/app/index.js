import userApp from '@app/user';
import authApp from '@app/auth';

function registerApps(api, context) {
  api.use('/user', userApp(context));
  api.use('/auth', authApp(context));
}

export default registerApps;
