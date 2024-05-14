// import { Link } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import "./AbouSection.css";

function Aboutsection() {
  return (
    <>
      <div id='about' className="front-about-us-container">
          <div className="front-about-top-container">
          <div className="front-about-to-img-div">
              <img src="https://th.bing.com/th/id/OIP.-BuFk_jhTmTWH7VHKAukCQHaE8?rs=1&pid=ImgDetMain" alt="" />
            </div>
            <div className="front-about-content-left-div">
              <div className="front-about-content-heading-div">
                ABOUT US
              </div>
              <div className="front-content-div">
              Institute of Technical Textiles (ITT) was established in 2016. 
Dr. Nandan Kumar is the CEO and founder of this company. ITT is equipped with various testing facilities that facilitates industries and researchers to get their test conducted in accordance with the European, International and Indian standards. The facilities include testing equipment as per EN 407, EN 388, BS EN 1149 and equivalent standards & test methods.
One can get one's sample tested in this trusted laboratory.
              </div>
                <div className="front-about-contack-btn-div">CONTACT US</div>
            </div>
          </div>
          <div className="front-about-bottom-conatiner">
            <div className="front-about-bootm-card">
              <div className="front-about-bootm-card-heading-div">
                <CallIcon/> CALL US
              </div>
              <div className="front-about-bootm-card-detail">
                <div>+91 8819069130</div>
                <div>+91 8819069130</div>
              </div>
            </div>

            <div className="front-about-bootm-card">
              <div className="front-about-bootm-card-heading-div">
                <FmdGoodIcon/> LOCATION
              </div>
              <div className="front-about-bootm-card-detail">
                <div>121 Rock Street, 21 Avenue, New York, NY </div>
                <div>8819069130</div>
              </div>
            </div>

            <div className="front-about-bootm-card">
              <div className="front-about-bootm-card-heading-div">
                <WatchLaterIcon/> TIME
              </div>
              <div className="front-about-bootm-card-detail">
                <div>Mon-Fri ...... 11pm-8pm, Sat, Sun ..... 6 am-8pm</div>
              </div>
            </div>
            
          </div>
      </div>
    </>
  );
}

export default Aboutsection;
