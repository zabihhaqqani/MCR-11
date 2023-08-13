import { useNavigate } from "react-router-dom";
import "./Card.css";
import { useDataContext } from "../../context/DataContext";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const { dataDispatch, starredMovies } = useDataContext();

  const isMovieStarred = starredMovies?.find((movie) => movie?.id === data?.id);

  return (
    <div className="card">
      <img
        onClick={() => navigate(`/${data?.id}`)}
        src={data?.imageURL}
        alt={data?.imageURL}
      />
      <h2 onClick={() => navigate(`/${data?.id}`)}>{data?.title}</h2>
      <p onClick={() => navigate(`/${data?.id}`)}>{data?.summary}</p>
      {isMovieStarred ? (
        <button
          id="unstar-btn"
          onClick={() => dataDispatch({ type: "UNSTAR_MOVIE", payload: data })}
        >
          UnStar
        </button>
      ) : (
        <button
          onClick={() => dataDispatch({ type: "STAR_MOVIE", payload: data })}
        >
          Star
        </button>
      )}
    </div>
  );
};

export default Card;
