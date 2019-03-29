import {
  GET_ALL_MOVIES,
  ADD_NEW_MOVIE,
  GET_MOVIE_BY_NAME
} from "../actions/types";

const initialState = {
  movies: {},
  movie: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case ADD_NEW_MOVIE:
      return {
        ...state,
        movies: action.payload
      };
    case GET_MOVIE_BY_NAME:
      console.log("<<<<<<<<<<<<<<<<<<<<<");
      console.log(action.payload);
      return {
        ...state,
        movie: action.payload
      };
    default:
      return state;
  }
}
