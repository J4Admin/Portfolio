import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaUniversity } from "react-icons/fa";
import "./style.css";
export default function Timeline() {
  return (
    <div id="vertical-timeline">
      {" "}
      <h2 id="vertical-timeline-title">Expériences</h2>{" "}
      <VerticalTimeline lineColor={"white"}>
        {" "}
        <VerticalTimelineElement
          className="vertical-timeline-element .bg- blue"
          iconClassName={"bg-blue anim"}
          date="2024"
          icon={<FaUniversity />}
        >
          {" "}
          <h3 className="vertical-timeline-element-title">
            {" "}
            Formation Développeur Web{" "}
          </h3>{" "}
          <h4 className="vertical-timeline-element-subtitle">
            OpenClassRoom
          </h4>{" "}
        </VerticalTimelineElement>{" "}
        <VerticalTimelineElement
          className="vertical-timeline-element "
          date="2023"
          iconClassName={"bg-green anim"}
          icon={<FaBriefcase />}
        >
          {" "}
          <h3 className="vertical-timeline-element-title">
            {" "}
            Marbrier Funéraire Polyvalent{" "}
          </h3>{" "}
          <h4 className="vertical-timeline-element-subtitle">Funecap</h4>{" "}
        </VerticalTimelineElement>{" "}
        <VerticalTimelineElement
          className="vertical-timeline-element "
          date="2014 "
          iconClassName={"bg-blue anim"}
          icon={<FaUniversity />}
        >
          {" "}
          <h3 className="vertical-timeline-element-title">BTS SIO</h3>{" "}
          <h4 className="vertical-timeline-element-subtitle">
            {" "}
            Lycée René Auffray{" "}
          </h4>{" "}
        </VerticalTimelineElement>{" "}
        <VerticalTimelineElement
          className="vertical-timeline-element "
          date="2013"
          iconClassName={"bg-blue anim"}
          icon={<FaUniversity />}
        >
          {" "}
          <h3 className="vertical-timeline-element-title">BAC Pro SEN</h3>{" "}
          <h4 className="vertical-timeline-element-subtitle">
            {" "}
            Lycée La Tournelle{" "}
          </h4>{" "}
          <p>Spécialisation Télécomunication et Réseaux</p>{" "}
        </VerticalTimelineElement>{" "}
      </VerticalTimeline>{" "}
    </div>
  );
}
