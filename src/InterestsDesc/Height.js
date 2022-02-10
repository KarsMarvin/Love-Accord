import './CharsReg.css'
import NextButton from '../components/NextButton';

function Height({ values, inputChange, nextStep }){
    const submitHandler = async (e) => {
        e.preventDefault();
        if(values.length !== 0){
            nextStep();
            console.log(values,"incomponentheighttt");
        }
    }

    return(
        <div className='characteristics'>
            {/* <h1>Hello Dear World.</h1> */}
            <h1>How tall do y' want your match?</h1>
            <h2>I'm into someone who's...!</h2>
            <form className="cards-container">
            <div className='card' onChange={(e) => inputChange(e.target.value)}>
            <div className='input-item mt-4'>
            <div className="paragraph">
            <p>😛Tall</p>
            </div>
            <div className="input">   
            <input type="radio" name='searching1' value="tall"/>
            </div>
            </div>
            <div className='input-item mt-4'>
            <div className="paragraph">
            <p>😜Medium height</p>
            </div>
            <div className="input">   
            <input type="radio" name='searching1' value="medium"/>
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

export default Height;