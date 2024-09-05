import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function Navbar() {
  return (
    <>
      <nav id="navbar">
        <h2 className="navbar-title"> L.H </h2>{" "}
        <ul id="navbar-list">
          <li className="navbar-item">
            <Link className="navbar-link" to="/">
              Présentation
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="projets">
              Projets
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
