import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from '../../common/config';

export default function setGlobalMiddlewares(app) {
    // Logger middleware
    app.use(morgan('dev'));

    // CORS middleware
    app.use(cors({
        exposedHeaders: config.corsHeaders
    }));

    // Body-parser to attach body to request object
    app.use(bodyParser.json({
        limit: config.bodyLimit
    }));

}