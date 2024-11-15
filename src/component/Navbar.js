import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [Open, setOpen] = useState(false)
  const toggleNavbar = () => {
    setOpen(!Open);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Addidas</Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <img
            className="navbar-toggler-icon"
            src={Open ? "cross.svg" : "hamburger.svg"}
            alt="Menu"
          />
        </button>
        <div className={`collapse navbar-collapse ${Open ? 'show' : ''}`}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">More</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Logp">Sign up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Singup">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
