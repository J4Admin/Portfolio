import { React, useState, useEffect } from "react";
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
  useEffect(() => {
    document.body.classList.toggle("no-scroll", showLinks);
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showLinks]);

  return (
    <>
      <nav id="navbar">
        <div className="navbar-title">
          <img
            id="navbar-logo"
            src="/assets/Logo-Portfolio.webp"
            alt="Logo, Leo Haddou ecrit en vert sous forme d'initial, sur un fond arondi sombre."
          />
        </div>
        <ul id="navbar-list" className={`${showLinks ? "active" : "hidden"}`}>
          <li className="navbar-item">
            <Link className="navbar-link" to="/" onClick={closeMenu}>
              Présentation
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="projets" onClick={closeMenu}>
              Projets
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
        <button
          id="burger-button"
          className={`navbar-burger ${showLinks ? "active" : ""}`}
          onClick={handleShowLinks}
          aria-label="Ouvre/ferme le menu de liens - nav"
        >
          <span className="burger-bar"></span>
        </button>
      </nav>
    </>
  );
}
