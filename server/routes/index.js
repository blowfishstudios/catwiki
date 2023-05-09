const express = require('express');
const router = express.Router();

const getBreeds = require('./breeds');


router.get('/api/v1/breeds', getBreeds);


module.exports = router;