import MovieSearchComponent from "../components/MovieSearchComponent";
import { connect } from "react-redux";

const mapStoreToProps = store => {
  return {
    input: store.movie.input,
    movie: store.movie.movie
  };
};

let movieSearch = connect(mapStoreToProps)(MovieSearchComponent);
// let movieSearch = MovieSearchComponent;
export default movieSearch;
