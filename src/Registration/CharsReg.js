import React, { Component } from 'react';
import NextButton from '../components/NextButton';

export class Desc extends Component {
    continue = e => {
        e.preventDefault();
        if(this.props.state.char.skincolor !== "" && this.props.state.char.height !== ""){
            this.props.nextStep();
        }
    };
    constructor(props){
        super(props)
        this.state={
            skinColor: [
                {name: "🧑🏼‍🦲 Brown", active: false, value: "brown"},
                {name: "🧑🏿‍🦲 Black", active: false, value: "black"},
            ],
            height: [
                {name: "😛 Tall", active: false, value: "tall"},
                {name: "😜 Medium height", active: false, value: "medium"},
            ]
        }
    }

    changeHandler = name => {
        let skinColorCopy = this.state.skinColor;
        for(let i=0; i < skinColorCopy.length; i++){
            if(skinColorCopy[i].name == name){
                skinColorCopy[i].active = true
                this.props.state.char.skincolor = skinColorCopy[i].value
            }
            else {
                skinColorCopy[i].active = false
            }
        }
        this.setState({skinColor: skinColorCopy})
    }

    changeHandler2 = name => {
        this.props.state.char.height = name
        let heightCopy = this.state.height;
        for(let i=0; i < heightCopy.length; i++){
            if(heightCopy[i].name == name){
                heightCopy[i].active = true
                this.props.state.char.height = heightCopy[i].value
            }
            else {
                heightCopy[i].active = false
            }
        }
        this.setState({height: heightCopy})
    }
  render() {

    return(
<div className='characteristics'>
            
            <h1>I'm into someone who's...and...!</h1>
            <h2>How is your match like?</h2>
            <form className="cards-container">
            <div className='card'>
            {this.state.skinColor && this.state.skinColor.map((color,i) => (            
                <div key={i} className={color.active ? "input-item active" : "input-item"} onClick={e => this.changeHandler(color.name)}>
                    <div className="paragraph">
                        <p>{color.name}</p>
                    </div>
                </div>
            ))}
            <br />
            {this.state.height.map((height, i) => (            
                <div key={i} className={height.active ? "input-item active2" : "input-item"} onClick={e => this.changeHandler2(height.name)}>
                    <div className="paragraph">
                        <p>{height.name}</p>
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

export default Desc;
