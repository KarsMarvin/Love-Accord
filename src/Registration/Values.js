import React, { Component } from 'react';
import NextButton from '../components/NextButton';
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
                <input type="radio" value="confidence" name='searching' onClick={e => this.props.state.interests.values = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🏆Being Active</p>
                </div>
                <div className="input">   
                <input type="radio" value="active" name='searching' onClick={e => this.props.state.interests.values = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🖌️Creativity</p>
                </div>
                <div className="input">   
                <input type="radio" value="creativity" name='searching' onClick={e => this.props.state.interests.values = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>💙Empathy</p>
                </div>
                <div className="input">   
                <input type="radio" value="empathy" name='searching' onClick={e => this.props.state.interests.values = e.target.value}/>
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
export default Values;