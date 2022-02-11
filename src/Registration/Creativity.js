import React, { Component } from 'react';
import NextButton from '../components/NextButton';
import './CharsReg.css'

export class Creativity extends Component {
    continue = e => {
        e.preventDefault();
        if(this.props.state.interests.creativity!== ""){
            this.props.nextStep();
        }
    };
    constructor(props){
        super(props)
        this.state = {
            xtics: [
                {name: "📝Writing ",active: false, value: "writing"},
                {name: "🎨Art ",active: false, value: "art"},
                {name: "📸Photography ",active: false, value: "photography"},
                {name: "🎥Making Videos ",active: false, value: "makingvideo"},
            ]
        }
    }
    changeHandler = name => {
        let relationshipCopy = this.state.xtics;
        for(let i=0; i < relationshipCopy.length; i++){
            if(relationshipCopy[i].name === name){
                relationshipCopy[i].active = true
                this.props.state.interests.creativity = relationshipCopy[i].value
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
            <h1>Interests</h1>
            <h2>Pick one that interests you the most </h2>
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
export default Creativity;