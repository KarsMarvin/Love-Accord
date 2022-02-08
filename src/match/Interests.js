import './CharsReg.css'
// import { Link } from "react-router-dom";
import { useState } from 'react';
// import axios from 'axios';

function Interests(){

    const [searching, setSearching] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();
        if(searching.length > 0){
            window.location.href = "/social";
        }
    };

    return(
        <div className='characteristics'>
            <h1>Hello Dear World!</h1>
            {/* <h1>Let's get you Someone!</h1>
            <h2>Interests...</h2> */}
            <form className="cards-container">
            <div className='card' onChange={(e) => setSearching(e.target.value)}>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎮Games</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching' value="games"/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>📺Movies</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching' value="movies"/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>💃Dancing</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching' value="dancing"/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎤Singing</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching' value="singing"/>
                </div>
            </div>
            </div>
            </form>
            
            <div className="interestbutton">
            {/* <Link to="/social"> */}
                <button onClick={submitHandler} className='interestnext'>Next</button>
            {/* </Link> */}
            </div>
        </div>
    )
}

export default Interests;