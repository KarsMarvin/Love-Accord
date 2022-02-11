import React, { Component } from 'react';
import NextButton from '../components/NextButton';
import './CharsReg.css'

export class Creativity extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
  render() {
    return(
        <div className='characteristics'>
            {/* <h1>Hello Dear World.</h1> */}
            <h1>In which creative way is your match?</h1>
            <h2>Creativity</h2>
            <form className="cards-container">
            <div className='card'>
            <div className='input-item'>
                 <div className="paragraph">
                <p>📝Writing</p>
                </div>
                <div className="input">   
                <input type="radio" values="writing" name='searching' onClick={e => this.props.state.interests.creativity = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎨Art</p>
                </div>
                <div className="input">   
                <input type="radio" values="art" name='searching' onClick={e => this.props.state.interests.creativity = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>📸Photography</p>
                </div>
                <div className="input">   
                <input type="radio" values="photograph" name='searching' onClick={e => this.props.state.interests.creativity = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎥Making Videos</p>
                </div>
                <div className="input">   
                <input type="radio" values="makingvideo" name='searching' onClick={e => this.props.state.interests.creativity = e.target.value}/>
                </div>
            </div>
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