import './CharsReg.css'
import { Link } from "react-router-dom";

function Music(){

    return(
        <div className='characteristics'>
            <h1>Hello Dear World.</h1>
            {/* <h1>What Type of songs or rythms?</h1> */}
            {/* <h2>Music</h2> */}
            <form className="cards-container">
            <div className='card'>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎧Hip Hop</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎶R&B</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎺Classical</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎹Drill</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            </div>
            </form>
            
            <div className="button">
            <Link to="/creativity">
                <button>Next</button>
            </Link>
            </div>
        </div>
    )
}

export default Music;