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

const getMoviesByGenres = (movies, inputGenres) => {
  let filteredMovies = new Set();
  const genres = parseInputGenres(inputGenres);

  movies.forEach((movie) => {
    movie.genres.forEach((dbGenre) => {
      genres.forEach((genre) => {
        if (genre === dbGenre.toLowerCase()) {
          filteredMovies.add(movie);
        }
      });
    });
  });

  filteredMovies = sortDescByMatchingGenres(filteredMovies, genres);

  return filteredMovies;
}

const sortDescByMatchingGenres = (movies, genres) => {
  movies = Array.from(movies);
  // for (let i = 0; i < movies.length; i++) {
  //   for (let j = 0; j < (movies.length - i - 1); j++) {
  //     const intersectionCurr = movies[j].genres.filter(element => genres.includes(element.toLowerCase()));
  //     const intersectionNext = movies[j + 1].genres.filter(element => genres.includes(element.toLowerCase()));
  //     if (intersectionCurr < intersectionNext) {
  //       const temp = movies[j];
  //       movies[j] = movies[j + 1];
  //       movies[j + 1] = temp;
  //     }
  //   }
  // }
  // movies.forEach((movie) => {
  //   const intersection = movie.genres.filter(element => genres.includes(element.toLowerCase()));
  //   const len = intersection.length;
  //   if (len > 1)
  //     console.log(len)
  // });



  let sortedMovies = quickSort(movies)

  return sortedMovies;
}

const quickSort = (originalList) => {
  const list = [...originalList];

  if (list.length < 2) {
    return list;
  }

  const pivot = list[Math.floor(list.length / 2)];

  const smaller = list.filter((item) => item < pivot);
  const bigger = list.filter((item) => item > pivot);

  return [...quickSort(smaller), pivot, ...quickSort(bigger)];
}

const parseInputGenres = (genres) => {
  let parsedGenres = decodeURIComponent(genres).toLowerCase();
  parsedGenres = parsedGenres.split(' ').join(''); //removes whitespaces
  parsedGenres = parsedGenres.match(/\[(.+)\]/);
  if (!!parsedGenres) {
    parsedGenres = parsedGenres[1].split(",");
  } else {
    parsedGenres = genres.split(",");
  }
  return parsedGenres;
};

export { getMoviesByDuration, getMoviesByGenres };