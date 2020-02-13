const defaultState = {
  input: "a",
  movie: ["a", "b"]
};
const searchMovieText = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SUBMIT_INPUT":
      return {
        ...state,
        input: payload.input
      };
    default: {
      return state;
    }
  }
};
