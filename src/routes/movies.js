import express from 'express';

import movieController from '../controllers/movieController';

import movieSchema from '../schema/movie';
import validate from '../middleware/validate';

const router = express.Router();

router.get('/', movieController.random);

router.get('/', movieController.randomWithDuration);

router.get('/', movieController.listWithGenres);

router.get('/', movieController.listWithGenresAndDuration);

router.post('/', validate(movieSchema), movieController.create);

export default router;
