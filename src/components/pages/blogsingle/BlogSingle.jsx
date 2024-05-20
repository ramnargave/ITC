// eslint-disable-next-line no-unused-vars
import React from "react";
import "./BlogSingle.css";
import BlogPhoto from "../../../assets/img/new & blog-1.jpg";
// import { Link } from "react-router-dom";
import { VscCircleSmall } from "react-icons/vsc";
import imgLayer from "../../../assets/img/the layer.jpg";
import Baal from "../../../assets/img/baal.jpg";
import BigImg from "../../../assets/img/big gavors.jpg";
import SmallImg from "../../../assets/img/small gavos.jpg";

const BlogSingle = () => {
  return (
    <>
      <div className="Blog-container-photo">
        <img src={BlogPhoto} alt="Blog photo" />
      </div>
      <div className="blog-title">
        <h2>IIT LABS' COMPREHENSIVE ENVIRONMENTAL MONITORING SOLUTIONS</h2>
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
                  objects in any industry. The skin in the hand area is split
                  into three main layers (Figure 1): – <br /> <br />{" "}
                  <VscCircleSmall /> Epidermis is the outermost layer of skin
                  having both living and dead cells and not containing any blood
                  vessels. This layer protects tissues from ultraviolet
                  radiation and extreme heat exposures. Any damage to this layer
                  due to heat exposure is called ‘first degree or superficial
                  burn’ which is temporary and healing time is quick with little
                  to no risk of permanent damage; <br /> <br />
                  <VscCircleSmall /> Dermis layer is thicker than epidermis and
                  is held together by a protein, Collagen. This layer contains
                  blood vessels, sweat glands, nerves and hair follicles. Any
                  damage to this layer of skin due to heat exposure is referred
                  to as ‘second degree or partial thickness burn’ which involves
                  irreversible damage to the epidermis and dermal tissue and are
                  typically characterized by blisters, severe pain, reddening,
                  and swelling of that region. This may also cause damage to
                  hair follicles, sweat glands, or the circulatory system. The
                  recovery time could be 10 to 20 days and medical treatment
                  such as skin grafting may also be required; <br /> <br />
                  <VscCircleSmall /> Subcutaneous is base of the skin and
                  consists of connective tissue and fat. This also contains
                  major blood vessels and nerves and any damage to this layer of
                  skin due to heat exposure is referred to as a ‘third degree or
                  full thickness burn’. Owing to the destruction of blood
                  vessels, both the epidermis and the dermis layers, this is the
                  worst of three burns. In this case, spontaneous healing is not
                  possible and skin grafts can be used to repair any damaged
                  skin.
                </h2>
              </div>

              <div className="blog-layer-img-container">
                <div className="blog-layer-img">
                  <img src={imgLayer} alt="" />
                  <h3>Figure 1. Skin Layers</h3>
                </div>
              </div>

              <div className="blog-front-content upper">
                <h2>
                  Protective gloves are used to reduce the effect of heat flux
                  on our hands while handling hot/warm objects, however it’s
                  important to identify the hazards and risk assessment which
                  should be carried out to select most appropriate type of
                  gloves as using wrong type of safety equipment can further
                  lead to injury. E.g. light weight cotton or polyester gloves
                  used for protection against heat may cause burns or blisters.
                  In this paper, we have discussed and compared multiple
                  variants of gloves (seamless and cut & sewn) made up of
                  para-aramid and other blended inherent flame-retardant fibres
                  for protection against thermal hazards as per EN 407-2004. The
                  EN 407:2004 standard specifies requirements and test methods
                  for protective gloves that provide protection against heat
                  and/or fire. The numbers given in the pictogram (Figure 1)
                  indicate the gloves performance for each test in the standard.
                  The higher number the better performance level. This is
                  further segregated into various subcategories as explained
                  below: – <br /> <br />
                  1. Resistance to Flammability: In this test the glove sample
                  is exposed vertically to direct flame for 15 seconds. After
                  flame is distinguished the glow or burn time is measured. The
                  lesser the after flame/glow time better the performance rating
                  of the glove (Table 1); <br /> <br />
                  2. Contact Heat Resistance: In this test the glove palm
                  samples are exposed to temperatures between 100°C to 500°C in
                  the form of heated plates, the rise in temperature by 10°C is
                  measured on the opposite side of the sample to determine the
                  performance rating which is called as ‘threshold time’. The
                  glove sample needs to withstand the increasing temperature of
                  maximum 10°C for minimum 10 seconds to pass a certain level
                  (Table 1); <br /> <br />
                  3. Convective heat resistance: The inner part of the glove
                  sample is exposed to direct flame on various parts to
                  determine the increase in temperature by 24°C. This test is
                  only done if Level 3 is achieved on the flammability test;{" "}
                  <br /> <br />
                  4. Radiant heat resistance: This tests the back of the glove
                  to ensure materials can resist extreme heat radiating through
                  the glove and like the convective heat resistance test, the
                  goal is to assess how long it takes the inners temperatures to
                  rise by 24°C; <br /> <br />
                  5. Resistance to small splashes of molten metal: This test is
                  done to assess the risk associated with hand protection while
                  handling small amount of molten metals (e.g. iron in this
                  case). Small drops of metals are also generated while welding
                  joints using heat or pressure. Electrode/Gas, Tungsten insert
                  gas (TIG), metal insert gas (MIG), micron plasma, brazing and
                  manual arc welding (MMA) are few examples of welding
                  techniques used in the industry. It has been observed that
                  spatters mostly adhere to gloves/sleeves, causing charring or
                  hole formation or even ignition to the clothing. The
                  performance of glove sample is measured on the number of drops
                  needed to raise the temperature by 40°C on the opposite side
                  of the sample (Table 1); <br /> <br />
                  6. Resistance to large splashes of molten metal: Simulated
                  skin is affixed to the inside of the sample glove. Molten
                  metal is then poured over the glove to determine what quantity
                  will damage the simulated skin. If molten metal droplets
                  remain stuck to the glove or if the glove ignites, the sample
                  will fail with zero score. The weight of molten metal decides
                  the rating for this parameter (Table 1).
                </h2>
              </div>

              <div className="blog-material">
                <h2>MATERIALS AND METHODS</h2>
                <h3>
                  Inherent flame-retardant (IFR) fibres such as para-aramid (1.7
                  dtex, 51 mm) and meta-aramid (1.7 dtex, 51 mm), were used in
                  the development of seamless and cut & sewn gloves Figure 2 &
                  Figure 3.
                </h3>{" "}
                <br /> <br /> <br />
                <div className="blog-baal-container">
                  <div className="blog-baal">
                    <img src={Baal} alt="" />
                  </div>
                  <div className="blog-big-img">
                    <img src={BigImg} alt="" />
                  </div>

                  <div className="blog-small-img">
                    <img src={SmallImg} alt="" />
                  </div>
                  <h3>
                    Figure 2. Samples of para-aramid fibres, para-aramid
                    seamless knitted gloves (7 gauge, 7 gauge terry & 13 gauge
                    with leather stitched on palm) & m-aramid/wool blended
                    seamless gloves (7 gauge)
                  </h3>

                  {/*  */}
                  <div className="two-galves-blog">
                    <div className="inner two-galves-blog"></div>
                  </div>
                </div>{" "}
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

export default BlogSingle;