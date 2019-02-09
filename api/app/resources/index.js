import UserResource from '@resources/user';
import AuthResource from '@resources/auth';

function registerResources(api, context) {
  api.get('/user', UserResource(context));
  api.get('/auth', AuthResource(context));
}

export default registerResources;
