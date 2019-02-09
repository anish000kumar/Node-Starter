require('dotenv').config();
import http from 'http';
import express from 'express';
import initializeDb from '@database';
import setGlobalMiddlewares from './globalMiddlewares';
import log from '@helpers/log';
import initializeApp from './initApp';

let app = express();
app.server = http.createServer(app);

// global middleware
setGlobalMiddlewares(app);

// connect to db
initializeDb()
  .then(db => initializeApp({ app, db }))
  .catch(err => log.error('[error] initApp: ' + err));

export default app;
