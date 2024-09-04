import React from "react";
import EmailButton from "../../components/EmailButton";
import "./style.css";

export default function JoinMe() {
  return (
    <>
      <h3 className="join-me-title">Contact</h3>
      <div className="join-me-style">
        <EmailButton />
      </div>
    </>
  );
}
