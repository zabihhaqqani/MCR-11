import React from 'react'
import AddMovieModal from '../../components/AddMovieModal/AddMovieModal'
import "./AddMovie.css"

const AddMovie = () => {
  return (
    <div className='add-movie-container'>
        <AddMovieModal/>
    </div>
  )
}

export default AddMovie