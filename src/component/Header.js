// Header.js
import React from "react";
// import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary border border-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">m</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/clock">
                Clock
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/stopwatch">
                Stopwatch
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/timer">
                Timer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
