import React, { useState } from 'react'
import "../styles/moviecard.css"
import { Link} from "react-router-dom";
const MovieCard = ({ movie }) => {
    const [show, setShow] = useState(false)
    return (
      <Link to={`/trailer/${movie.name}`}> <div onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} className="movie-card">
            <div className="movie-info">
                <h2>{movie.name}</h2>
                {show && <p className="movie-info-text">
                    {movie.description} </p>}

            </div>
            <img alt="card" src={movie.posterurl} />

        </div>
        </Link> 
    )
}

export default MovieCard