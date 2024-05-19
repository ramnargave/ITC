// eslint-disable-next-line no-unused-vars
import React from "react";
import "./FrontService.css";
import ServiceImg from "../../assets/img/img1.jpg";
import Img1 from "../../assets/img/training.jpg";
import Img2 from "../../assets/img/testing.jpg";

import Img3 from "../../assets/img/R & D.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';


const services = () => {
  AOS.init({
    offset: 120, 
    delay: 0, 
    duration: 1000, 
  });
  return (
    <>
      <div className="services-main-container" data-aos="fade-right" >
        <img src={ServiceImg} alt="services img" />
        <div className="circle">
          <div className="inner-circle">
            <h2>Explore</h2>
          </div>
        </div>
      </div>
      <div className="service-ke-ander-container">
        <div className="inner-service-ke-ander">
          <div className="inner-service-content">
            <div className="inner-service-one">
              <h1>Explore our</h1>
            </div>
            <div className="inner-service-one2">
              <h1>Main Services</h1>
            </div>

            <div className="service-p">
              <p>
                We provide facilities that specialize in conducting scientific
                experiments, analyzing samples, And performing various tests to
                generate data and knowledge in different fields.
              </p>
            </div>
          </div>
        </div>
        <div className="baap-img-container">
          <div className="img-container">
            <div className="img-div1">
              <img src={Img1} alt="training img" width="346px" height="79%" />
              <div className="img-content">
                <h1>VIEW DETAILS</h1>
              </div>
              <h3>Training</h3>
            </div>

            <div className="img-div2">
              <img src={Img2} alt="training img" width="346px" height="79%" />
              <div className="img-content">
                <h1>VIEW DETAILS</h1>
              </div>
              <h3>Testing</h3>
            </div>
            <div className="img-div3">
              <img src={Img3} alt="training img" width="346px" height="79%" />
              <div className="img-content">
                <h1>VIEW DETAILS</h1>
              </div>
              <h3>Research & Development</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
