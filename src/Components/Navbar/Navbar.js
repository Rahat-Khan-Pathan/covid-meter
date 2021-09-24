import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          <a className="navbar-brand" href="/home">
            COVID METER
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-center" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center" aria-current="page" href="/states">
                USA States
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center" aria-current="page" href="/continents">
                Continents
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center" aria-current="page" href="/zones">
                Zones
              </a>
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
