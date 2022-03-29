const getMoviesByDuration = (_movies, _duration, _range) => {
    const duration = parseInt(_duration);
    const range = parseInt(_range);
    const filteredMovies = _movies.filter((movie) => {
        const runtime = parseInt(movie.runtime);
        if (isInRange(runtime, duration, range)) {
            return true;
        }
        return false;
    });

    return filteredMovies;
}

const isInRange = (runtime, duration, range) => {
    return runtime <= (duration + range) && runtime >= (duration - range);
}

const getMoviesByGenres = (movies, genres) => {
    const moviesSet = movies.reduce((prev, curr) => new Set([...prev, ...curr.genres]), new Set);
    console.log(moviesSet);
    const filteredMovies = genres.filter(a => !moviesSet.has(a.genre));
    return filteredMovies;
}

export { getMoviesByDuration, getMoviesByGenres };