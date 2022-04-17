import express from 'express';

import movieController from '../controllers/movieController';

import movieSchema from '../schema/movie';
import validate from '../middleware/validate';

const router = express.Router();

router.get('/', movieController.random);

router.get('/', movieController.duration);

router.get('/', movieController.genres);

router.get('/', movieController.genresAndDuration);

router.post('/', validate(movieSchema), movieController.create);

export default router;
