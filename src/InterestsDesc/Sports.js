import './CharsReg.css'
import NextButton from '../components/NextButton';
import axios from 'axios';

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
                  // window.location.href = "/home";
                }).catch(err=>{
                  console.log(err);
                  window.alert("Something went wrong,try again in sometime");
                })
            nextStep();
        }
    }

    return(
        <div className='characteristics'>
            {/* <h1>Hello Dear World.</h1> */}
            <h1>Which sports is he/she in?</h1>
            <h2>Sports</h2>
            <form className="cards-container">
            <div className='card' onChange={(e) => inputChange(e.target.value)}>
            <div className='input-item'>
                 <div className="paragraph">
                <p>⚽Football</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching' value="football"/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🏀Basketball</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching' value="basketball"/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🏐Volleyball</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching' value="volleyball"/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🏓Pingpong</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching' value="pingpong"/>
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

export default Sports;