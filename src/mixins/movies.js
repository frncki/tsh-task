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
    let filteredMovies = new Set();

  movies.forEach((movie) => {
    movie.genres.forEach((dbGenre) => {
      genres.forEach((inputGenre) => {
        if (inputGenre.toLowerCase() === dbGenre.toLowerCase()) {
          filteredMovies.add(movie);
        }
      });
    });
  });

  return filteredMovies;
}

export { getMoviesByDuration, getMoviesByGenres };