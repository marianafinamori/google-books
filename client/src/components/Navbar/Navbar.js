import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">Search<span class="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/saved">Saved books</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar;
