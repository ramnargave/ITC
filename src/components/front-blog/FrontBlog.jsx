import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./FrontBlog.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import baal from '../../assets/img/baal.jpg'

function FrontBlog() {
  AOS.init({
    offset: 120, 
    delay: 0, 
    duration: 1000, 
  });
  return (
    <>
      <div className="front-blog-main-container" data-aos="fade-left" >
        {/* <div className="front-blog-heading-div">
            <div>LETEST NEWS <span>& BLOG</span></div>
        </div> */}
        <div className="front-blog-main-div">
          <div className="front-blog-card-div">
            <div className="front-blog-img-div">
              <img
                src={baal}
                alt=""
              />
            </div>
            <div className="front-blog-contect-div">
            Our hands are most likely to receive high heat flux as compared to any other body parts during handling of hot/warm objects in any industry.
            </div>
          </div>

          <div className="front-blog-card-div">
            <div className="front-blog-img-div">
              <img
                src="https://i0.wp.com/itt-india.com/wp-content/uploads/2020/05/picture-2.png?resize=504%2C331&ssl=1"
                alt=""
              />
            </div>
            <div className="front-blog-contect-div">
            Introduction The riot-control para-military forces use impact and stab-resistant body protectors (Figure 1), however the uniform (or undergarments) worn underneath body protectors are not cut
            </div>
          </div>

          <div className="front-blog-card-div">
            <div className="front-blog-img-div">
              <img
                src="https://i0.wp.com/itt-india.com/wp-content/uploads/2020/04/tdm.jpg?resize=690%2C345&ssl=1"
                alt=""
              />
            </div>
            <div className="front-blog-contect-div">
            Ultra High Molecular Wight Polyethylene fibres (also known as HPPE) are produced by gel spinning technique with extremely long chains of polyethylene (with ‘n’ over
            </div>
          </div>
          <div className="front-blog-card-div">
            <div className="front-blog-img-div">
              <img
                src="https://i0.wp.com/itt-india.com/wp-content/uploads/2020/04/download.jpg?w=421&h=421&crop=1&ssl=1"
                alt=""
              />
            </div>
            <div className="front-blog-contect-div">
            Our hands are most frequently injured as compared to other body parts while performing industrial tasks such as cutting, slicing, assembling, painting, foundry work, grinding,
            </div>
          </div>


        </div>
        <div className="front-blog-heading-div-bottm">
          <div>
            GET ALL <span> NEWS & BLOG</span>
          </div>
        </div>
        <div className="front-blog-arrow-main-div">
          <Link to={'/blogs'} className="front-blog-arrow">
            <ArrowForwardIcon />
          </Link>
        </div>
      </div>
    </>
  );
}

export default FrontBlog;
