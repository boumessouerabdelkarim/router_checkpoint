import React from 'react'
import "../styles/navbar.css"
const Filter = ({setText}) => {
  return (
    <div className="Filter">
        <input onChange={(e)=>setText(e.target.value)} type="text" placeholder="Filter" />
    </div>
  )
}

export default Filter