import './CeoSection.css'
import ceoimg from '../../assets/img/ceo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function CeoSection() {
  AOS.init();
  return (
    <>
    <div className="ceo-setion-main-cont" data-aos="fade-left" >
        <div className="ceo-sectionimg-div">
            <img src={ceoimg} alt="" />
        </div>
        <div className="ceo-section-content">
            <div className="ceo-section-main-content">Dr. Nandan Kumar, a leader in protective textiles, founded High Performance Textiles Pvt Ltd in 2010, focusing on innovative spinning technologies and flame-retardant fibers.


</div>
            <div className="ceo-section-content-name">CEO:- Dr. Nandan Kumar</div>
        </div>
    </div>
    </>
  )
}

export default CeoSection