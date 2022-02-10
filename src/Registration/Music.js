import React, { Component } from 'react';
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
                <input type="radio" value="hippop" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎶R&B</p>
                </div>
                <div className="input">   
                <input type="radio" value="r&b" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎺Classical</p>
                </div>
                <div className="input">   
                <input type="radio" value="classical" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎹Drill</p>
                </div>
                <div className="input">   
                <input type="radio" value="drill" name='searching'/>
                </div>
            </div>
            </div>
            </form>
            
            <div className="text-right interestbutton">
                <button className="btn btn-primary interestnext" onClick={this.continue}>Next</button>
            </div>
        </div>
    )
}
}

export default Music;
