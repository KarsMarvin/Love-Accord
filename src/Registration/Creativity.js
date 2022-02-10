import React, { Component } from 'react';
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
                <input type="radio" values="writing" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎨Art</p>
                </div>
                <div className="input">   
                <input type="radio" values="art" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>📸Photography</p>
                </div>
                <div className="input">   
                <input type="radio" values="photograph" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎥Making Videos</p>
                </div>
                <div className="input">   
                <input type="radio" values="makingvideo" name='searching'/>
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
export default Creativity;