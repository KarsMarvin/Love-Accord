import './CharsReg.css'
import NextButton from '../components/NextButton';

function Creativity(){
    const submitHandler = async (e) => {
        
    }

    return(
        <div className='characteristics'>
            {/* <h1>Hello Dear World.</h1> */}
            <h1>In which creative way is your match?</h1>
            <h2>Creativity</h2>
            <form className="cards-container">
            <div className='card'>
            <div className='input-item'>
                 <div className="paragraph">
                <p>📝Writing</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎨Art</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>📸Photography</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎥Making Videos</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            </div>
            </form>
            
            <NextButton onClick={submitHandler} className='interestnext'/>
        </div>
    )
}

export default Creativity;