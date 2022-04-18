import { quickSort } from "../mixins/sort";
import { isInRange } from "../mixins/misc";


const serviceHelpers = {
    sortDescByMatchingGenres: (movies, matchControl) => {
        movies = Array.from(movies);
        matchControl = Array.from(matchControl);

        const sortedMovies = quickSort({ movies, matchControl }, 0, movies.length - 1).movies;

        return sortedMovies;
    },

    parseInputGenres: (genres) => {
        let decodedGenres = decodeURIComponent(genres).toLowerCase();
        return decodedGenres.split(",");
    }
}

const movieService = {
    listByDuration: (_movies, _duration, _range) => {
        const duration = parseInt(_duration);
        const range = parseInt(_range);
        const filteredMovies = Array.from(_movies).filter((movie) => {
            const runtime = parseInt(movie.runtime);
            if (isInRange(runtime, duration, range)) {
                return true;
            }
            return false;
        });

        return filteredMovies;
    },

    listByGenres: (movies, inputGenres) => {
        let filteredMovies = new Set();
        let matchControl = new Set();
        const genres = serviceHelpers.parseInputGenres(inputGenres);

        movies.forEach((movie) => {
            const intersectionNum = movie.genres.filter(element => genres.includes(element.toLowerCase())).length;
            const matchControlEl = {
                movieId: movie.id,
                numOfMatches: intersectionNum
            };
            movie.genres.forEach((dbGenre) => {
                genres.forEach((genre) => {
                    if (genre === dbGenre.toLowerCase()) {
                        filteredMovies.add(movie);
                        matchControl.add(matchControlEl);
                    }
                });
            });
        });

        const sortedMovies = serviceHelpers.sortDescByMatchingGenres(filteredMovies, matchControl);

        return sortedMovies;
    },

    generateId: ({ movies }) => {
        const lastMovieId = movies[movies.length - 1].id;
        return lastMovieId + 1;
    }
}

export default movieService;
