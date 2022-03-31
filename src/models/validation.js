import { genres } from "../../data/db.json";

const movieSchema = {
	type: "object",
	required: ["title", "year", "runtime", "genres", "director"],
	properties: {
		title: {
			type: "string",
			minLength: 1,
            maxLength: 255,
		},
		year: {
			type: "integer",
			minimum: 1888, //first movie was in year 1888
		},
        runtime: {
			type: "integer",
            minimum: 1,
		},
        genres: {
			type: "string",
			enum: genres,
		},
        director: {
			type: "string",
			minLength: 1,
            maxLength: 255,
		},
		actors: {
			type: "string",
		},
        plot: {
			type: "string",
		},
        posterUrl: {
			type: "string",
			minLength: 4,
		},
	},
};

export { movieSchema };