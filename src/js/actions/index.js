export const updateSearchMovieInput = input => {
  return {
    type: "UPDATE_INPUT",
    payload: { input }
  };
};

export const submitSearchMovieInput = movie => {
  return {
    type: "SUBMIT_INPUT",
    payload: { movie }
  };
};

export const moreInfo = id => {
  return {
    type: "MORE_INFO",
    payload: { movieInfo }
  };
};
