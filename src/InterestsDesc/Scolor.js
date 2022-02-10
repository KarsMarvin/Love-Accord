import './CharsReg.scss'
import NextButton from '../components/NextButton';
import HeartSVG from '../components/HeartSVG';

function Scolor({ values, inputChange, nextStep }){
    const submitHandler = async (e) => {
        e.preventDefault();
        if(values.length !== 0){
            nextStep();
            console.log(values,"incomponentcolorrrr");
        }
    }

    return(
        <div className='characteristics'>
            <div>
                <HeartSVG/>
            </div>
            {/* <h1>Hello Dear World.</h1> */}
            <h1>I'm into someone who's...!</h1>
            <h2>How is your match like?</h2>
            <form className="cards-container">
            <div className='card' onChange={(e) => inputChange(e.target.value)}>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🧑🏼‍🦲Brown</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching' value="brown"/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🧑🏿‍🦲Black</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching' value="black"/>
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

export default Scolor;