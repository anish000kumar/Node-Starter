import { Controller } from "../../controllers"
import User from "./model";

export default class UserController extends Controller {

    getAll(req, res) {
        console.log({
            db: this.db,
            config: this.config
        });
        res.json(User.find({}))
    }

    get(req, res) {

    }

    create(req, res) {

    }

    update(req, res) {

    }

    destroy(req, res) {

    }
}

