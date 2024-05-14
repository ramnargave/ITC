// import { Link } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import "./AbouSection.css";

function Aboutsection() {
  return (
    <>
      <div className="front-about-us-container">
          <div className="front-about-top-container">
          <div className="front-about-to-img-div">
              <img src="https://th.bing.com/th/id/OIP.-BuFk_jhTmTWH7VHKAukCQHaE8?rs=1&pid=ImgDetMain" alt="" />
            </div>
            <div className="front-about-content-left-div">
              <div className="front-about-content-heading-div">
                ABOUT US
              </div>
              <div className="front-content-div">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque sed, voluptatum quidem aspernatur repudiandae doloribus obcaecati vel recusandae exercitationem omnis aliquam culpa officiis odit porro est, odio cupiditate inventore tenetur totam dolores? Molestias, magnam rem!
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
