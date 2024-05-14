// eslint-disable-next-line no-unused-vars
import React from "react";
import "./BlogSingle.css";
import BlogPhoto from "../../../assets/img/new & blog-1.jpg";
import IndustryPollution from "../../../assets/img/envornmental.jpg";
import { IoFolderOutline } from "react-icons/io5";

const BlogSingle = () => {
  return (
    <>
      <div className="Blog-container-photo">
        <img src={BlogPhoto} alt="Blog photo" />
      </div>
      <div className="blog-title">
        <h2>ITT LABS’ COMPREHENSIVE ENVIRONMENTAL MONITORING SOLUTIONS</h2>
      </div>
      <div className="blog-all-content-container">
        <div className="blog-all-inner-content">
          <img src={IndustryPollution} alt="industrypollution img" />
          <div className="folder-content">
            <IoFolderOutline /> <h5> ENVIRONMENT TESTING LAB</h5>
          </div>
          <div className="title-envornment">
            <h2>ITT Comprehensive Environmental Monitoring Solutions</h2> <br />{" "}
            <br />
            <p>
              Environmental Pollution refers to the release of contaminants into
              the natural environment that causes harmful effects.It has become
              a critical issue over a few decades. The water we drink, the air
              we breathe, and the environment we live in are all threatened by
              Global Pollution. Our government authorities are putting great
              emphasis on the ways of decreasing carbon footprint on global
              scale. This is when the Environmental Monitoring Services came
              into existence. ITT Lab is a leading provider of Environmental
              Monitoring Services, and it stands as a beacon of excellence
              through its comprehensive environment monitoring solutions. ITT
              Labs as the leading third laboratory offers Environment Monitoring
              services to clients in Government and Private Sectors. ITT Lab is
              recognised from esteemed entities such as Ministry of Environment,
              Forests & Climate Change (MoEF), Central Pollution Control Board
              (CPCB), Punjab State Pollution Control Board (PSPCB), Haryana
              State Pollution Control Board (HSPCB) and other states including
              Himachal Pradesh, Rajasthan, Uttarakhand, J&K etc. One of the
              characteristic features of ITT Lab is its response mechanism that
              is swift and efficient. On receiving a call, the lab dispatches
              its team to the client site for sophisticated monitoring and
              sample collection. This rapid implementation does not ensure just
              their service but also commitment to immediate action.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingle;
