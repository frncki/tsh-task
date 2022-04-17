import apiError from '../mixins/apiError';
import { readJSON, saveMovie } from '../mixins/dbCommunication';
import movieService from '../service/movieService';
import { randomInt } from "../mixins/misc";

const movieController = {
    random: (req, res, next) => { // no params
        const db = readJSON();
        let duration = req.query.duration;
        let genres = req.query.genres;
        if (!duration && !genres) {
            const randomMovieIndex = randomInt(0, db.movies.length);
            return res.status(200).send(db.movies[randomMovieIndex]);
        } else {
            return next();
        }
    },

    duration: (req, res, next) => { // duration only
        const db = readJSON();
        let duration = req.query.duration;
        let genres = req.query.genres;
        if (duration && !genres) {
            const filteredMovies = movieService.listByDuration(db.movies, duration, 10);
            const randomMovieIndex = randomInt(0, filteredMovies.length);
            if (!filteredMovies.length) {
                return next(apiError.notFound('Could not find movie for given duration'));
            }
            return res.status(200).send(filteredMovies[randomMovieIndex]);
        } else {
            return next();
        }
    },

    genres: (req, res, next) => { // genres only
        const db = readJSON();
        let duration = req.query.duration;
        let genres = req.query.genres;
        if (!duration && genres) {
            const filteredMovies = movieService.listByGenres(db.movies, genres);
            if (!filteredMovies.length) {
                return next(apiError.notFound('Could not find movies with given genres'));
            }
            return res.status(200).send(filteredMovies);
        } else {
            return next();
        }
    },

    genresAndDuration: (req, res, next) => { // duration and genres
        const db = readJSON();
        const duration = req.query.duration;
        const genres = req.query.genres;

        if (duration && genres) {
            const filteredByGenres = movieService.listByGenres(db.movies, genres);
            const filteredMovies = movieService.listByDuration(filteredByGenres, duration, 10);

            if (!filteredMovies.length) {
                return next(apiError.notFound('Could not find movies with given genres and / or duration'));
            }
            return res.status(200).send(filteredMovies);
        }
    },

    create: (req, res, next) => {
        const movie = req.body;
        try {
            saveMovie(movie);
            return res.status(201).send({ message: 'movie saved successfully' });
        } catch (err) {
            return next(apiError.internal(err.message));
        }
    },
}

export default movieController;
