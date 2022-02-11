import React, { Component } from 'react';
import NextButton from '../components/NextButton';
import './CharsReg.css'

export class Music extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
  render() {

    return(
        <div className='characteristics'>
            {/* <h1>Hello Dear World.</h1> */}
            <h1>What Type of songs or rythm?</h1>
            <h2>Music</h2>
            <form className="cards-container">
            <div className='card'>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎧Hip Hop</p>
                </div>
                <div className="input">   
                <input type="radio" value="hiphop" name='searching' onClick={e => this.props.state.interests.music = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎶R&B</p>
                </div>
                <div className="input">   
                <input type="radio" value="r&b" name='searching' onClick={e => this.props.state.interests.music = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎺Classical</p>
                </div>
                <div className="input">   
                <input type="radio" value="classical" name='searching' onClick={e => this.props.state.interests.music = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎹Drill</p>
                </div>
                <div className="input">   
                <input type="radio" value="drill" name='searching' onClick={e => this.props.state.interests.music = e.target.value}/>
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

export default Music;
