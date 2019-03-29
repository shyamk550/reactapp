const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.genre = !isEmpty(data.genre) ? data.genre : "";
  data.rating = !isEmpty(data.rating) ? data.rating : "";
  data.story = !isEmpty(data.story) ? data.story : "";
  data.cast = !isEmpty(data.cast) ? data.cast : "";
  data.releasedate = !isEmpty(data.releasedate) ? data.releasedate : "";



  if (Validator.isEmpty(data.name)) {
    errors.name = "Movie Name is required";
  }

  if (Validator.isEmpty(data.genre)) {
    errors.genre = "Movie Genre is required";
  } 

  if (Validator.isEmpty(data.rating)) {
    errors.rating = "Rating is required";
  }

  if (!Validator.isLength(data.rating, { min: 1, max: 10 })) {
    errors.rating = "Rating must be at least 1";
  }

  if (Validator.isEmpty(data.story)) {
    errors.story = "Story is required";
  }
  if (Validator.isEmpty(data.cast)) {
    errors.cast = "Cast details are required";
  }
  if (Validator.isEmpty(data.releasedate)) {
    errors.releasedate = "Release date is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
