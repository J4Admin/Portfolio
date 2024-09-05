import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./style.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = "/Portfolio/workers/pdf.worker.mjs";
const pdfPath = "/Portfolio/assets/Leo_Haddou.pdf";
export default function PdfViewer() {
  return (
    <div className="curriculum-page" id="pdfviewer">
      {" "}
      <h2 className="download-link-container" id="pdfviewer-title">
        {" "}
        Curriculum Vitae{" "}
      </h2>{" "}
      <div className="pdf-viewer">
        {" "}
        <Document file={pdfPath}>
          {" "}
          <Page pageNumber={1} />{" "}
        </Document>{" "}
      </div>{" "}
    </div>
  );
}
