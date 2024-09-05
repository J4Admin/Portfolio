import React from "react";
import PdfViewer from "../PdfViewer";
import "./style.css";
export default function CurriculumPdf() {
  return (
    <>
      <div className="curriculum-page">
        <PdfViewer />
        <div className="download-link-container">
          <a
            href="/Portfolio/assets/Leo_Haddou.pdf"
            download="Leo_Haddou.pdf"
            className="download-button"
          >
            Télécharger
          </a>
        </div>
      </div>
    </>
  );
}
