import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  const [showLinks, SetShowLinks] = useState(false);
  const handleShowLinks = () => {
    SetShowLinks(!showLinks);
  };
  const closeMenu = () => {
    SetShowLinks(false);
  };

  return (
    <>
      <nav id="navbar">
        <h2 className="navbar-title"> L.H </h2>{" "}
        <ul id="navbar-list" className={`${showLinks ? "active" : "hidden"}`}>
          <li className="navbar-item">
            <Link className="navbar-link" to="/" onClick={closeMenu}>
              Présentation
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="projets"onClick={closeMenu}>
              Projets
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="contact"onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <button className="navbar-burger" onClick={handleShowLinks}>
            <span className="burger-bar"></span>
          </button>
        </ul>
      </nav>
    </>
  );
}
