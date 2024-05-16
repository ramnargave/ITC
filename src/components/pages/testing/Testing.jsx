// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Testing.css";
import TestingNew from "../../../assets/img/testing.jpg";
import TestingFinal from "../../../assets/img/testingimg.jpg";
import { FaDownload } from "react-icons/fa6";
import Pdf from "../../../assets/Testing.pdf";
import OurTeam from "../../../components/our-team/OurTeam";
import Feedback from "../../../components/feedbacksection/Feedbacksection";

const Testing = () => {
  return (
    <>
      <div className="main-testing-container">
        <div className="testing-container">
          <div className="testing-text">
            <h1>Testing...</h1>
          </div>
          <div className="testing-right">
            <img src={TestingNew} alt="" />
          </div>
        </div>
      </div>

      <div className="second-main-testing-container">
        <hr />
        <hr />
        <hr />
        <div className="second-testing-container">
          <div className="download-testing">
            <a href={Pdf} download>
              PDF
              <FaDownload />
            </a>
          </div>
          <div className="second-right-testing">
            <img src={TestingFinal} alt="" />
          </div>
        </div>
      </div>
      <Feedback />
      <OurTeam />
    </>
  );
};

export default Testing;