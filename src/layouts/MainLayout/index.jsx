import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import "./style.css";
function MainLayout() {
  return (
    <>
      {" "}
      <Header />{" "}
      <Main>
        {" "}
        <Outlet />{" "}
      </Main>{" "}
      <Footer />{" "}
    </>
  );
}
export default MainLayout;
