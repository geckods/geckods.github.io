import React from 'react'
import { Link } from 'gatsby'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <Link to="/about">About</Link>
        <span className="separator">|</span>
        <Link to="/quotes">Quotes</Link>
        <span className="separator">|</span>
        <Link to="/resume">Resume</Link>
        <span className="separator">|</span>
        <Link to="/thoughts">General Thoughts</Link>
        <span className="separator">|</span>
        <Link to="/cs">Computer Science</Link>
        <span className="separator">|</span>
        <Link to="/cp">Competitive Programming</Link>
        <span className="separator">|</span>
        <Link to="/riding">Motorcycle And Bicycle Gallery</Link>
        <span className="separator">|</span>
        <Link to="/recommendations">Media Recommendations</Link>
      </div>
    </nav>
  )
}

export default NavBar