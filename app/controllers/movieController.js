var express = require("express");
const movieDao = require("../models/movieDao");

module.exports = {

    addMovie: function (req, res) {

        // console.log(req.body.title);
        // console.log(req.body.type);
        // console.log(req.body.release_date);
        // console.log(req.body.director);
        // console.log(req.body.budget);
        // console.log(req.body.story_line);
        // console.log(req.body.cast);
        // console.log(req.body.trailer_link);

        const  title = "variable";
        const type = "variable";
        const release_date = "variable";
        const director = "variable";
        const budget = "variable";
        const story_line = "variable";
        const cast = "variable";
        const trailer_link = "variable";

        const movieObj = {
            "title" : title,
            "type" : type,
            "release_date" : release_date,
            "director" : director,
            "budget" : budget,
            "story_line" : story_line,
            "cast" : cast,
            "trailer_link" : trailer_link,
        }
        console.log(movieObj.title);

        movieDao.addmovies(movieObj);

        res.json("JavaScript");


    },

}