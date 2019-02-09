import http from 'http';
import express from 'express';
import initializeDb from '@database';
import config from '@common/config';
import setGlobalMiddlewares from "./globalMiddlewares";
require('dotenv').config()
import log from "@helpers/log"
import middlewareProivider from '@middlewares';
import apiProvider from '@app';

let app = express();
app.server = http.createServer(app);

// global middleware 
setGlobalMiddlewares(app);

// connect to db 
initializeDb()
    .then(db => {
        // internal middlewares 
        app.use(middlewareProivider({ config, db }));

        // api main route  
        app.use('/api', apiProvider({ config, db }));

        // start API server 
        app.server.listen(process.env.PORT || config.port, () => {
            log.info(`Server started on:  http://localhost:${app.server.address().port}`);
        });
    })
    .catch(err => {
        log.error("[error] Stopping app because DB connection failed");
    })

export default app;