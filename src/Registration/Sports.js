import React, { Component } from 'react';
import NextButton from '../components/NextButton';
import './CharsReg.css'

export class Sports extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
  render() {


    return(
        <div className='characteristics'>
           
            <h1>Which sports is he/she in?</h1>
            <h2>Sports</h2>
            <form className="cards-container">
            <div className='card'>
            <div className='input-item'>
                 <div className="paragraph">
                <p>⚽Football</p>
                </div>
                <div className="input">   
                <input type="radio" value="football" name='searching' onClick={e => this.props.state.interests.sports = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🏀Basketball</p>
                </div>
                <div className="input">   
                <input type="radio" value="basketball" name='searching' onClick={e => this.props.state.interests.sports = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🏐Volleyball</p>
                </div>
                <div className="input">   
                <input type="radio" value="volleyball" name='searching' onClick={e => this.props.state.interests.sports = e.target.value}/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🏓Pingpong</p>
                </div>
                <div className="input">   
                <input type="radio" value="pingpong" name='searching' onClick={e => this.props.state.interests.sports = e.target.value}/>
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
export default Sports;