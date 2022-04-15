import express from "express";

import movieSchema from "../schema/movie";
import validate from "../middleware/validate";

import * as movieController from '../controllers/movieController';

const router = express.Router();

router.get('/', movieController.random);

router.get('/', movieController.randomWithDuration);

router.get('/', movieController.listWithGenres);

router.get('/', movieController.listWithGenresAndDuration);

router.post('/', validate(movieSchema), movieController.create);

module.exports = router;