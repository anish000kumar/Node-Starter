import config from '@common/config';
import middlewareProvider from '@middlewares';
import mainProvider from '@main';
import log from '@helpers/log';

export default function initApp({ app, db }) {
  // internal middlewares
  app.use(middlewareProvider({ config, db }));

  // mount @main at /api route
  app.use('/api', mainProvider({ config, db }));

  // start API server
  app.server.listen(process.env.PORT || config.port, () => {
    log.info(
      `Server started on:  http://localhost:${app.server.address().port}`
    );
  });
}
