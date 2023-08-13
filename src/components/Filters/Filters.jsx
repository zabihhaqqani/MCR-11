import React, { useState } from "react";
import "./Filters.css";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../context/DataContext";
import AddMovieModal from "../AddMovieModal/AddMovieModal";

const Filters = () => {
  const { moviesData, dataDispatch, sortByGenre, sortByYear, sortByRating } =
    useDataContext();
  const navigate = useNavigate();

  const allYears = [...new Set(moviesData?.map((movie) => movie?.year))];

  const allRatings = [...new Set(moviesData?.map((movie) => movie?.rating))];

  const allGenres = [...new Set(moviesData.flatMap((movie) => movie?.genre))];

  return (
    <div className="filters-container">
      <h3>Movies</h3>
      <div>
        <select
          name="genre"
          id="genre"
          value={sortByGenre}
          onChange={(e) => {
            dataDispatch({
              type: "SORT_BY_GENRE",
              payload: e.target.value,
            });
          }}
        >
          <option value="All">All Genres</option>
          {allGenres?.map((genre, index) => (
            <option value={genre} key={index}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          name="year"
          id="year"
          value={sortByYear}
          onChange={(e) => {
            dataDispatch({
              type: "SORT_BY_RELEASE_YEAR",
              payload: e.target.value,
            });
          }}
        >
          <option value="release year">All Release Years</option>
          {allYears?.map((year, index) => (
            <option value={year} key={index}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          name="rating"
          id="rating"
          value={sortByRating}
          onChange={(e) => {
            dataDispatch({
              type: "SORT_BY_RATING",
              payload: e.target.value,
            });
          }}
        >
          <option value="All Ratings">All Ratings</option>
          {allRatings?.map((rating, index) => (
            <option value={rating} key={index}>
              {rating}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button className="btn" onClick={() => navigate("/addMovie")}>
          Add New Movie
        </button>
      </div>

    </div>
  );
};

export default Filters;
