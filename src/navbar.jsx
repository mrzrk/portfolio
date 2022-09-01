import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


function Navbar() {
  return (

    <div className="menu">
    <nav className="navbar">
        <div className="container-fluid">
            <a className="navbar-brand">mia rizk</a>
            <a className="d-flex">

                  <Link className="nav-item" to="/resume" style={{ color: 'inherit', textDecoration: 'inherit', float:'right'}}>resume</Link>

                  <Link className="nav-item" to="/work" style={{ color: 'inherit', textDecoration: 'inherit', float:'right'}}>work</Link>

                  <Link className="nav-item" to="/" style={{ color: 'inherit', textDecoration: 'inherit', float:'right'}}>about</Link>
            </a>
        </div>
    </nav>
</div>

  );
}

export default Navbar;