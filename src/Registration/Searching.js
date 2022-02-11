import React, { Component } from 'react';
import NextButton from '../components/NextButton';

export class Searching extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    constructor(props){
        super(props)
        this.state = {
            xtics: [
                {name: "❤️ A relationship"}
            ]
        }
    }
  render(){

    return(
        <div className='characteristics'>
                    {/* <h1>Hello Dear World.</h1> */}
                    <h1>I'm into someone who's...and...!</h1>
                    <h2>How is your match like?</h2>
                    <form className="cards-container">
                        <div className='card'>
                        <div className='input-item'>
                            <div className="paragraph">
                            <p>❤️ A relationship</p>
                            </div>
                            <div className="input">   
                            <input type="radio" value="relationship" name='searching' onClick={e => this.props.state.interests.searching = e.target.value}/>
                            </div>
                        </div>
                        <div className='input-item'>
                            <div className="paragraph">
                            <p>🚀 Something casual</p>
                            </div>
                            <div className="input">   
                            <input type="radio" value="casual" name='searching' onClick={e => this.props.state.interests.searching = e.target.value}/>
                            </div>
                        </div>
                        <div className='input-item'>
                            <div className="paragraph">
                            <p>😵 Only For Valentine</p>
                            </div>
                            <div className="input">   
                            <input type="radio" value="valantine" name='searching' onClick={e => this.props.state.interests.searching = e.target.value}/>
                            </div>
                        </div>
                        <div className='input-item'>
                            <div className="paragraph">
                            <p>😲 Situationship</p>
                            </div>
                            <div className="input">   
                            <input type="radio" value="situationship" name='searching' onClick={e => this.props.state.interests.searching = e.target.value}/>
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

export default Searching;
