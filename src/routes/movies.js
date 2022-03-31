import express from "express";
import { Validator } from "express-json-validator-middleware";
const { validate } = new Validator();

import { movies } from "../../data/db.json";
import { getMoviesByDuration, getMoviesByGenres } from "../mixins/movies";
import { movieSchema } from "../models/validation";

const router = express.Router();

router.get('/', (req, res, next) => { // no params
    let duration = req.query.duration;
    let genres = req.query.genres;
    if (!duration && !genres) {
        const randomMovieIndex = Math.floor(Math.random() * movies.length);
        return res.send(movies[randomMovieIndex]);
    } else {
        return next();
    }
});

router.get('/', (req, res, next) => { // duration only
    let duration = req.query.duration;
    let genres = req.query.genres;
    if (duration && !genres) {
        console.log('duration only');
        const filteredMovies = getMoviesByDuration(movies, duration, 10);
        const randomMovieIndex = Math.floor(Math.random() * filteredMovies.length);
        return res.send(filteredMovies[randomMovieIndex]);
    } else {
        return next();
    }
});

router.get('/', (req, res, next) => { // genres only
    let duration = req.query.duration;
    let genres = req.query.genres;
    if (!duration && genres) {
        console.log('genres only');
        const filteredMovies = getMoviesByGenres(movies, genres);
        return res.send(filteredMovies);
    } else {
        return next();
    }
});

router.get('/', (req, res) => { // duration and genres
    let duration = req.query.duration;
    let genres = req.query.genres;
    if (duration && genres) {
        console.log('duration and genres');
        let filteredMovies = getMoviesByGenres(movies, genres);
        filteredMovies = getMoviesByDuration(filteredMovies, duration, 10);
        return res.send(filteredMovies);
    }
});

router.get('/all', (req, res) => { // for testing/checking purposes
    return res.send(movies);
});

router.post('/', validate({ body: movieSchema }), (req, res, next) => {
    return res.send('movies');
});

module.exports = router;