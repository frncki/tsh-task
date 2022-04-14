import regeneratorRuntime from "regenerator-runtime";
import Server from '../../models/server';
import request from 'supertest';

const server = new Server();

describe('positive GET /movies', () => { //positive tests
    it('returns status 200 and random movie', async () => {
        const res = await request(server.app).get('/movies');

        expect(res.statusCode).toEqual(200);
    });

    it('returns status 200 and random movie between specified duration as a query param',
        async () => {
            const min = 60;
            const max = 239;
            const randomDuration = Math.floor(Math.random() * (max - min + 1)) + min;
            const res = await request(server.app).get(`/movies?duration=${randomDuration}`);

            expect(res.statusCode).toEqual(200); //actual test will be written here!
        }
    );

    it('returns status 200 and an array of movies with genres specified array of genres as a query param, sorted by similarity',
        async () => {
            const res = await request(server.app).get(`/movies?genres=Drama,Thriller,Fantasy`);

            expect(res.statusCode).toEqual(200); //actual test will be written here!
        }
    );

    it('returns status 200 and an array of movies with genres specified array of genres as a query param, sorted by similarity, narrowed by duration specified as a query param',
        async () => {
            const min = 60;
            const max = 239;
            const randomDuration = Math.floor(Math.random() * (max - min + 1)) + min;
            const res = await request(server.app).get(`/movies?genres=Drama,Thriller,Fantasy&duration=${randomDuration}`);

            expect(res.statusCode).toEqual(200); //actual test will be written here!
        }
    );
});

describe('negative GET /movies', () => { //negative tests
    it('returns status 404 if duration doesnt match any from db',
        async () => {
            const res = await request(server.app).get(`/movies?duration=2137`);

            expect(res.statusCode).toEqual(404); //actual test will be written here!
        }
    );

    it('returns status 404 if genres in query param doesnt match any from db',
        async () => {
            const res = await request(server.app).get(`/movies?genres=Drama,Thriller,Fantasy`);

            expect(res.statusCode).toEqual(200); //actual test will be written here!
        }
    );
});

describe('positive POST /movies',  () => {
    it('returns status 201 if title, year, runtime, genres, director are passed', async () => {
        const payload = {
            "title": "Star Wars: Episode VI - Return of the Jedi",
            "year": "1983",
            "runtime": "131",
            "genres": [
                "Action",
                "Adventure",
                "Sci-Fi"
            ],
            "director": "Richard Marquand",
            "actors": "Marc Hamill, Harrison Ford, Carrie Fisher, Peter Mayhew",
            "plot": "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
            "posterUrl": "https://m.media-amazon.com/images/I/9190g1V08iL._AC_SY879_.jpg"
        };
        const res = await request(server.app).post(`/movies`).send(payload);

        expect(res.statusCode).toEqual(201); //actual test will be written here!
    });
});

describe('negative POST /movies',  () => {
    it('returns status 400 if title is missing', async () => {
        const payload = {};
        const res = await request(server.app).post(`/movies`).send(payload);

        expect(res.statusCode).toEqual(400); //actual test will be written here!
    });
});