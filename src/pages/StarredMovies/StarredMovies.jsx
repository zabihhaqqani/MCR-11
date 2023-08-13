import Card from "../../components/Card/Card";
import { useDataContext } from "../../context/DataContext";

const StarredMovies = () => {
  const { starredMovies } = useDataContext();

  
  return (
    <div>
      <div className="card-container">
        {starredMovies?.length > 0 ? (
          <>
            {starredMovies?.map((movie) => {
              return <Card key={movie?.id} data={movie} />;
            })}
          </>
        ) : (
          <h3>No Movies Starred</h3>
        )}
      </div>
    </div>
  );
};

export default StarredMovies;
