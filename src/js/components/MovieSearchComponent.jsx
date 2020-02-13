import React from "react";
import { updateMovieSearchInput, submitMovie } from "../actions";
import { Link } from "react-router-dom";

export class MovieSearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleGetSearchMovieInput = this.handleGetSearchMovieInput.bind(this);
    this.handleSubmitMovieInput = this.handleSubmitMovieInput.bind(this);
  }
  handleGetSearchMovieInput(e) {
    const { value } = e.target;
    const { dispatch } = this.props;
    dispatch(updateMovieSearchInput(value));
  }
  handleSubmitMovieInput() {
    console.log("submitted");
  }
  render() {
    const { movie } = this.props;
    return (
      <div className="container">
        <h1>Movie Finder</h1>
        <input
          value={this.props.input}
          onChange={this.handleGetSearchMovieInput}
        />
        <button onClick={this.handleSubmitMovieInput}>Go!</button>
      </div>
    );
  }
}

export default MovieSearchComponent;
