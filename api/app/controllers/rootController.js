import { Controller } from "./index";
import { version } from "../../package.json";

class RootController extends Controller {

    /* index route for app */
    index(req, res) {
        res.send({
            name: this.config.name,
            version: version
        })
    }

}

export default RootController;