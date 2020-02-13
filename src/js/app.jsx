import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import movieSearch from "./containers/MovieSearchContainer";
import MovieDetailComponent from "./components/MovieSearchComponent";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={movieSearch} />
          <Route path="/movie/:id" component={MovieDetailComponent} />
        </div>
      </Router>
    );
  }
}
