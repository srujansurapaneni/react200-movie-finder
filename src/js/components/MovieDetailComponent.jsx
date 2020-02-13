import React from "react";

class MovieDetailComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Movie Detail Component</h1>

        <p>Viewing movie {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default MovieDetailComponent;
