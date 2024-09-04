import React from "react";
import "./style.css";

export default function ProjectCard() {
  return (
    <>
      <div id="projects-contener">
        <h2> PROJETS </h2>
        <div id="row">
          <div className="project-card">
            <h3>Card 1</h3>
            <div className=" project-description">
              Doh! I'm like that guy who single-handedly built the rocket & flew
              to the moon. I'm like that guy who single-handedly built the
              rocket & flew to the moon.
              <p className="project-challenge">
                {" "}
                Défis : What was his name? Apollo Atteinte d'objectif : Creed?
                Kids, just because I don't care doesn't mean I'm not listening.I
                thought I had an appetite for destruction, but all I wanted was
                a club sandwich.
              </p>
              <div className="project-style"></div>
              <ul>
                <li className="project-skill">Compétence 1</li>
                <li className="project-skill"> Compétence 2</li>
                <li className="project-skill">Compétence 3</li>
              </ul>
            </div>
          </div>
          <div className="project-card">
            <h3>Card 2</h3>
            <p className=" projet-description">
              What was his name? Apollo Creed? My beer! You never had a chance
              to become my urine! You can have all the money in the world, but
              there's one thing you will never have... a dinosaur. Kids are
              great. You can teach them to hate what you hate and, with the
              Internet and all, they practically raise themselves.
            </p>
          </div>
          <div className="project-card">
            <h3>Card 3</h3>
            <p className=" projet-description">
              Marge it takes two to lie. One to lie and one to listen. Vampires
              are make-believe, just like elves, gremlins and Eskimos. Just sit
              through this NRA meeting Marge, and if you still don't think guns
              are great then we'll argue some more.
            </p>
          </div>
          <div className="project-card">
            <h3>Card 4</h3>
            <p className=" projet-description">
              If I could say a few words... I would be a better public speaker.
              It's so simple to be wise... just think of something stupid to say
              and then don't say it. Roads are just a suggestion Marge, just
              like pants. If I could say a few words... I would be a better
              public speaker.
            </p>
          </div>
          <div className="project-card">
            <h3>Card 5</h3>
            <p className=" projet-description">
              Marge, you know it's rude to talk when my mouth is full. Kids,
              just because I don't care doesn't mean I'm not listening. Lisa, if
              you don't like your job you don't strike. You just go in every day
              and do it really half-assed. I'm normally not a praying man, but
              if you're up there, please save me Superman.
            </p>
          </div>
          <div className="project-card">
            <h3>Card 6</h3>
            <p className=" projet-description">
              Vampires are make-believe, just like elves, gremlins and Eskimos.
              I never apologize... I'm sorry but that's the way I am. I'm like
              that guy who single-handedly built the rocket & flew to the moon.
              What was his name? Apollo Creed?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
