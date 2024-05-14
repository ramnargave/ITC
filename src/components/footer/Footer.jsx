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
            <div className="footer-bottom-div">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde facilis eum consectetur molestias laborum nemo provident voluptates voluptatem qui sapiente.</div>
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
            <div className="footer-bottom-div"> <CallIcon/><a href="">918819069130</a></div>
            <div className="footer-bottom-div"> <EmailIcon/><a href="mailto:ramnargave01@gmail.com">ramnargave01@gmail.com</a> </div>
        </div>

    </div>
    </>
  )
}

export default Footer