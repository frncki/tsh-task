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
    let inputGenres = parseInputGenres(genres);
    
    movies.forEach((movie) => {
      movie.genres.forEach((dbGenre) => {
        inputGenres.forEach((inputGenre) => {
          if (inputGenre.toLowerCase() === dbGenre.toLowerCase()) {
            filteredMovies.add(movie);
          }
        });
      });
    });

    return filteredMovies;
}

const parseInputGenres = (genres) => {
  let parsedGenres = decodeURIComponent(genres);
  parsedGenres = parsedGenres.match(/\[(.+)\]/);
  if (!!parsedGenres[1]) {
    parsedGenres = parsedGenres[1].split(",");
  } else {
    parsedGenres = genres.split(",");
  }
  return parsedGenres;
};

export { getMoviesByDuration, getMoviesByGenres };