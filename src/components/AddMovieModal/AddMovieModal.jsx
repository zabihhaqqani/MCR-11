import React, { useState } from "react";
import "./AddMovieModal.css";
import { v4 as uuidv4 } from "uuid";
import { useDataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddMovieModal = () => {

  const {addMovieHandler} = useDataContext()
  const navigate = useNavigate();

  const [movieDetails, setMovieDetails] = useState({
    id: uuidv4(),
    title: "",
    summary: "",
    year: "",
    cast: "",
    genre: "",
    rating: "",
    director: "",
    writer: "",
    imageURL: "",
  });

  const inputHandler = (e) => {
    setMovieDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addMovieHandler(movieDetails);
     toast.success(` ${movieDetails?.title} has been added to the movies list `);
    navigate("/");
  };

  const startYear = 1990;
  const endYear = 2023;
  const yearRange = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );

  const startRating = 1;
  const endRating = 10;

  const ratingRange = Array.from(
    { length: endRating - startRating + 1 },
    (_, index) => startRating + index
  );
  return (
    <div>
      <div className="modal-content">
        <form onSubmit={submitHandler}>
          <div>
            <h2>Add New Product</h2>
          </div>
          {/* title */}
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            placeholder="Enter title"
            id="title"
            name="title"
            onChange={inputHandler}
            required
            value={movieDetails?.title}
          />
          {/* summary */}
          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            cols="50"
            rows="2"
            onChange={inputHandler}
            required
            value={movieDetails?.summary}
            placeholder="Enter summary"
          ></textarea>
          {/* year */}
          <label htmlFor="year">Year:</label>
          <select
            name="year"
            id="year"
            value={movieDetails?.year}
            onChange={(e) => {
              setMovieDetails((prev) => ({
                ...prev,
                year: Number(e.target.value),
              }));
            }}
          >
            <option disabled value="">
              Select Year:
            </option>
            {yearRange?.map((year, index) => (
              <option key={index} value={year}>
                {Number(year)}{" "}
              </option>
            ))}
          </select>

          <label htmlFor="cast">Cast:</label>
          <input
            type="text"
            placeholder="Enter cast"
            id="cast"
            name="cast"
            value={movieDetails?.cast}
            onChange={(e) => {
              setMovieDetails((prev) => ({
                ...prev,
                cast: [e.target.value],
              }));
            }}
            required
          />

          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            placeholder="Enter genre"
            id="genre"
            name="genre"
            value={movieDetails?.genre}
            onChange={(e) => {
              setMovieDetails((prev) => ({
                ...prev,
                genre: [e.target.value],
              }));
            }}
            required
          />

          <label htmlFor="rating">Rating:</label>
          <select
            name="rating"
            id="rating"
            value={movieDetails?.rating}
            onChange={(e) => {
              setMovieDetails((prev) => ({
                ...prev,
                rating: Number(e.target.value),
              }));
            }}
          >
            <option disabled value="">
              Select Rating:
            </option>
            {ratingRange?.map((num, index) => (
              <option key={index} value={num}>
                {Number(num)}{" "}
              </option>
            ))}
          </select>

          <label htmlFor="director">Director:</label>
          <input
            type="director"
            placeholder="Enter director"
            id="director"
            name="director"
            onChange={inputHandler}
            value={movieDetails?.director}
            required
          />

          <label htmlFor="writer">Writer:</label>
          <input
            type="text"
            placeholder="Enter writer"
            id="writer"
            name="writer"
            onChange={inputHandler}
            value={movieDetails?.writer}
            required
          />

          <label htmlFor="imageURL">Image URL:</label>
          <input
            type="url"
            placeholder="Enter Image Url"
            id="imageURL"
            name="imageURL"
            onChange={inputHandler}
            required
          />

          <button className="btn" type="submit">
            Add New Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovieModal;
