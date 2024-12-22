import React from 'react'
import { Link } from 'gatsby'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <Link to="/about">About</Link>
        <Link to="/quotes">Quotes</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/thoughts">General Thoughts</Link>
        <Link to="/cs">Computer Science</Link>
        <Link to="/cp">Competitive Programming</Link>
        <Link to="/riding">Motorcycle And Bicycle Gallery</Link>
        <Link to="/recommendations">Media Recommendations</Link>
      </div>
    </nav>
  )
}

export default NavBar