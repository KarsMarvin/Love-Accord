import './CharsReg.css'
import { Link } from "react-router-dom";

function Sports(){

    return(
        <div className='characteristics'>
            {/* <h1>Hello Dear World.</h1> */}
            <h1>Which sports is he/she in?</h1>
            <h2>Sports</h2>
            <form className="cards-container">
            <div className='card'>
            <div className='input-item'>
                 <div className="paragraph">
                <p>⚽Football</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🏀Basketball</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🏐Volleyball</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🏓Pingpong</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            </div>
            </form>
            
            <div className="button">
            <Link to="/sports">
                <button>Next</button>
            </Link>
            </div>
        </div>
    )
}

export default Sports;