import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from '../../common/config';
import handlebars from 'express-handlebars';

export default function setGlobalMiddlewares(app) {
  app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
  app.set('view engine', 'handlebars');
  app.use(express.static('public'));
  // Logger middleware
  app.use(morgan('dev'));

  // CORS middleware
  app.use(
    cors({
      exposedHeaders: config.corsHeaders,
    })
  );

  // for parsing application/json
  app.use(bodyParser.json());

  // for parsing application/xwww-
  app.use(bodyParser.urlencoded({ extended: true }));
  //form-urlencoded
}
