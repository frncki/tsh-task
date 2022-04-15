import express from "express";
const router = express.Router();

import * as indexController from '../controllers/indexController';

router.get('/', indexController.main);

module.exports = router;