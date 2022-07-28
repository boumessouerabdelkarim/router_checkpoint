import React, { useState } from 'react'
import MovieCard from './MovieCard'
import "../styles/movielist.css"
import Modal from './Modal'
const MovieList = ({movies,text,setMovies}) => {
    const [show, setShow] = useState(false)
    const [newMovie, setNewMovie] = useState({})
  return (<>
  {show && <Modal movies={movies} setShow={setShow} setMovies={setMovies} newMovie={newMovie} setNewMovie={setNewMovie}/>}
    <button onClick={()=>setShow(true)} id="add-btn">+</button>
    <div className='movie-list'>
        
        {movies?.filter((m) => m.name.toLowerCase().includes(text.toLowerCase())).map((el, index) => <MovieCard  movie={el} />)}
    </div>
    </>
  )
}

export default MovieList