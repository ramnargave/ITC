import './FeedBacksection.css'
import pic1 from '../../assets/img/feedpic-1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Feedbacksection() {
  AOS.init({
    offset: 120, 
    delay: 0, 
    duration: 1000, 
  });
  return (
    <>

<div className='feedmain-cont' data-aos="fade-right">
      <div className="containerfeed">
        <div className="feedback-heading"><h1>FeedBack</h1></div>
        <div className="container__right">
          <div className="card">
            <img src={pic1} alt="user" />
            <div className="card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="card__details">
                <p>
                  We had a great time collaborating with the Filament team. They
                  have my high recommendation!
                </p>
                <h4>- Marnus Stephen</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={pic1} alt="user" />
            <div className="card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="card__details">
                <p>
                  The team drastically improved our product's user experience &
                  increased our business outreach.
                </p>
                <h4>- Andrew Jettpace</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={pic1} alt="user" />
            <div className="card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="card__details">
                <p>
                  I absolutely loved working with the Filament team. Complete
                  experts at what they do!
                </p>
                <h4>- Stacy Stone</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={pic1} alt="user" />
            <div className="card__content">
              <span><i className="ri-double-quotes-l"></i></span>
              <div className="card__details">
                <p>
                  I absolutely loved working with the Filament team. Complete
                  experts at what they do!
                </p>
                <h4>- Stacy Stone</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Feedbacksection