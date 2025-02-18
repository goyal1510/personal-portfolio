/* eslint-disable react/prop-types */
import { useState } from "react";

const Certificates = ({ theme }) => {
  const [currentCertificate, setCurrentCertificate] = useState("");

  return (
    <div id="certificate" className={theme}>
      <div className="container">
        <h1 className="sub-title">My <span>Certificates</span></h1>
        <div className="certificates-list">
          {[
            { name: "Hackerrank Basic", path: "./resources/certificates/Basic.pdf" },
            { name: "Hackerrank Intermediate", path: "./resources/certificates/Intermediate.pdf" },
            { name: "Hackerrank Intermediate", path: "./resources/certificates/Intermediate.pdf" },
            { name: "Hackerrank Intermediate", path: "./resources/certificates/Intermediate.pdf" },
            { name: "Hackerrank Intermediate", path: "./resources/certificates/Intermediate.pdf" },
            { name: "Hackerrank Intermediate", path: "./resources/certificates/Intermediate.pdf" },
          ].map((cert, index) => (
            <div key={index}>
              <i className="fa-solid fa-code"></i>
              <h2>{cert.name}</h2>
              <p>I had cleared the assessment for {cert.name}</p>
              <button className="view-certificate-btn" onClick={() => setCurrentCertificate(cert.path)}>View Certificate</button>
            </div>
          ))}
        </div>

        {/* Certificate Viewer with Close Button */}
        {currentCertificate && (
          <div className="certificate-viewer">
            <button className="close-btn" onClick={() => setCurrentCertificate("")}>✖</button>
            <iframe src={currentCertificate} width="100%" height="500px"></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
