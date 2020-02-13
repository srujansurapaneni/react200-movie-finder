import { combineReducers } from "redux";
import searchMovieReducer from "./searchMovieReducer";

const movieFinder = combineReducers({
  movie: searchMovieReducer
});
export default movieFinder;
