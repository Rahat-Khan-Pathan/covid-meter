import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css';

const Navbar = () => {
  const [input, setInput] = useState("");
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container nav-container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarTogglerDemo01">
          <NavLink className="navbar-brand" to="/home">
            COVID METER
          </NavLink>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-center" activeClassName="selected" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-center" activeClassName="selected" aria-current="page" to="/states">
                USA States
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-center" activeClassName="selected" aria-current="page" to="/continents">
                Continents
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-center" activeClassName="selected" aria-current="page" to="/zones">
                Zones
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter Country Name"
              aria-label="Search"
              value={input}
              onInput={(e) => setInput(e.target.value)}
              id="input"
            />
            <Link to={"/search/countries/" + input}>
              <button
                onClick={() => (document.getElementById("input").value = "")}
                className="btn btn-outline-light"
                type="submit"
              >
                Search
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
