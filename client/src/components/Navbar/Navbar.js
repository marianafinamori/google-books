import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div> 
      <header className="justify-content-center sticky-top">
        <div className="logo">
          <h1>Google Books Finder</h1>
        </div>
      </header>
      <div className="nav-container">
        <ul className="nav justify-content-center">
            <li className="link-container nav-item">
                <a className="nav-link" href="/">SEARCH</a>
            </li>
            <li className="link-container nav-item">
                <a className="nav-link" href="/saved">SAVED</a>
            </li>  
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
