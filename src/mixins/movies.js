import { quickSort } from "./sort";

const getMoviesByDuration = (_movies, _duration, _range) => {
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
}

const isInRange = (runtime, duration, range) => {
  return runtime <= (duration + range) && runtime >= (duration - range);
}

const getMoviesByGenres = (movies, inputGenres) => {
  let filteredMovies = new Set();
  let matchControl = new Set();
  const genres = parseInputGenres(inputGenres);

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

  const sortedMovies = sortDescByMatchingGenres(filteredMovies, matchControl);

  return sortedMovies;
}

const sortDescByMatchingGenres = (movies, matchControl) => {
  movies = Array.from(movies);
  matchControl = Array.from(matchControl);

  const sortedMovies = quickSort({ movies, matchControl }, 0, movies.length - 1).movies;
  
  return sortedMovies;
}

const parseInputGenres = (genres) => {
  let genresToParse = decodeURIComponent(genres).toLowerCase();
  genresToParse = genresToParse.split(' ').join(''); //removes whitespaces
  let parsedGenres = genresToParse.match(/\[(.+)\]/);
  if (!!parsedGenres) {
    parsedGenres = parsedGenres[1].split(",");
  } else {
    parsedGenres = genresToParse.split(",");
  }
  return parsedGenres;
};

export { getMoviesByDuration, getMoviesByGenres };