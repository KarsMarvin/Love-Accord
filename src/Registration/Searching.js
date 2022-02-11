import React, { Component } from 'react';
import NextButton from '../components/NextButton';

export class Searching extends Component {
    continue = e => {
        e.preventDefault();
        if(this.props.state.interests.searching !== ""){
            this.props.nextStep();
        }
    };
    constructor(props){
        super(props)
        this.state = {
            xtics: [
                {name: "❤️ A relationship ",active: false, value: "relationship"},
                {name: "🚀 Something casual ",active: false, value: "casual"},
                {name: "😵 Only For Valentine ",active: false, value: "valantine"},
                {name: "😲 Situationship ",active: false, value: "situationship"},
            ]
        }
    }
    changeHandler = name => {
        let relationshipCopy = this.state.xtics;
        for(let i=0; i < relationshipCopy.length; i++){
            if(relationshipCopy[i].name === name){
                relationshipCopy[i].active = true
                this.props.state.interests.searching = relationshipCopy[i].value
            }
            else {
                relationshipCopy[i].active = false
            }
        }
        this.setState({relationship: relationshipCopy})
    }
  render(){

    return(
        <div className='characteristics'>
                    {/* <h1>Hello Dear World.</h1> */}
                    <h1>I'm into someone who's...and...!</h1>
                    <h2>How is your match like?</h2>
                    <form className="cards-container">
                        <div className='card' >
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

export default Searching;
