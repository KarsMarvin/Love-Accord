import React, { Component } from 'react';
import './CharsReg.css'

export class Values extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
  render() {
    return(
        <div className='characteristics'>
            {/* <h1>Hello Dear World.</h1> */}
            <h1>Tell us more About him/her!</h1>
            <h2>Values and traits</h2>
            <form className="cards-container">
            <div className='card'>
            <div className='input-item'>
                 <div className="paragraph">
                <p>😎Confidence</p>
                </div>
                <div className="input">   
                <input type="radio" value="confidence" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🏆Being Active</p>
                </div>
                <div className="input">   
                <input type="radio" value="active" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🖌️Creativity</p>
                </div>
                <div className="input">   
                <input type="radio" value="creativity" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>💙Empathy</p>
                </div>
                <div className="input">   
                <input type="radio" value="empathy" name='searching'/>
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
export default Values;