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
            <h2>Alphabet Inc.</h2>
            <small>2018 - 2019</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque consequatur doloribus nesciunt culpa rem qui commodi nemo consectetur corporis.</p>
            <span className='left-container-arrow' ></span>
            </div>    
        </div>

        <div className="history-container right-container">
        <img src={companylogo} alt="" />
            <div className="text-box">
            <h2>Alphabet Inc.</h2>
            <small>2018 - 2019</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque consequatur doloribus nesciunt culpa rem qui commodi nemo consectetur corporis.</p>
            <span className='right-container-arrow' ></span>
            </div>    
        </div>

        <div className="history-container left-container ">
        <img src={companylogo} alt="" />
            <div className="text-box">
            <h2>Alphabet Inc.</h2>
            <small>2018 - 2019</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque consequatur doloribus nesciunt culpa rem qui commodi nemo consectetur corporis.</p>
            <span className='left-container-arrow' ></span>
            </div>    
        </div>

        <div className="history-container right-container ">
        <img src={companylogo} alt="" />
            <div className="text-box">
            <h2>Alphabet Inc.</h2>
            <small>2018 - 2019</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque consequatur doloribus nesciunt culpa rem qui commodi nemo consectetur corporis.</p>
            <span className='right-container-arrow' ></span>
            </div>    
        </div>

        <div className="history-container left-container ">
        <img src={companylogo} alt="" />
            <div className="text-box">
            <h2>Alphabet Inc.</h2>
            <small>2018 - 2019</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque consequatur doloribus nesciunt culpa rem qui commodi nemo consectetur corporis.</p>
            <span className='left-container-arrow' ></span>
            </div>    
        </div>


    </div>
    </div>
    </>
  )
}

export default History