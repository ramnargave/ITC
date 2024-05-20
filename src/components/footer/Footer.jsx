import { Link } from 'react-router-dom'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css'

function Footer() {
  return (
    <>
    <div className="footer-main-container">
        <div className="footer-small-div">
            <div className="footer-small-top">About Us</div>
            <div className="footer-bottom-div">              Institute of Technical Textiles (ITT) was established in 2016. 
Dr. Nandan Kumar is the CEO and founder of this company. ITT is equipped with various testing facilities that facilitates industries and researchers to get their test conducted in accordance with the European, International and Indian standards. The facilities include testing equipment as per EN 407, EN 388, BS EN 1149 and equivalent standards & test methods.
One can get one's sample tested in this trusted laboratory.</div>
        </div>

        <div className="footer-small-div">
            <div className="footer-small-top">Quick Link</div>
            <Link to={'/'} className="footer-bottom-div">Home</Link>
            <Link to={'/about'} className="footer-bottom-div">About Us</Link>
            <Link to={'/service'} className="footer-bottom-div">Service</Link>
            <Link to={'contact'} className="footer-bottom-div">Contact</Link>
        </div>

        <div className="footer-small-div">
            <div className="footer-small-top">Service</div>
            <Link to={'/'} className="footer-bottom-div">Testing</Link>
            <Link to={'/about'} className="footer-bottom-div">Training</Link>
            <Link to={'/service'} className="footer-bottom-div">Research & Devlopment</Link>
        </div>
        

        <div className="footer-small-div">
            <div className="footer-small-top">Contact Us</div>
            <div className="footer-bottom-div"> <CallIcon/><a href="">+919996625050</a></div>
            <div className="footer-bottom-div"> <EmailIcon/><a href="mailto:ramnargave01@gmail.com">nandan.leeds@gmail.com</a> </div>
        </div>

    </div>
    </>
  )
}

export default Footer