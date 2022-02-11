import React, { Component } from 'react';
import NextButton from '../components/NextButton';
import './CharsReg.css'

export class Music extends Component {
    continue = e => {
        e.preventDefault();
        if(this.props.state.interests.music !== ""){
            this.props.nextStep();
        }
    };
    constructor(props){
        super(props)
        this.state = {
            xtics: [
                {name: "🎧Hip Hop ",active: false, value: "hiphop"},
                {name: "🎶R&B",active: false, value: "r&b"},
                {name: "🎺Classical ",active: false, value: "classical"},
                {name: "🎹Drill ",active: false, value: "drill"},
            ]
        }
    }
    changeHandler = name => {
        let musicCopy = this.state.xtics;
        for(let i=0; i < musicCopy.length; i++){
            if(musicCopy[i].name === name){
                musicCopy[i].active = true
                this.props.state.interests.music = musicCopy[i].value
            }
            else {
                musicCopy[i].active = false
            }
        }
        this.setState({music: musicCopy})
    }
  render() {

    return(
        <div className='characteristics'>
            {/* <h1>Hello Dear World.</h1> */}
            <h1>What Type of songs or rythm?</h1>
            <h2>Music</h2>
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

export default Music;
