import React from "react";
import Typewriter from "typewriter-effect";
import "./style.css";
export default function TypeAnim() {
  return (
    <div className="typeAnim-style">
      {" "}
      <Typewriter
        options={{
          strings: [
            "un développeur web mobile.",
            "un intégrateur web.",
            "un développeur back-end.",
            "un développeur fullstack.",
            "un développeur d’applications.",
            "un développeur Web.",
            "un développeur React.",
            "un développeur front-end.",
          ],
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: 50,
          backDelay: 1500,
        }}
      />{" "}
    </div>
  );
}
