import React, { Component } from 'react';

export class Searching extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
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
                            <p>❤️A relationship</p>
                            </div>
                            <div className="input">   
                            <input type="radio" value="relationship" name='searching'/>
                            </div>
                        </div>
                        <div className='input-item'>
                            <div className="paragraph">
                            <p>🚀Something casual</p>
                            </div>
                            <div className="input">   
                            <input type="radio" value="casual" name='searching'/>
                            </div>
                        </div>
                        <div className='input-item'>
                            <div className="paragraph">
                            <p>😵Only For Valentine</p>
                            </div>
                            <div className="input">   
                            <input type="radio" value="valantine" name='searching'/>
                            </div>
                        </div>
                        <div className='input-item'>
                            <div className="paragraph">
                            <p>😲Situationship</p>
                            </div>
                            <div className="input">   
                            <input type="radio" value="situationship" name='searching'/>
                            </div>
                        </div>
                        </div>
                        </form>
                    
                    <div className="text-right interestbutton">
                        <button className="btn interestnext" onClick={this.continue}>Next</button>
                    </div>
                </div>
    )
        
    
  }
}

export default Searching;
