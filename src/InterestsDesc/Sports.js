import './CharsReg.css'
import NextButton from '../components/NextButton';
import axios from 'axios';
import { useState } from 'react';

function Sports({ allvalues, values, inputChange, nextStep }){
    let config = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        if(values.length !== 0){
              axios.post('http://v-a-l.herokuapp.com/api/users/interest',
                {
                  sports: allvalues[0],
                  values: allvalues[2],
                  skincolor: allvalues[1],
                  height: values,
                },
                config
                ).then(res=>{
                  console.log(res.data);
                  window.location.href = "/results";
                }).catch(err=>{
                  console.log(err);
                  window.alert("Something went wrong,try again in sometime");
                })
            nextStep();
        }
    }

    const [xtics, setxtics] = useState([
        {name: "⚽ Football", active: false, value: "football"},
        {name: "🏀 Basketball", active: false, value: "basketball"},
        {name: "🏐 Volleyball", active: false, value: "volleyball"},
        {name: "🏓 Pingpong", active: false, value: "pingpong"}
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
            <h1>Which sports is he/she in?</h1>
            <h2>Sports</h2>
            <form className="cards-container">
            <div className='card' onChange={(e) => inputChange(e.target.value)}>
            { xtics && xtics.map((xtic, i) => (                
                <div key={i} className={xtic.active ? "input-item active" : "input-item"} onClick={e => handleChange(xtic.name)}>
                    <div className="paragraph">
                        <p>{xtic.name}</p>
                    </div>
                </div>
                ))}
            </div>
            </form>
            
            <div className='buttondiv' onClick={e => submitHandler(e)}>
                <NextButton title={"Get Results"}/>
            </div>
        </div>
    )
}

export default Sports;