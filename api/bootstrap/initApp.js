import config from '@common/config';
import middlewareProvider from '@middlewares';
import apiProvider from '@app';
import log from '@helpers/log';

export default function initApp({ app, db }) {
  // internal middlewares
  app.use(middlewareProvider({ config, db }));

  // api main route
  app.use('/api', apiProvider({ config, db }));

  // start API server
  app.server.listen(process.env.PORT || config.port, () => {
    log.info(
      `Server started on:  http://localhost:${app.server.address().port}`
    );
  });
}
