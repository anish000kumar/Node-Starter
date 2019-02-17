import userApp from '@app/user';

function registerApps(app) {
  app.use('/user', userApp);
}

export default registerApps;
