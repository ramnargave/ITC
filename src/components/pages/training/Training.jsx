// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Training.css";
import TraninggNew from "../../../assets/img/training.jpg";
import Traning1 from "../../../assets/img/traning1.png";
import Traning2 from "../../../assets/img/traning2.pdf.png";
import Traning3 from "../../../assets/img/traning3.png";
import Traning4 from "../../../assets/img/traning4.png";
import Traning5 from "../../../assets/img/traning5.pdf.png";
import Traning6 from "../../../assets/img/traning6.png";
import Traning7 from "../../../assets/img/traning7.pdf.png";
import Traning8 from "../../../assets/img/traning8.png";
import Traning9 from "../../../assets/img/traning9.pdf.png";
import Traning10 from "../../../assets/img/traning10.pdf.png";
import { FaDownload } from "react-icons/fa6";
import Pdf from "../../../assets/traning.pdf";

const Training = () => {
  return (
    <>
      <div className="main-testing-container">
        <div className="testing-container">
          <div className="testing-text">
            <h1>Traning...</h1>
          </div>
          <div className="testing-right">
            <img src={TraninggNew} alt="" />
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
            <img src={Traning1} alt="" />
            <img src={Traning2} alt="" />
            <img src={Traning3} alt="" />
            <img src={Traning4} alt="" />
            <img src={Traning5} alt="" />
            <img src={Traning6} alt="" />
            <img src={Traning7} alt="" />
            <img src={Traning8} alt="" />
            <img src={Traning9} alt="" />
            <img src={Traning10} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Training;