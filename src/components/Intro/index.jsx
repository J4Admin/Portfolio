import React from "react";
import { Link } from "react-router-dom";
import TypeAnim from "../TypeAnim";
import logoGit from "../../assets/icones/Github-logo.svg";
import logoLinkedin from "../../assets/icones/Linkedin-logo.svg";
import {
  NAME,
  URL_CURRICULUM,
  URL_GIT,
  URL_LINKEDIN,
} from "../../data/Globaldata";
import "./style.css";
export default function Intro() {
  return (
    <div id="intro">
      {" "}
      <h1 id="intro-title">
        {" "}
        Bonjour. Je suis <span id="intro-name">{NAME}</span>,{" "}
      </h1>{" "}
      <TypeAnim />{" "}
      <p id="intro-description">
        {" "}
        Je suis ravi de vous présenter mon parcours, mes objectifs et mes
        projets à travers ce portfolio. {" "}
      </p>{" "}
      <div id="intro-list">
        {" "}
        <Link
          id="resume"
          className="intro-link"
          to={URL_CURRICULUM}
          aria-label="Voir mon C.V"
        >
          {" "}
          Curriculum{" "}
        </Link>{" "}
        <Link
          className="intro-link"
          to={URL_GIT}
          aria-label="Visitez mon profil GitHub"
        >
          {" "}
          <img id="github" src={logoGit} alt="github logo" />{" "}
        </Link>{" "}
        <Link
          className="intro-link"
          to={URL_LINKEDIN}
          aria-label="Visitez mon profil LinkedIn"
        >
          {" "}
          <img id="linkedin" src={logoLinkedin} alt="Linkedin logo" />{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
}
