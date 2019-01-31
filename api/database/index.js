import mongoose from "mongoose";
import log from "../helpers/log";


export default function initDatabase() {
    return new Promise((resolve, reject) => {
        try {
            // start connection
            log.info("[mongoDB] Initiaining connection...")
            mongoose.connect(process.env.DB_CONNECTION_STRING)
            var db = mongoose.connection;

            // connection error
            db.on('error', function (err) {
                log.error(`[mongoDB] Connection failed for: ${process.env.DB_CONNECTION_STRING} `);
                log.error(err);
                reject(err);
            });

            // success
            db.once('open', function () {
                log.success("[mongoDB] Connected to database!")
                resolve(true)
            });
        }
        catch (err) {
            log.error(err);
            reject(err)
        }
    })
}