import 'dotenv/config';
import express from "express";
import indexRouter from "../routes/index";
import moviesRouter from "../routes/movies";

const app = express();
const paths = {
    index: "/",
    movies: "/movies",
};

const middlewares = () => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
}

const routes = () => {
    app.use(paths.index, indexRouter);
    app.use(paths.movies, moviesRouter);
}

middlewares();
routes();

export default app;
