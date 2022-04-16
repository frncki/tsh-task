import 'dotenv/config';
import express from "express";
import apiErrorHandler from '../middleware/error';
import indexRouter from "../routes/index";
import moviesRouter from "../routes/movies";

const app = express();
const paths = {
    index: "/",
    movies: "/movies",
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(paths.index, indexRouter);
app.use(paths.movies, moviesRouter);

app.use(apiErrorHandler);

export default app;
