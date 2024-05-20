import './Carousel.css'
import slide1 from '../../assets/img/slide1.png'
import slide2 from '../../assets/img/slide2.png'
import slide3 from '../../assets/img/slide3.jpg'

function Carousel() {
  return (
    <>
    <div className="caroussel-main-container">
    <div className="banner banner1">
        <img src={slide1} alt="" />
        <div className="text-boxt text-boxt1">
            {/* <h1>Introduction</h1>
            <p>To develop a commercial testing & training centre in the field of technical textiles with focus on the 3M framework</p> */}
        </div>
    </div>
    <div className="banner banner2">
        <img src={slide2} alt="" />
        <div className="text-boxt text-boxt2">
        {/* <h1>Testing facilities: Protective Textiles</h1>
            <p>ITT provides one stop solution for training, testing, R & D in the field of protective Textiles. </p> */}
        </div>
    </div>
    <div className="banner banner3">
        <img src={slide3} alt="" />
        <div className="text-boxt text-boxt3">
        {/* <h1>ITT </h1>
            <p>ITT provides one stop solution for training, testing, R & D in the field of protective Textiles. </p> */}
        </div>
    </div>
    </div>
    </>
  )
}

export default Carousel