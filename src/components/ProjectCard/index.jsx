import React from "react";
import { Link } from "react-router-dom";
import logoGit from "../../assets/icones/Github-logo.svg";
import projets from "../../data/ProjetsData.json";
import "./style.css";

export default function ProjectCard() {
  return (
    <div id="projects-container">
      <h2>PROJETS</h2>
      <div id="row">
        {projets.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <div className="card-button">
              <Link className="card-link demo-style" to={project.link.demo}>
                Demo
              </Link>
              <Link className="card-link" to={project.link.code}>
                <img
                  id="github"
                  className="link-logo"
                  src={logoGit}
                  alt="github logo"
                />
              </Link>
            </div>
            <div className="project-description">
              <p className="projet-intro">
                <span className="card-subtitle">Objectif:</span>{" "}
                {project.content.Objectif}
              </p>
              <p className="project-challenge">
                <span className="card-subtitle">Défis:</span>{" "}
                {project.content.Challenge}
              </p>
              <div className="project-style">
                <ul className="project-list">
                  <h4 className="card-subtitle">Compétences :</h4>
                  {project.content.skill.map((skill, i) => (
                    <li key={i} className="project-skill">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
