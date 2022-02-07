import './CharsReg.css'
import { Link } from "react-router-dom";

function CharsRegFinal(){

    return(
        <div className='characteristics'>
            <h1>Let's get you Someone!</h1>
            <h2>Interests...</h2>
            <form className="cards-container">
            <div className='card'>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎮Gaming</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>📺Movies</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>💃Dancing</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎤Singing</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            </div>
            </form>
            
            <div className="button">
            <Link to="/happy-for-you">
                <button>Let's go</button>
            </Link>
            </div>
        </div>
    )
}

export default CharsRegFinal;