import React from 'react'
import {useParams} from "react-router-dom"
import "../styles/trailer.css"
function Trailer({movies}) {
    const params=useParams();
     const movie=movies.filter((el)=>el.name===params.name)[0];
     console.log(movie)
  return (
    <div className='card'>

        <img   src={movie.posterurl}/>
        <div className='info'>
        <h1>{movie.name}</h1>
        <p>{movie.description}</p>
        </div>
    </div>
  )
}

export default Trailer