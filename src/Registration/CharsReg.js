import React, { Component } from 'react';

export class Desc extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
  render() {

    return(
<div className='characteristics'>
            {/* <h1>Hello Dear World.</h1> */}
            <h1>I'm into someone who's...and...!</h1>
            <h2>How is your match like?</h2>
            <form className="cards-container">
            <div className='card'>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🧑🏼‍🦲Brown</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>🧑🏿‍🦲Black</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching'/>
                </div>
            </div>
            <div className='input-item mt-4'>
                 <div className="paragraph">
                <p>😛Tall</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching1'/>
                </div>
            </div>
            <div className='input-item'>
                 <div className="paragraph">
                <p>😜Medium height</p>
                </div>
                <div className="input">   
                <input type="radio" name='searching1'/>
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

export default Desc;
