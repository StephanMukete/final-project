import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="wrapper">

    <div className="page-main">
      <div className="grid">
        <div className="">
          <div className="text-wrapper">
            <h1>Welcome to Devs Blog!</h1>
          </div>
          <div className="text-wrapper p-wrapper">
            <h2>Write Blogs for </h2>
          </div>
          <div className="text-wrapper p-wrapper">
            <h3>the world</h3>
          </div>
        </div>

      </div>
      <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
      </div>
    </div>
    </div>
  )
}

 export default Landing
