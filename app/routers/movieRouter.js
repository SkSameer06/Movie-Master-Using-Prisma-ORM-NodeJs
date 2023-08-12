var express = require('express');
var router = express.Router();
var movieController = require("../controllers/movieController");

/* GET home page. */

router.get('/', movieController.form);

router.post('/', movieController.addMovie);

router.get('/card', movieController.showCards);

router.get('/movie-page', movieController.showMovie);

// router.get('/addMovie', movieController.addMovie);

module.exports = router;
