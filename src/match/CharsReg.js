import './CharsReg.scss'
import NextButton from '../components/NextButton';
import HeartSVG from '../components/HeartSVG';

function CharsReg(){
    const submitHandler = async (e) => {
        
    }

    return(
        <div className='characteristics'>
            <div>
                <HeartSVG/>
            </div>
            {/* <h1>Hello Dear World.</h1> */}
            <h1>I'm into someone who's...and...!</h1>
            <h2>How is your match like?</h2>
            <form className="cards-container">
            <div className='card'>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🧑🏼‍🦲Brown</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🧑🏿‍🦲Black</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item mt-4'>
                 <div className="paragraph">
                <p>😛Tall</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching1'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>😜Medium height</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching1'/>
                </div>
            </div>
            </div>
            </form>
            
            <NextButton onClick={submitHandler} className='interestnext'/>
        </div>
    )
}

export default CharsReg;