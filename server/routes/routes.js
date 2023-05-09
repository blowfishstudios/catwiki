const express = require('express');
const router = express.Router();

const getBreeds = require('../controllers/getBreeds');
const getTop10 = require('../controllers/getTop10');
const getBreedById = require('../controllers/getBreedById');


router.get('/api/v1/breeds', getBreeds);
router.get('/api/v1/top10', getTop10);
router.get('/api/v1/breeds/:name', getBreedById);


module.exports = router;