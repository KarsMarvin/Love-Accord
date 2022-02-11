import React, { Component } from 'react';
import NextButton from '../components/NextButton';
import './CharsReg.css'

export class Movies extends Component {
    continue = e => {
        e.preventDefault();
        if(this.props.state.interests.movie !== "" ){
            this.props.nextStep();
        }
    };
    constructor(props){
        super(props)
        this.state = {
            xtics: [
                {name: "🥷🏽Action ",active: false, value: "action"},
                {name: "🌹Romance ",active: false, value: "romance"},
                {name: "👻Horror ",active: false, value: "horror"},
                {name: "🎭Drama ",active: false, value: "drama"},
            ]
        }
    }
    changeHandler = name => {
        let movieCopy = this.state.xtics;
        for(let i=0; i < movieCopy.length; i++){
            if(movieCopy[i].name === name){
                movieCopy[i].active = true
                this.props.state.movie = movieCopy[i].value
            }
            else {
                movieCopy[i].active = false
            }
        }
        this.setState({movie: movieCopy})
    }
  render() {
      return(
        <div className='characteristics'>
        {/* <h1>Hello Dear World.</h1> */}
        <h1>Movies</h1>
        <h2>What is your go-to movie genre</h2>
        <form className="cards-container">
        <div className='card'>
        {this.state.xtics.map((xtics, i) => (            
                <div key={i} className={xtics.active ? "input-item active" : "input-item"} onClick={e => this.changeHandler(xtics.name)}>
                    <div className="paragraph">
                        <p>{xtics.name}</p>
                    </div>
                </div>
            ))}
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

export default Movies;