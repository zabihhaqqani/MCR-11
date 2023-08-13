import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useDataContext } from "../../context/DataContext";

const NavBar = () => {
  const { dataDispatch,searchTerm } = useDataContext();

  const navigate = useNavigate();

  const getActiveStyle = ({ isActive }) => ({
    color: isActive && "#f02836",
  });

  return (
    <div>
      <div className="navbar-container">
        <div onClick={() => navigate("/")}>
          <h3 className="logo-name">IMDB</h3>
        </div>

        <div>
          <input
            className="search-bar"
            type="text"
            placeholder="Search movies by title, cast and director...."
            onChange={(e) =>
              dataDispatch({ type: "SET_INPUT", payload: e.target.value })
            }
            value={searchTerm}
          />
        </div>

        <ul className="links-container">
          <NavLink className="navbar-items" style={getActiveStyle} to="/">
            Movies
          </NavLink>
          <NavLink
            className="navbar-items"
            style={getActiveStyle}
            to="/starredMovies"
          >
            Starred Movies
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
