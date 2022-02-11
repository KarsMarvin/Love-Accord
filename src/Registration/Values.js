import React, { Component } from 'react';
import NextButton from '../components/NextButton';
import './CharsReg.css'

export class Values extends Component {
    continue = e => {
        e.preventDefault();
        if(this.props.state.interests.values !== "" ){
            this.props.nextStep();
        }
    };
    constructor(props){
        super(props)
        this.state = {
            xtics: [
                {name: "😎Respect ",active: false, value: "respect"},
                {name: "🧑🏻‍🤝‍🧑🏾Companionship ",active: false, value: "companionship"},
                {name: "🔐Commitment ",active: false, value: "commitment"},
                {name: "💙Empathy ",active: false, value: "empathy"},
            ]
        }
    }
    changeHandler = name => {
        let relationshipCopy = this.state.xtics;
        for(let i=0; i < relationshipCopy.length; i++){
            if(relationshipCopy[i].name === name){
                relationshipCopy[i].active = true
                this.props.state.interests.values = relationshipCopy[i].value
            }
            else {
                relationshipCopy[i].active = false
            }
        }
        this.setState({relationship: relationshipCopy})
    }
  render() {
    return(
        <div className='characteristics'>
            {/* <h1>Hello Dear World.</h1> */}
            <h1>Value & Traits</h1>
            <h2>What Do you think Is Best For a Healthy Relationship</h2>
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
export default Values;