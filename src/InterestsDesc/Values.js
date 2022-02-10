import './CharsReg.scss'
import NextButton from '../components/NextButton';

function Values({ values, inputChange, nextStep }){
    const submitHandler = async (e) => {
        e.preventDefault();
        if(values.length !== 0){
            nextStep();
        }
    }

    return(
        <div className='characteristics'>
            {/* <h1>Hello Dear World.</h1> */}
            <h1>Tell us more About him/her!</h1>
            <h2>Values and traits</h2>
            <form className="cards-container">
            <div className='card' onChange={(e) => inputChange(e.target.value)}>
            <div className='input-item'>
                 <div className="paragraph">
                <p>😎Respect</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching' value="respect"/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🏆Commitment</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching' value="commitment"/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🖌️Companionship</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching' value="companionship"/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>💙Empathy</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching' value="empathy"/>
                </div>
            </div>
            </div>
            </form>
            
            <div className='buttondiv' onClick={e => submitHandler(e)}>
                <NextButton/>
            </div>
        </div>
    )
}

export default Values;