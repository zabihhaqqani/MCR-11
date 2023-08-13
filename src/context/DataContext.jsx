import { useContext, createContext, useReducer, useEffect } from "react";
import { movies } from "../Data";
import { DataReducer } from "./../reducer/DataReducer";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const initialState = {
    moviesData:
      localStorage.getItem("data") !== null
        ? JSON.parse(localStorage.getItem("data"))
        : movies,
    searchTerm: "",
    sortByGenre: localStorage.getItem("sortByGenre") ?? "All",
    sortByYear: localStorage.getItem("sortByYear") ?? "release year",
    sortByRating: localStorage.getItem("sortByRating") ?? "All Ratings",
    starredMovies:
      localStorage.getItem("starredMovies") !== null
        ? JSON.parse(localStorage.getItem("starredMovies"))
        : [],
  };

  const [dataState, dataDispatch] = useReducer(DataReducer, initialState);

  const filteredBySearch = [...dataState?.moviesData]?.filter((movie) =>
    dataState?.searchTerm?.length > 0
      ? movie?.title
          ?.toLowerCase()
          ?.includes(dataState?.searchTerm?.toLowerCase()?.trim()) ||
        movie?.director
          ?.toLowerCase()
          ?.includes(dataState?.searchTerm?.toLowerCase()?.trim()) ||
        movie?.cast?.some((data) =>
          data
            ?.toLowerCase()
            ?.includes(dataState?.searchTerm?.toLowerCase()?.trim())
        )
      : movie
  );

  const filterByGenre = [...filteredBySearch]?.filter((movies) =>
    dataState?.sortByGenre === "All"
      ? movies
      : movies?.genre?.some((data) => data === dataState?.sortByGenre)
  );

  const filterByYear = [...filterByGenre]?.filter((movies) =>
    dataState?.sortByYear === "release year"
      ? movies
      : Number(dataState?.sortByYear) === movies?.year
  );

  const filterByRating = [...filterByYear]?.filter((movies) =>
    dataState?.sortByRating === "All Ratings"
      ? movies
      : movies?.rating >= Number(dataState?.sortByRating)
  );

  
  const addMovieHandler = (movie) => {
    dataDispatch({type:"ADD_NEW_MOVIE",payload:movie})
  }

  useEffect(() => {
    localStorage.setItem("sortByGenre", dataState?.sortByGenre);
  }, [dataState?.sortByGenre]);

  useEffect(() => {
    localStorage.setItem("sortByYear", dataState?.sortByYear);
  }, [dataState?.sortByYear]);

  useEffect(() => {
    localStorage.setItem("sortByRating", dataState?.sortByRating);
  }, [dataState?.sortByRating]);


  return (
    <DataContext.Provider
      value={{ ...dataState, dataDispatch, filterByRating,addMovieHandler }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);
