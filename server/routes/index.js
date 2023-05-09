const express = require('express');
const router = express.Router();

const getBreeds = require('../controllers/breeds');
const getTop10 = require('../controllers/top10');


router.get('/api/v1/breeds', getBreeds);
router.get('/api/v1/top10', getTop10);


module.exports = router;