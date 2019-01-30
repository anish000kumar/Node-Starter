import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from '../../common/config';

export default function setGlobalMiddlewares(app) {
    // logger
    app.use(morgan('dev'));

    // 3rd party middleware
    app.use(cors({
        exposedHeaders: config.corsHeaders
    }));

    // body-parser to attach body to request object
    app.use(bodyParser.json({
        limit: config.bodyLimit
    }));

}