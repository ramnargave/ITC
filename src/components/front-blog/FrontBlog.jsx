import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./FrontBlog.css";
import { Link } from "react-router-dom";

function FrontBlog() {
  return (
    <>
      <div className="front-blog-main-container">
        {/* <div className="front-blog-heading-div">
            <div>LETEST NEWS <span>& BLOG</span></div>
        </div> */}
        <div className="front-blog-main-div">
          <div className="front-blog-card-div">
            <div className="front-blog-img-div">
              <img
                src="https://th.bing.com/th/id/OIP.-BuFk_jhTmTWH7VHKAukCQHaE8?rs=1&pid=ImgDetMain"
                alt=""
              />
            </div>
            <div className="front-blog-contect-div">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              rem excepturi neque dolorem dolor veritatis, voluptatem, sapiente
              tenetur nostrum, soluta perferendis ad quibusdam quam facilis?
            </div>
          </div>

          <div className="front-blog-card-div">
            <div className="front-blog-img-div">
              <img
                src="https://th.bing.com/th/id/OIP.-BuFk_jhTmTWH7VHKAukCQHaE8?rs=1&pid=ImgDetMain"
                alt=""
              />
            </div>
            <div className="front-blog-contect-div">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              rem excepturi neque dolorem dolor veritatis, voluptatem, sapiente
              tenetur nostrum, soluta perferendis ad quibusdam quam facilis?
            </div>
          </div>

          <div className="front-blog-card-div">
            <div className="front-blog-img-div">
              <img
                src="https://th.bing.com/th/id/OIP.-BuFk_jhTmTWH7VHKAukCQHaE8?rs=1&pid=ImgDetMain"
                alt=""
              />
            </div>
            <div className="front-blog-contect-div">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              rem excepturi neque dolorem dolor veritatis, voluptatem, sapiente
              tenetur nostrum, soluta perferendis ad quibusdam quam facilis?
            </div>
          </div>

          <div className="front-blog-card-div">
            <div className="front-blog-img-div">
              <img
                src="https://th.bing.com/th/id/OIP.-BuFk_jhTmTWH7VHKAukCQHaE8?rs=1&pid=ImgDetMain"
                alt=""
              />
            </div>
            <div className="front-blog-contect-div">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              rem excepturi neque dolorem dolor veritatis, voluptatem, sapiente
              tenetur nostrum, soluta perferendis ad quibusdam quam facilis?
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
