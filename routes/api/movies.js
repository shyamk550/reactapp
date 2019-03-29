const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
var mongoose = require('mongoose');

// Load input validation
const validateMoviesInput = require("../../validation/addmovie");
const validateMoviesSearch = require("../../validation/searchmovie");

// Load User model
const Movies = require("../../models/Movies");


router.get('/getmovies',(req, res) =>{
    Movies.find({}, function(err, result) {
    if (err) throw err;
    const movies = result.map((result)=>{
      return {id: result._id, name: result.name, genre: result.genre, rating: result.rating, story: result.story, cast: result.cast, releasedate: result.releasedate}
  })

  res.json(movies)

  });
})
  
router.get('/getMovieByName/:name', (req, res) =>{
  console.log("in getMovieByName")
  if(req.params.name === "name"){req.params.name = ""}
const { errors, isValid } = validateMoviesSearch( req.params);
console.log(errors)
if (!isValid) {
  console.log("is not Valid")

  return res.status(400).json(errors);
}
console.log("is  Valid")

      Movies.findOne({ name: req.params.name }, function(err, movieData){
          if (err) throw err;
          if(!movieData){
            return res.status(400).json({ name: "Movie Not found" });
          }
          const payload = {
          name: movieData.name,
          genre: movieData.genre,
          rating: movieData.rating,
          story: movieData.story,
          cast: movieData.cast,
          releasedate: movieData.releasedate,
        };
        res.json(payload);
      })
  });



  
// router.get('/getMovieByName/:name', (req, res) =>{

// console.log("req.params: ")
//   console.log( req.params);

// var movieName =  req.params.name;

// const { errors, isValid } = validateMoviesSearch(req.params);
// console.log(errors)
// if (!isValid) {
//   return res.status(400).json(errors);
// }
//       Movies.findOne({ name: movieName }, function(err, movieData){
//           if (err) throw err;
//           if(!movieData){
//             return res.status(400).json({ name: "Movie Not found" });
//           }
//           console.log(movieData)
//           const payload = {
//           name: movieData.name,
//           genre: movieData.genre,
//           rating: movieData.rating,
//           story: movieData.story,
//           cast: movieData.cast,
//           releasedate: movieData.releasedate,
//         };
//         res.json(payload);
//       })
//   });


router.post("/addmovie", (req, res) => {
  console.log(req.body.name);
  const { errors, isValid } = validateMoviesInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Movies.findOne({ name: req.body.name }).then(movie => {
    console.log(movie);
    if (movie) {
      return res.status(400).json({ name: "Movie already exists" });
    } else {
      const newMovie = new Movies({
        name: req.body.name,
        genre: req.body.genre,
        rating: req.body.rating,
        story: req.body.story,
        cast: req.body.cast,
        releasedate: req.body.releasedate,
      });
          newMovie
            .save()
            .then(movie => res.json(movie))
            .catch(err => console.log(err));
    }
  });
});


router.post('/editmovie', (req, res) =>{
  var MovieData = {}
  if(req.body.name) MovieData.name = req.body.name;
  if(req.body.genre) MovieData.genre = req.body.genre;
  if(req.body.rating) MovieData.rating =  req.body.rating;
  if(req.body.story) MovieData.story = req.body.story;
  if(req.body.cast) MovieData.cast = req.body.cast;
  if(req.body.releasedate) MovieData.releasedate = req.body.releasedate;
      var id ={_id: req.body.id};
      Movies.findOneAndUpdate(id, {$set: MovieData}, {new: true},
        function(err, updatedData){
        if (err) return next(err);
        const payload = {
          name: updatedData.name,
          genre: updatedData.genre,
          rating: updatedData.rating,
          story: updatedData.story,
          cast: updatedData.cast,
          releasedate: updatedData.releasedate,
        };
        res.json(payload);
      })
  });



  
router.delete('/deletemovie/:name', (req, res) =>{
  console.log("in getMovieByName")
  if(req.params.name === "name"){req.params.name = ""}
const { errors, isValid } = validateMoviesSearch( req.params);
console.log(errors)
if (!isValid) {
  console.log("is not Valid")

  return res.status(400).json(errors);
}
console.log("is  Valid")
console.log(req.params.name);
      Movies.findOneAndRemove({ name: req.params.name }, function(err, movieData){
          if (err) throw err;
          if(!movieData){
            return res.status(400).json({ name: "Movie Not found" });
          }
          res.json("Movie " +movieData.name+" has been Deleted");
      })
  });

module.exports = router;
