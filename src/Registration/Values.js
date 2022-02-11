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
                <p>😎Respect</p>
                </div>
                <div className="input">   
                <input type="radio" value="respect" name='searching' onClick={e => this.props.state.interests.values = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🏆Companionship</p>
                </div>
                <div className="input">   
                <input type="radio" value="companionship" name='searching' onClick={e => this.props.state.interests.values = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🖌️Commitment</p>
                </div>
                <div className="input">   
                <input type="radio" value="commitment" name='searching' onClick={e => this.props.state.interests.values = e.target.value}/>
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