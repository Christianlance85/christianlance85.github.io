import React from "react";

export default ()=>{
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">

        </a>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }

