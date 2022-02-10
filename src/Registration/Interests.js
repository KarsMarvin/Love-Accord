import React, { Component } from 'react';
import './CharsReg.css'

export class Interests extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
  render() {


    return(
        <div className='characteristics'>
            {/* <h1>Hello Dear World!</h1> */}
            <h1>Let's get you the perfect one!</h1>
            <h2>Interests...</h2>
            <form className="cards-container">
            <div className='card' onChange={(e) => setSearching(e.target.value)}>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎮Games</p>
                </div>
                <div className="input">   
                <input type="radio" value="games" name='searching' value="games"/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>📺Movies</p>
                </div>
                <div className="input">   
                <input type="radio" value="" name='searching' value="movies"/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>💃Dancing</p>
                </div>
                <div className="input">   
                <input type="radio" value="" name='searching' value="dancing"/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🎤Singing</p>
                </div>
                <div className="input">   
                <input type="radio" value="" name='searching' value="singing"/>
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
export default Interests;