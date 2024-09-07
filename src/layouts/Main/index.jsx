import React from "react";
import "./style.css";
function Main(props) {
  const { children } = props;
  return <main className="main">{children}</main>;
}
export default Main;
