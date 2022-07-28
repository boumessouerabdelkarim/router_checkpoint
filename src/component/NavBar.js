import React from 'react'
import Filter from './Filter'
import "../styles/navbar.css"
import { Link} from "react-router-dom";

const NavBar = ({setText}) => {
  return (
    <div className="navbar ">
        <h1 className="nav-bar-header">KARIMFLIX</h1>
     <Link to="/">  <h3 style={{color:"white"}}>Movies</h3> </Link>
     <Link to="/about">  <h3 style={{color:"white"}}>About</h3></Link>
     <Link to="/contact">  <h3 style={{color:"white"}}>Contact</h3></Link>
        <Filter setText={setText}/>
    </div>
  )
}

export default NavBar