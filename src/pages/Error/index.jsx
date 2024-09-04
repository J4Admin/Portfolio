import React from "react";
import ErrorImage from "../../assets/images/1.png";
import "./style.css";
export default function Error() {
  return (
    <div id="error">
      <img
        id="error-image"
        src={ErrorImage}
        alt=" image d'erreur 404, avec un puinguin "
      />
    </div>
  );
}
