import './CharsReg.css'
import { Link } from "react-router-dom";

function Values(){

    return(
        <div className='characteristics'>
            <h1>Hello Dear World.</h1>
            {/* <h1>Tell us more About him/her!</h1>
            <h2>Values and traits</h2> */}
            <form className="cards-container">
            <div className='card'>
            <div className='input-item'>
                 <div className="paragraph">
                <p>😎Confidence</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🏆Being Active</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🖌️Creativity</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>💙Empathy</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            </div>
            </form>
            
            <div className="button">
            <Link to="/music">
                <button>Next</button>
            </Link>
            </div>
        </div>
    )
}

export default Values;