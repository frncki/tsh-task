import movieService from '../movieService';

const movies = [
    {
        "id": 75,
        "title": "Crash",
        "year": "2004",
        "runtime": "112",
        "genres": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "director": "Paul Haggis",
        "actors": "Karina Arroyave, Dato Bakhtadze, Sandra Bullock, Don Cheadle",
        "plot": "Los Angeles citizens with vastly separate lives collide in interweaving stories of race, loss and redemption.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTk1OTA1MjIyNV5BMl5BanBnXkFtZTcwODQxMTkyMQ@@._V1_SX300.jpg"
    },
    {
        "id": 86,
        "title": "The Grand Budapest Hotel",
        "year": "2014",
        "runtime": "99",
        "genres": [
            "Adventure",
            "Comedy",
            "Crime"
        ],
        "director": "Wes Anderson",
        "actors": "Ralph Fiennes, F. Murray Abraham, Mathieu Amalric, Adrien Brody",
        "plot": "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg"
    },
    {
        "id": 137,
        "title": "Spotlight",
        "year": "2015",
        "runtime": "128",
        "genres": [
            "Biography",
            "Crime",
            "Drama"
        ],
        "director": "Tom McCarthy",
        "actors": "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber",
        "plot": "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_SX300.jpg"
    },
    {
        "id": 143,
        "title": "To Kill a Mockingbird",
        "year": "1962",
        "runtime": "129",
        "genres": [
            "Crime",
            "Drama"
        ],
        "director": "Robert Mulligan",
        "actors": "Gregory Peck, John Megna, Frank Overton, Rosemary Murphy",
        "plot": "Atticus Finch, a lawyer in the Depression-era South, defends a black man against an undeserved rape charge, and his kids against prejudice.",
        "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMjA4MzI1NDY2Nl5BMl5BanBnXkFtZTcwMTcyODc5Mw@@._V1_SX300.jpg"
    }
];

describe('listByDuration', () => {
    it('POSITIVE - returns array of movies with given duration +-range', () => {
        const duration = 130;
        const range = 10;
        const listedMovies = movieService.listByDuration(movies, duration, range);

        const expectedOutput = [
            movies[2],
            movies[3],
        ];
        expect(listedMovies).toEqual(expectedOutput);
    });
});

describe('listByGenres', () => {
    it('POSITIVE - returns array of movies sorted by genres occurencies', () => {
        const genres = ['Crime, Drama'];
        const expectedOutput = [
            movies[2],
            movies[3],
            movies[0],
            movies[1]
        ];
        const listedMovies = movieService.listByGenres(movies, genres);

        expect(listedMovies).toEqual(expectedOutput);
    });
});

describe('generateId', () => {
    it('POSITIVE - returns id that is incremented relative to the last element of given array', () => {
        const id = movieService.generateId({ movies });

        expect(id).toEqual(144);
    });
});
