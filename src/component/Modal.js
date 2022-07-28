import React from 'react'
import "../styles/Modal.css"
const Modal = ({movies,setNewMovie,newMovie,setMovies,setShow}) => {
  return (
    <div className="modal">
        <input onChange={(e)=>setNewMovie({...newMovie,posterurl:e.target.value})} type="text" placeholder="img"   />
        <input onChange={(e)=>setNewMovie({...newMovie,name:e.target.value})} type="text" placeholder="name" />
        <input onChange={(e)=>setNewMovie({...newMovie,description:e.target.value})}  type="text" placeholder="desc" />
        <button onClick={()=>{setMovies([...movies,newMovie]);setShow(false)}}>Add movie</button>
    </div>
  )
}

export default Modal    