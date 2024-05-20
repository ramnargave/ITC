// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Blog.css";
import BlogPhoto from "../../../assets/img/new & blog-1.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="Blog-container-photo">
        <img src={BlogPhoto} alt="Blog photo" />
      </div>
      <div className="blog-title">
        <h2>NEWS & BLOG</h2>
      </div>

      <div className="blog-baap-container">
        <div className="blog-right">
          <div className="baap-first-container">
            <div className="blog-first">
              <a href="">
                <h1>
                  Aramid gloves for protection against thermal hazards as per EN
                  407:2004
                </h1>
              </a>
              <div className="blog-by">
                <h3>by Dr. Nandan Kumar / Monday April 13, 2020 13:27</h3>
              </div>
              <div className="blog-front-content">
                <h2>
                  Our hands are most likely to receive high heat flux as
                  compared to any other body parts during handling of hot/warm
                  objects in any industry.…
                  <Link to="/singleblog">Read More</Link>
                </h2>
              </div>
            </div>

            <div className="blog-first">
              <a href="">
                <h1>Cut-resistant uniform for para-military forces</h1>
              </a>
              <div className="blog-by">
                <h3>by Dr. Nandan Kumar / Wednesday May 20, 2020 13:26</h3>
              </div>
              <div className="blog-front-content">
                <h2>
                  Introduction The riot-control para-military forces use impact
                  and stab-resistant body protectors (Figure 1), however the
                  uniform (or undergarments) worn underneath body protectors are
                  not cut…
                  <a href="">Read More</a>
                </h2>
              </div>
            </div>

            <div className="blog-first">
              <a href="">
                <h1>UHMWPE/HPPE based cut-resistant seamless gloves</h1>
              </a>
              <div className="blog-by">
                <h3>by Dr. Nandan Kumar / Friday April 3, 2020 21:37</h3>
              </div>
              <div className="blog-front-content">
                <h2>
                  Ultra High Molecular Wight Polyethylene fibres (also known as
                  HPPE) are produced by gel spinning technique with extremely
                  long chains of polyethylene (with ‘n’ over…
                  <a href="">Read More</a>
                </h2>
              </div>
            </div>

            <div className="blog-first">
              <a href="">
                <h1>Cut & Heat Resistant Seamless Aramid gloves</h1>
              </a>
              <div className="blog-by">
                <h3>by Dr. Nandan Kumar / Thursday April 2, 2020 16:06</h3>
              </div>
              <div className="blog-front-content">
                <h2>
                  Our hands are most frequently injured as compared to other
                  body parts while performing industrial tasks such as cutting,
                  slicing, assembling, painting, foundry work, grinding,…
                  <a href="">Read More</a>
                </h2>
              </div>
            </div>

            <div className="blog-first">
              <a href="">
                <h1>CUT-RESITANT WORKWEAR</h1>
              </a>
              <div className="blog-by">
                <h3>by Dr. Nandan Kumar / Sunday July 15, 2018 20:57</h3>
              </div>
              <div className="blog-front-content">
                <h2>
                  The cut-resistant workwear is knitted using composite yarn of
                  high performance polyethylene, (400 Denier, 32.6 cN/tex as
                  breaking strength and modulus of 1022 cN/tex with…
                  <a href="">Read More</a>
                </h2>
              </div>
            </div>

            <div className="blog-first">
              <a href="">
                <h1>Inherent Fire-Resistant Blankets</h1>
              </a>
              <div className="blog-by">
                <h3>
                  by Dr. Nandan Kumar / Saturday June 30, 2018 19:011 / Comment
                </h3>
              </div>
              <div className="blog-front-content">
                <h2>
                  The Inherent Flame-Resistant (IFR) blanket is made by using
                  two or more inherent flame-retardant fibres (e.g. modacrylic,
                  FR viscose, aramid) that do no melt, self…
                  <a href="">Read More</a>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-left">
          <div className="blog-second-container">
            <div className="blog-second-content">
              <div className="blog-search">
                <h2>Search</h2>
                <div className="group">
                  <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                    </g>
                  </svg>
                  <input placeholder="Search" type="search" className="input" />
                </div>
              </div>

              <div className="blog-link">
                <h2>Recent Posts</h2>
                <h2>
                  <a href="">Cut-resistant uniform for para-military forces</a>
                </h2>
                <h2>
                  <a href="">
                    Aramid gloves for protection against thermal hazards as per
                    EN 407:2004
                  </a>
                </h2>
                <h2>
                  <a href="">UHMWPE/HPPE based cut-resistant seamless gloves</a>
                </h2>
                <h2>
                  <a href="">Cut & Heat Resistant Seamless Aramid gloves</a>
                </h2>
                <h2>
                  <a href="">CUT-RESITANT WORKWEAR</a>
                </h2>
              </div>

              <div className="blog-link2">
                <h2>Categories</h2>
                <h2>
                  <a href="">Cut Resistant</a>
                </h2>
                <h2>
                  <a href="">Inherent Fire Resistant</a>
                </h2>
                <h2>
                  <a href="">Protective Clothing</a>
                </h2>
                <h2>
                  <a href="">Technical Textiles</a>
                </h2>
                <h2>
                  <a href="">Uncategorized</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;