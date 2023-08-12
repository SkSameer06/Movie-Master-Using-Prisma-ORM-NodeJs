var express = require("express");
const movieDao = require("../models/movieDao");


module.exports = {

    form: function (req, res) {
        res.render("form");
    },

    addMovie: function (req, res) {

        const movieObj = JSON.parse(req.body.movieObj);
        const arr = JSON.parse(req.body.arr);

        console.log("Date:::::::::::::>",arr)
        
        movieDao.main(movieObj).then(function(result) {
            
            console.log("All Movies:::::::>",result.id);

            movieDao.cast_det(arr, result.id);
           
         });

        res.json("Sameer");

    },

    showCards: (req, res) => {
        movieDao.allMovie().then(function(result) {
            // const user = result[0];
            console.log("All Movies:::::::>",result[0]);
            res.render("card",{user: result});
         });
        
        
    },

    showMovie: (req, res) => {
        
           
         console.log("DAte::::::::::>",req.query.id);
         const id = req.query.id;
         let cast_list;
         
         movieDao.singleMovie(id).then(function(result) {
            console.log("single Movies:::::::>",result);

            movieDao.movieCast(id).then(function(result1) {
                console.log("single cast:::::::>",result1);
                res.render("movie-page",{user: result, cast_list: result1});
             });

            
         });

         
         
        
        
    },

}