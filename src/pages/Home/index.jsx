import React from "react";
import Intro from "../../components/Intro";
import Timeline from "../../components/Timeline";
import StackTechniques from "../../components/StackTechnique";
import "./style.css";

export default function Home() {
  return (
    <>
      <Intro />
      <StackTechniques />
      <Timeline />
    </>
  );
}
