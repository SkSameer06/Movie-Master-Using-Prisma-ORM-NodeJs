var express = require('express');
var router = express.Router();
var movieController = require("../controllers/movieController");

/* GET home page. */
router.get('/addMovie', movieController.addMovie);

module.exports = router;
