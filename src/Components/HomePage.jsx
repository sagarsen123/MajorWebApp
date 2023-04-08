import React from 'react'
import "../Css/HomePage.css"
import { Link } from 'react-router-dom'

const HomePage = ({Name}) => {
  return (
    <div className='HomePage'>
      <h2>{Name}</h2>
      <div className="homeBtnContainer">

      <button className="btn">
        <Link to="/login">Login</Link>
      </button>
      <button className="btn">
      <Link to="/signup">Sign Up</Link>
      </button>
      </div>
    </div>
  )
}

export default HomePage
