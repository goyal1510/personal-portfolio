/* eslint-disable react/prop-types */
import { useState } from "react";
import hackerrankBasic from "../resources/certificates/HackerRank/Basic.pdf";
import hackerrankIntermediate from "../resources/certificates/HackerRank/Intermediate.pdf";

import highradiusInternship from "../resources/certificates/HighRadius/Appreciation.pdf";
import highradiusInternshipCompletion from "../resources/certificates/HighRadius/Product_Engineer.pdf";

import fullStackTraining from "../resources/certificates/Internshalla/LetsBegin.pdf";
import htmlCssTraining from "../resources/certificates/Internshalla/HTMLCSS.pdf";
import interactiveJavaScript from "../resources/certificates/Internshalla/JavaScript.pdf";
import gitGithubTraining from "../resources/certificates/Internshalla/Git_GitHub.pdf";
import dsaJavaScriptI from "../resources/certificates/Internshalla/Dsa1.pdf";
import dsaJavaScriptII from "../resources/certificates/Internshalla/Dsa2.pdf";
import reactTraining from "../resources/certificates/Internshalla/React.pdf";
import nodeMongoDBTraining from "../resources/certificates/Internshalla/Node.js_Express.js_MongoDB.pdf";

const Certificates = ({ theme }) => {
  const [currentCertificate, setCurrentCertificate] = useState("");

  return (
    <div id="certificate" className={theme}>
      <div className="container">
        <h1 className="sub-title">My <span>Certificates</span></h1>
        <div className="certificates-list">
          {[
            { name: "Hackerrank Basic", path: hackerrankBasic, description: "Certified in Hackerrank Basic assessment" },
            { name: "Hackerrank Intermediate", path: hackerrankIntermediate, description: "Certified in Hackerrank Intermediate assessment" },
            { name: "HighRadius Internship Appreciation", path: highradiusInternship, description: "Received appreciation for my internship at HighRadius" },
            { name: "HighRadius Internship Completion", path: highradiusInternshipCompletion, description: "Successfully completed my internship at HighRadius" },
            { name: "Internshalla - Full Stack Training", path: fullStackTraining, description: "Completed Full Stack training from Internshalla" },
            { name: "Internshalla - HTML & CSS Training", path: htmlCssTraining, description: "Completed HTML and CSS training from Internshalla" },
            { name: "Internshalla - Interactive JavaScript Training", path: interactiveJavaScript, description: "Completed interactive JavaScript training from Internshalla" },
            { name: "Internshalla - Git and GitHub Training", path: gitGithubTraining, description: "Completed Git and GitHub training from Internshalla" },
            { name: "Internshalla - DSA JavaScript I", path: dsaJavaScriptI, description: "Completed DSA JavaScript Level I training from Internshalla" },
            { name: "Internshalla - DSA JavaScript II", path: dsaJavaScriptII, description: "Completed DSA JavaScript Level II training from Internshalla" },
            { name: "Internshalla - React Training", path: reactTraining, description: "Completed React training from Internshalla" },
            { name: "Internshalla - Node.js and MongoDB Training", path: nodeMongoDBTraining, description: "Completed Node.js, Express.js, and MongoDB training from Internshalla" }
          ].map((cert, index) => (
            <div key={index}>
              <i className="fa-solid fa-code"></i>
              <h2>{cert.name}</h2>
              <p>{cert.description}</p>
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
