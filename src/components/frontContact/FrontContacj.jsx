import { Link } from "react-router-dom";
import "./FrontContact.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function FrontContacj() {
  AOS.init({
    offset: 120, 
    delay: 0, 
    duration: 1000, 
  });
  return (
    <>
      <div className="front-contact-main-cont" data-aos="fade-right" >
        <div className="front-contact-left-div">
          <div className="front-contact-left-div-top">
            LET'S TALKS ABOUT OUR SOLUTIONS
          </div>
          <div className="front-contact-left-div-bottom">
            Our excellent on testing service to assits you better
          </div>
        </div>
        <Link to={"/contact"} className="front-contact-right-div">
          <button>CONTACT US</button>
        </Link>
      </div>
    </>
  );
}

export default FrontContacj;
