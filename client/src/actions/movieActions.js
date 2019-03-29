import axios from "axios";

import { GET_ALL_MOVIES, ADD_NEW_MOVIE, GET_ERRORS, GET_MOVIE_BY_NAME } from "./types";

// export const getAllMovies = userData => dispatch => {
//   axios
//     .get("/api/movies/getmovies", userData)
//     .then(res => {
//       const { movies } = res.data;
//      dispatch({
//         type: GET_ALL_MOVIES, 
//         payload: movies});
//     })

// };
export const addNewMovie = (movieData, history) => dispatch => {

  console.log('action called....')

  console.log(movieData)

  axios
    .post("/api/movies/addmovie", movieData)
    .then(movieData =>
      dispatch({
        type: ADD_NEW_MOVIE,
        payload: movieData
      })
    )
    .then(res => history.push("/dashboard"))

    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


export const fetchMovies = () => dispatch => {
  console.log("movies fetching....")
  fetch("/api/movies/getmovies")
    .then(res => res.json())
    .then(movies =>
      dispatch({
        type: GET_ALL_MOVIES,
        payload: movies
      }));


}



export const getMoviebyName = name => dispatch => {
  console.log("movies fetching....")
  if (!name) { name = "name" }
  fetch("/api/movies/getMovieByName/" + name)
    .then(res => {
      if (res.status === 200) {
        res.json()
          .then(movie => {
            dispatch({
              type: GET_MOVIE_BY_NAME,
              payload: movie
            });
          })
      }
      else {
        res.json()
          .then(
            err =>
              dispatch({
                type: GET_ERRORS,
                payload: err.data
              }))
      }
    })

    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );



}