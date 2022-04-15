import express from "express";
import path from 'path';
import fs from 'fs';

import db from "../data/db.json";
import { getMoviesByDuration, getMoviesByGenres } from "../mixins/movies";
import { randomInt } from "../mixins/random";

import movieSchema from "../schema/movie";
import validate from "../middleware/validate";

const router = express.Router();

router.get('/', (req, res, next) => { // no params
    let duration = req.query.duration;
    let genres = req.query.genres;
    if (!duration && !genres) {
        const randomMovieIndex = randomInt(0, db.movies.length);
        return res.status(200).send(db.movies[randomMovieIndex]);
    } else {
        return next();
    }
});

router.get('/', (req, res, next) => { // duration only
    let duration = req.query.duration;
    let genres = req.query.genres;
    if (duration && !genres) {
        console.log('duration only');
        const filteredMovies = getMoviesByDuration(db.movies, duration, 10);
        const randomMovieIndex = randomInt(0, filteredMovies.length);
        if (!filteredMovies.length) {
            return res.status(404).send(filteredMovies);
        }
        return res.status(200).send(filteredMovies[randomMovieIndex]);
    } else {
        return next();
    }
});

router.get('/', (req, res, next) => { // genres only
    let duration = req.query.duration;
    let genres = req.query.genres;
    if (!duration && genres) {
        console.log('genres only');
        const filteredMovies = getMoviesByGenres(db.movies, genres);
        if (!filteredMovies.length) {
            return res.status(404).send(filteredMovies);
        }
        return res.status(200).send(filteredMovies);
    } else {
        return next();
    }
});

router.get('/', (req, res) => { // duration and genres
    let duration = req.query.duration;
    let genres = req.query.genres;
    if (duration && genres) {
        console.log('duration and genres');
        let filteredMovies = getMoviesByGenres(db.movies, genres);
        filteredMovies = getMoviesByDuration(filteredMovies, duration, 10);
        if (!filteredMovies.length) {
            return res.status(404).send(filteredMovies);
        }
        return res.status(200).send(filteredMovies);
    }
});

router.get('/all', (req, res) => { // for testing/checking purposes
    return res.status(200).send(db.movies);
});

router.post('/', validate(movieSchema), (req, res, next) => {
    const movie = req.body;
    let database = db;
    database.movies.push(movie);
    // TODO implement adding increasing id to movie
    const dataFilePath = path.join(__dirname, '../data/db.json');
    fs.writeFileSync(dataFilePath, JSON.stringify(database), { encoding: 'utf8', flag: 'w' });
    return res.status(201).send({ message: 'movie saved successfully' });
});

module.exports = router;