import React from "react";
import logoReact from "../../assets/icones/React.webp";
import logoJS from "../../assets/icones/JS.webp";
import logoHtml from "../../assets/icones/html.webp";
import logoCSS from "../../assets/icones/CSS.webp";
import logoFigma from "../../assets/icones/Figma.webp";
import logoNodejs from "../../assets/icones/Nodejs.webp";
import logoNPM from "../../assets/icones/Npm.webp";
import logoMongodb from "../../assets/icones/Mongodb.webp";
import logoGithub from "../../assets/icones/Github-logo.svg";
import logoVSC from "../../assets/icones/VSC.webp";
import logoUbuntu from "../../assets/icones/Ubuntu.webp";
import logoGoogle from "../../assets/icones/Google.webp";
import "./style.css";

export default function StackTechniques() {
  return (
    <div id="stack">
      <h2 id="stack-title">Technologies et Outils</h2>
      <ul id="stack-list">
        <li className="stack-list-icones">
          <img src={logoReact} alt="logo React" />
        </li>
        <li className="stack-list-icones resized">
          <img src={logoJS} alt="logo JS" />
        </li>
        <li className="stack-list-icones">
          <img src={logoHtml} alt="logo Html" />
        </li>
        <li className="stack-list-icones">
          <img src={logoCSS} alt="logo CSS" />
        </li>
        <li className="stack-list-icones">
          <img src={logoFigma} alt="logo Figma" />
        </li>
        <li className="stack-list-icones">
          <img src={logoNodejs} alt="logo Nodejs" />
        </li>
        <li className="stack-list-icones">
          <img src={logoNPM} alt="logo Npm" />
        </li>
        <li className="stack-list-icones">
          <img src={logoMongodb} alt="logo Mongodb" />
        </li>
        <li className="stack-list-icones color-black">
          <img src={logoGithub} alt="logo Github" />
        </li>
        <li className="stack-list-icones">
          <img src={logoVSC} alt="logo Visual Studio Code" />
        </li>
        <li className="stack-list-icones">
          <img src={logoUbuntu} alt="logo Ubuntu" />
        </li>
        <li className="stack-list-icones">
          <img src={logoGoogle} alt="logo Google Dev Tool" />
        </li>
      </ul>
    </div>
  );
}
