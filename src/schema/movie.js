import { genres } from "../../data/db.json";
import ajv from "./ajv";

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
			minimum: 1888, //first movie was made in year 1888
		},
		runtime: {
			type: "integer",
			minimum: 1,
		},
		genres: {
			description: "Movies genres",
			type: "array",
			items: {
				type: "string",
				enum: genres,
			},
			minItems: 1,
			uniqueItems: true
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

module.exports = ajv.compile(movieSchema);