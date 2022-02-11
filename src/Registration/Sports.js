import React, { Component } from 'react';
import NextButton from '../components/NextButton';
import './CharsReg.css'

export class Sports extends Component {
    continue = e => {
        e.preventDefault();
        if(this.props.state.interests.sports !== "" ){
            this.props.nextStep();
        }
    };
    constructor(props){
        super(props)
        this.state = {
            xtics: [
                {name: "⚽Football ",active: false, value: "football"},
                {name: "🏀Basketball ",active: false, value: "basketball"},
                {name: "🏐Volleyball ",active: false, value: "volleyball"},
                {name: "🏓Pingpong ",active: false, value: "pingpong"},
            ]
        }
    }
    changeHandler = name => {
        let sportCopy = this.state.xtics;
        for(let i=0; i < sportCopy.length; i++){
            if(sportCopy[i].name === name){
                sportCopy[i].active = true
                this.props.state.interests.sports = sportCopy[i].value
            }
            else {
                sportCopy[i].active = false
            }
        }
        this.setState({sport: sportCopy})
    }
  render() {


    return(
        <div className='characteristics'>
           
            <h1>Which sports is he/she in?</h1>
            <h2>Sports</h2>
            <form className="cards-container">
            <div className='card'>
            {this.state.xtics.map((xtics, i) => (            
                <div key={i} className={xtics.active ? "input-item active" : "input-item"} onClick={e => this.changeHandler(xtics.name)}>
                    <div className="paragraph">
                        <p>{xtics.name}</p>
                    </div>
                </div>
            ))}
            </div>
            </form>
            
            <div className="text-right buttondiv" onClick={this.continue}>
                {/* <button className=" interestnext" onClick={this.continue}>Next</button> */}
                <NextButton />
            </div>
        </div>
    )
}
}
export default Sports;