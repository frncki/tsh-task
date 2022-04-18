// TODO test - positive and negative for quickSort

import { quickSort } from '../../mixins/sort';

const movies = [
    {
        id: 41,
        title: "Moneyball",
        year: "2011",
        runtime: "133",
        genres: [
            "Biography",
            "Drama",
            "Sport"
        ],
        director: "Bennett Miller",
        actors: "Brad Pitt, Jonah Hill, Philip Seymour Hoffman, Robin Wright",
        plot: "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
        posterUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg"
    },
    {
        id: 87,
        title: "The Hitchhiker's Guide to the Galaxy",
        year: "2005",
        runtime: "109",
        genres: [
            "Adventure",
            "Comedy",
            "Sci-Fi"
        ],
        director: "Garth Jennings",
        actors: "Bill Bailey, Anna Chancellor, Warwick Davis, Yasiin Bey",
        plot: "Mere seconds before the Earth is to be demolished by an alien construction crew, journeyman Arthur Dent is swept off the planet by his friend Ford Prefect, a researcher penning a new edition of \"The Hitchhiker's Guide to the Galaxy.\"",
        posterUrl: "http://ia.media-imdb.com/images/M/MV5BMjEwOTk4NjU2MF5BMl5BanBnXkFtZTYwMDA3NzI3._V1_SX300.jpg"
    },
    {
        id: 121,
        title: "Nebraska",
        year: "2013",
        runtime: "115",
        genres: [
            "Adventure",
            "Comedy",
            "Drama"
        ],
        director: "Alexander Payne",
        actors: "Bruce Dern, Will Forte, June Squibb, Bob Odenkirk",
        plot: "An aging, booze-addled father makes the trip from Montana to Nebraska with his estranged son in order to claim a million-dollar Mega Sweepstakes Marketing prize.",
        posterUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2Mjk2NDkyMl5BMl5BanBnXkFtZTgwNTk0NzcyMDE@._V1_SX300.jpg"
    },
    {
        id: 124,
        title: "Original Sin",
        year: "2001",
        runtime: "116",
        genres: [
            "Drama",
            "Mystery",
            "Romance"
        ],
        director: "Michael Cristofer",
        actors: "Antonio Banderas, Angelina Jolie, Thomas Jane, Jack Thompson",
        plot: "A woman along with her lover, plan to con a rich man by marrying him and on earning his trust running away with all his money. Everything goes as planned until she actually begins to fall in love with him.",
        posterUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BODg3Mjg0MDY4M15BMl5BanBnXkFtZTcwNjY5MDQ2NA@@._V1_SX300.jpg"
    }
];

const matchControl = [
    {
        movieId: 41,
        numOfMatches: 1
    },
    {
        movieId: 87,
        numOfMatches: 2
    },
    {
        movieId: 121,
        numOfMatches: 3
    },
    {
        movieId: 124,
        numOfMatches: 1
    },
];

describe('quickSort', () => {
    it('returns array of sorted movies with assumption the genres query was Drama,Comedy,Adventure', () => {
        const expectedOutput = [
            movies[2],
            movies[1],
            movies[3],
            movies[0]
        ];

        const sortedMovies = quickSort({ movies, matchControl }, 0, movies.length - 1).movies;

        expect(sortedMovies).toEqual(expectedOutput);
    });
});
