import ceoimg from '../../assets/img/ceo.png'
import './our_team.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Ourteam() {
  return (
    <>
    <div className="bodyhai">
    <h1 className="heading">Meet Our Team</h1>
    <div className="wrapper">
      <div className="profile-main-div">
      <div className="profile">
            <img src={ceoimg} alt="" className="pro_img"/>
            <div className="dtl">
                <h1 className="name">Your Name</h1>
                <h3 className="bio">Front End Developer</h3>
                <div className="social">
                 <div className="bi insta"><InstagramIcon/></div>
                 <div className="bi linkdin"><LinkedInIcon/></div>
                 <div className="bi twiter"><TwitterIcon/></div>
                </div>
            </div>
        </div>
      </div>
    

      <div className="profile-main-div">
      <div className="profile">
            <img src={ceoimg} alt="" className="pro_img"/>
            <div className="dtl">
                <h1 className="name">Your Name</h1>
                <h3 className="bio">Front End Developer</h3>
                <div className="social">
                 <div className="bi insta"><InstagramIcon/></div>
                 <div className="bi linkdin"><LinkedInIcon/></div>
                 <div className="bi twiter"><TwitterIcon/></div>
                </div>
            </div>
        </div>
      </div>

      <div className="profile-main-div">
      <div className="profile">
            <img src={ceoimg} alt="" className="pro_img"/>
            <div className="dtl">
                <h1 className="name">Your Name</h1>
                <h3 className="bio">Front End Developer</h3>
                <div className="social">
                 <div className="bi insta"><InstagramIcon/></div>
                 <div className="bi linkdin"><LinkedInIcon/></div>
                 <div className="bi twiter"><TwitterIcon/></div>
                </div>
            </div>
        </div>
      </div>
      
    </div>
    </div>
   
    </>
  )
}

export default Ourteam