// import MessageIcon from '@mui/icons-material/Message';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Modal.css'
import { useState } from 'react';
import messages from '../../assets/img/messages.png'


function Modal() {
const [messagepop, setMessagePop] = useState(false)


  return (
    <>
    <div className={messagepop ? "modal-main-cont" : "modal-main-cont-hide"}>
    <div className={messagepop ? "modal-pop-main-cont" : "modal-pop-main-cont-hide"}>
      <div className="message-pop-close"><div onClick={()=> setMessagePop(false)} >X</div></div>
      <input type="text" placeholder='Your Name' />
      <input type="email" placeholder='Your E-Mail' />
      <textarea name="message" id="" placeholder='Write Message...' ></textarea>
      <button type="submit">Submit<ArrowForwardIcon/></button>
    </div>


    <div className="message-icon" onClick={()=> setMessagePop(!messagepop)} ><img src={messages} alt="" /></div>
    </div>
    
    </>
  )
}

export default Modal