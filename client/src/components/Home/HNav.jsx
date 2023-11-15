import React from 'react'
import { Link } from 'react-router-dom'

const HNav = () => {
  return (
    <div className="bottomNav">
    <Link to='/' >
        <div className="logo">
        <h2>Avez's Blog</h2>
        </div>
        </Link>
        <div className="navItems">
            <ul>
            <Link to='/allblogs' ><li>Blogs</li></Link>
            <li>About</li>
            <li>Contact Us</li>
            </ul>
        </div>
        <Link to='/allblogs' >
        <div className="searchBar">
            <input placeholder="Search here..." type="search"/>
        </div>
        </Link>
    </div>
  )
}

export default HNav