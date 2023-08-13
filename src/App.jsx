import './App.css'

import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import MovieListing from './pages/Landing/MovieListing';
import AddMovie from './pages/AddMovie/AddMovie';
import Detail from './pages/Detail/Detail';
import StarredMovies from './pages/StarredMovies/StarredMovies';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MovieListing />} />
        <Route path="/addMovie" element={<AddMovie />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/starredMovies" element={<StarredMovies />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App
