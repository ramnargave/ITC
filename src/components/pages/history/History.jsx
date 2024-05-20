import './History.css'
import companylogo from '../../../assets/img/logo.png'

function History() {
  return (
    <>
    <div className="history-main-container">
    <div className="timeline">
        <div className="history-container left-container">
            <img src={companylogo} alt="" />
            <div className="text-box">
            <h2>ITT</h2>
            <small>2016</small>
            <p>ITT was formred in 2016 as a properitership by Dr Nandan Kumar.</p>
            <span className='left-container-arrow' ></span>
            </div>    
        </div>

        <div className="history-container right-container">
        <img src={companylogo} alt="" />
            <div className="text-box">
            <h2>ITT</h2>
            <small>2023</small>
            <p>ITT got converted as private limited firm in 2023.</p>
            <span className='right-container-arrow' ></span>
            </div>    
        </div>

    </div>
    </div>
    </>
  )
}

export default History