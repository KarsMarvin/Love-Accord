import './Social.css'
import { Link } from "react-router-dom";

function Social(){

    return(
        <div className='social'>
            <h1>Which news and social media?</h1>
            <form className="social-container">
            <div className='socialcard'>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🧑🏽‍🎤Show-bizz</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🤽🏿‍♀️Sports</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>👨🏻‍💻Science&tech</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🧑🏽‍💼Business</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item mt-4'>
                 <div className="paragraph">
                <p>🔶Instagram</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching1'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🔷Twitter</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching1'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🟩Whatsapp</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching1'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🔵Facebook</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching1'/>
                </div>
            </div>
            </div>
            </form>
            
            <div className="button">
            <Link to="/social">
                <button type='submit'>Let's go</button>
            </Link>
            </div>
        </div>
    )
}

export default Social;