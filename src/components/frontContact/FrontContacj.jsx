import { Link } from "react-router-dom";
import "./FrontContact.css";

function FrontContacj() {
  return (
    <>
      <div className="front-contact-main-cont">
        <div className="front-contact-left-div">
          <div className="front-contact-left-div-top">
            LET'S TALKS ABOUT OUR SOLUTIONS
          </div>
          <div className="front-contact-left-div-bottom">
            Our excellent on testing seervice to assits you better
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
