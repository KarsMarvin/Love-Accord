import {useState} from "react"
import './CharsReg.css'
import NextButton from '../components/NextButton';

function Height({ values, inputChange, nextStep }){
    const submitHandler = async (e) => {
        e.preventDefault();
        if(values.length !== 0){
            nextStep();
        }
    }

    const [xtics, setxtics] = useState([
        {name: "😛 Tall", active: false, value: "tall"},
        {name: "😜 Medium height", active: false, value: "medium"}
    ])

    let handleChange = (name) => {
        let xticsCopy = [...xtics]
        for(let i = 0; i<xticsCopy.length; i++){
            if(xticsCopy[i].name === name){
                xticsCopy[i].active = true
                inputChange(xticsCopy[i].value)
                console.log(xticsCopy[i].value)
            }
            else {
                xticsCopy[i].active = false
            }
        }
        setxtics(xticsCopy)
    }

    return(
        <div className='characteristics'>
            {/* <h1>Hello Dear World.</h1> */}
            <h1>Now, time to describe your valentine!</h1>
            <h2>How tall do y' want your match?</h2>
            <form className="cards-container">
            <div className='card' onChange={(e) => inputChange(e.target.value)}>
            { xtics && xtics.map((xtic, i) => (                
                <div key={i} className={xtic.active ? "input-item mt-4 active" : "input-item mt-4"} onClick={e => handleChange(xtic.name)}>
                    <div className="paragraph">
                        <p>{xtic.name}</p>
                    </div>
                    {/* <div className="input">   
                        <input type="radio" name='searching1' value="tall"/>
                    </div> */}
                </div>
                ))}
            {/* <div className='input-item mt-3'>
                <div className="paragraph">
                    <p>😜Medium height</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching1' value="medium"/>
                </div>
                </div> */}
            </div>
            </form>
            <div className='buttondiv' onClick={e => submitHandler(e)}>
                <NextButton/>
            </div>
        </div>
    )
}

export default Height;