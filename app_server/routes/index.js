var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlMovies = require('../controllers/movies')

/* GET home page. */
router.get('/', ctrlMain.index);
module.exports = router;

/* GET movie page*/
router.get('/best',ctrlMovies.theBestMovie);
router.get('/worst',ctrlMovies.theWorstMovie);
module.exports = router;
