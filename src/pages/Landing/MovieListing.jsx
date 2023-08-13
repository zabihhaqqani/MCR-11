import Card from "../../components/Card/Card";
import Filters from "../../components/Filters/Filters";
import { useDataContext } from "../../context/DataContext";
import "./MovieListing.css";

const MovieListing = () => {
  const { filterByRating } = useDataContext();

  
  return (
    <div>
      <Filters />

      <div className="card-container">
        {filterByRating?.length > 0 ? (
          <>
            {filterByRating?.map((movie) => {
              return <Card key={movie?.id} data={movie} />;
            })}
          </>
        ) : (
          <h3>No Movies Found</h3>
        )}
      </div>
    </div>
  );
};

export default MovieListing;
