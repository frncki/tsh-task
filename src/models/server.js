import 'dotenv/config';
import express from "express";

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT; // Loaded from .env file
        this.paths = {
            index: "/",
        };

        this.middlewares();
        this.routes();
    }

    middlewares () {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    // Bind controllers to routes
    routes () {
        this.app.use(this.paths.index, require("../routes/index"));
    }

    listen () {
        this.app.listen(this.port, () => {
            console.log(`App listening on http://localhost:${process.env.PORT}`);
        });
    }
}

module.exports = Server;