import { useParams } from "react-router-dom";
import { useDataContext } from "../../context/DataContext";
import "./Detail.css";

const Detail = () => {
  const { moviesData, dataDispatch, starredMovies } = useDataContext();

  const { id } = useParams();

  const movieDetails = moviesData?.find((movie) => movie?.id == id);

  const isMovieStarred = starredMovies?.find((movie) => movie?.id == id);

  return (
    <div className="details-card-container-main">
      <div className="details-card-container">
        <div>
          <img src={movieDetails?.imageURL} alt={movieDetails?.imageURL} />
        </div>
        <div className="details-content">
          <h2>{movieDetails?.title}</h2>
          <p>{movieDetails?.summary}</p>
          <p>
            <strong>Year: </strong>
            {movieDetails?.year}
          </p>
          <p>
            <strong>Genre: </strong>
            {movieDetails?.genre?.join(", ")}
          </p>
          <p>
            <strong>Rating: </strong>
            {movieDetails?.rating}
          </p>
          <p>
            <strong>Director: </strong>
            {movieDetails?.director}
          </p>
          <p>
            <strong>Writer: </strong>
            {movieDetails?.writer}
          </p>
          <p>
            <strong>Cast: </strong>
            {movieDetails?.cast?.join(", ")}
          </p>
          <div>
            {isMovieStarred ? (
              <button
                onClick={() =>
                  dataDispatch({ type: "UNSTAR_MOVIE", payload: movieDetails })
                }
                id="unstar-btn"
              >
                UnStar
              </button>
            ) : (
              <button
                onClick={() =>
                  dataDispatch({ type: "STAR_MOVIE", payload: movieDetails })
                }
                className="btn"
              >
                Star
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
