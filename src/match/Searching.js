import './CharsReg.css'
import { Link } from "react-router-dom";

function Searching(){

    return(
        <div className='characteristics'>
            <h1>Hello Dear World.</h1>
            {/* <h1>What Do Ya want as Match?</h1> */}
            {/* <h2>I am looking For...</h2> */}
            <form className="cards-container">
            <div className='card'>
            <div className='input-item'>
                 <div className="paragraph">
                <p>❤️A relationship</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🚀Something casual</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>😵Only For Valentine</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>😲Situationship</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            </div>
            </form>
            
            <div className="button">
            <Link to="/xtics">
                <button>Next</button>
            </Link>
            </div>
        </div>
    )
}

export default Searching;