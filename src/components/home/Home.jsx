import Aboutsection from "../about-section/Aboutsection";
import Carousel from "../carousel/Carousel";
import CeoSection from "../ceo/CeoSection";
import Modal from "../contackModal/Modal";
import Feedbacksection from "../feedbacksection/Feedbacksection";
import FrontBlog from "../front-blog/FrontBlog";
import FrontServices from "../front-service/FrontService";
import FrontContacj from "../frontContact/FrontContacj";
// import OurTeam from "../our-team/OurTeam";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-container">

        {/* carousel  */}
        <Carousel/>


        {/* messagepop  */}
        <Modal />

        {/* cseosetion  */}
        <CeoSection />

        {/* contact  */}
        <FrontContacj />

        {/* about-us-section  */}
        <Aboutsection />

                {/* Front-Service */}
                <FrontServices />

        {/* front-blog  */}
        <FrontBlog />

        {/* feedback section  */}
        <Feedbacksection />


        {/* our_team  */}
        {/* <OurTeam /> */}
      </div>
    </>
  );
}

export default Home;
