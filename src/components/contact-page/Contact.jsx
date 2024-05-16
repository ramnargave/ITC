// eslint-disable-next-line no-unused-vars
import React from "react";
import "./contactus.css";
import ContactUs from "../../assets/img/contact-us.jpg";
import { IoLocation } from "react-icons/io5";
import { ImHeadphones } from "react-icons/im";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-us-img">
          <img src={ContactUs} alt="contact-us img" />
        </div>
        <div className="contact-us-title">
          <h1>CONTACT US</h1>
        </div>
      </div>
      <div className="baap-contact-details-container">
        <div className="contact-details-container">
          <div className="contact-details-one">
            <div className="location-contact">
              <IoLocation /> <span>Haryana</span>
            </div>

            <div className="contact-title">
              <h1>GET IN TOUCH</h1>
            </div>
            <div className="location-icon-div">
              <IoLocation />
              <div className="location-upper">
                <h3>OUR ADDRESS</h3>
                <p>Institute of Technical Textiles Pvt. Ltd.
Plot no 145, Sector 21 Phase 1, Industrial Estate,Barhi, Haryana India 131001</p>
              </div>
            </div>

            <div className="location-icon-div">
              <ImHeadphones />
              <div className="location-upper">
                <h3>PHONE NUMBER</h3>
                <p>
                   +919996625050
                </p>
              </div>
            </div>

            <div className="location-icon-div">
              <MdOutlineMarkEmailUnread />
              <div className="location-upper">
                <h3>EMAIL ADDRESS</h3>
                <p>nandan.leeds@gmail.com, textilopedia@gmail.com</p>
              </div>
            </div>

            <div className="location-icon-div">
              <IoSettingsSharp />
              <div className="location-upper">
                <h3>WORKING HOURS</h3>
                <p>Mon to Sat: 9am to 6pm</p>
              </div>
            </div>
          </div>
          <div className="contact-details-two">
            <h2>DROP US A LINE</h2>
            <div className="div-details-contact">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="div-details-contact">
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="div-details-contact">
              <input type="text" placeholder="Your Phone" />
            </div>
            <div className="div-details-contact">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="div-details-contact">
              <input type="text" placeholder="Message" />
            </div>
            <div className="send-message">
              <h3>SEND MESSAGE</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;