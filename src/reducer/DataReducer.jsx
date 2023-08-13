export const DataReducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        searchTerm: action.payload,
      };

    case "SORT_BY_GENRE":
      localStorage.setItem("sortByGenre", action.payload);
      return {
        ...state,
        sortByGenre: action.payload,
      };

    case "SORT_BY_RELEASE_YEAR":
      localStorage.setItem("sortByYear", action.payload);
      return {
        ...state,
        sortByYear: action.payload,
      };

    case "SORT_BY_RATING":
      localStorage.setItem("sortByRating", action.payload);
      return {
        ...state,
        sortByRating: action.payload,
      };

    case "ADD_NEW_MOVIE":
      localStorage.setItem(
        "data",
        JSON.stringify([...state?.moviesData, action.payload])
      );
      return {
        ...state,
        moviesData: [...state?.moviesData, action.payload],
      };

    case "STAR_MOVIE":
      const isAlreadyStarred = state.starredMovies.some(
        (movie) => movie.id === action.payload.id 
      );

      if (isAlreadyStarred) {
        return state;
      }

      const updatedData = [...state?.starredMovies, action.payload];

      localStorage.setItem("starredMovies", JSON.stringify(updatedData));
      return {
        ...state,
        starredMovies: updatedData,
      };

    case "UNSTAR_MOVIE":
      const unstarredMovieData = state?.starredMovies?.filter(
        (movie) => movie?.id !== action.payload?.id
      );
      localStorage.setItem("starredMovies", JSON.stringify(unstarredMovieData));
      return {
        ...state,
        starredMovies: unstarredMovieData,
      };
    default:
      return state;
  }
};
