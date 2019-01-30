import http from 'http';
import express from 'express';
import initializeDb from '../database';
import middleware from '../middleware';
import api from '../api';
import config from '../../common/config';
import setGlobalMiddlewares from "./globalMiddlewares";

let app = express();
app.server = http.createServer(app);

// global middleware
setGlobalMiddlewares(app);

// connect to db
initializeDb()
    .then(db => {
        // internal middleware
        app.use(middleware({ config, db }));
        // api router
        app.use('/api', api({ config, db }));
        app.server.listen(process.env.PORT || config.port, () => {
            console.log(`Started:  http://localhost:${app.server.address().port}`);
        });
    })
    .catch(err => {
        console.log("could not connect to the database, error logged below: \n " + err);
    })

export default app;