import fs from 'fs';
import path from 'path';
import movieService from '../service/movieService';

const dataFilePath = path.join(__dirname, '../data/db.json');

export const readJSON = () => {
    try {
        const rawData = fs.readFileSync(dataFilePath, 'utf8');
        const data = JSON.parse(rawData);
        return data;
    } catch (err) {
        // console.error(err); // dev mode only
        throw new Error("Error while reading JSON");
    }
}

export const saveMovie = ({ title, year, runtime, genres, director, actors = "", plot = "", posterUrl = "" }) => {
    try {
        const db = readJSON();
        const movie = {
            id: movieService.generateId(db),
            title,
            year, // this could be parsed to saved it as a string such as: year.toString()
            runtime, // this could be parsed to saved it as a string such as: runtime.toString()
            genres,
            director,
            actors,
            plot,
            posterUrl
        }
        db.movies.push(movie);
        fs.writeFileSync(dataFilePath, JSON.stringify(db), { encoding: 'utf8', flag: 'w' });
    } catch (err) {
        //  console.error(err); // dev mode only
        throw new Error("Error while saving movie");
    }
}
