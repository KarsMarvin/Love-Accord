import React, { Component } from 'react';
import AccountInfo from '../Registration/AccountInfo';
import Desc from '../Registration/CharsReg'
import Searching from '../Registration/Searching'
import Music from '../Registration/Music'
import Creativity from '../Registration/Creativity'
import Sports from '../Registration/Sports'
import Social from '../Registration/Social'
import Values from '../Registration/Values'
import Movies from '../Registration/Movies'
export class SignUp extends Component {
  state={
    step:1,
    fullName:' ',
    gender:' ',
    darassa:' ',
    movie: "",  
    interests: {
        music:"",
        sports:"",
        values:"",
        searching:"",
        creativity:"",
    },
    otherInt: {
        news: "",
        social: ""
    },
    char:{
        skincolor:" ",
        height:"",
    }
  };
  nextStep=()=>{
    const { step } = this.state;  
    this.setState({step: step+1})
  }
  // prevStep=()=>{
  //   const { step } = this.state;  
  //   this.setState({step: step-1})
  // }

   render() {
    const { step } = this.state;
    

    switch (step) {
        case 1:
            return (
                <AccountInfo
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    state={this.state}
                    
                />
            );
        case 2:
            return (
                 <Desc
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    state={this.state}
                />
);
        case 3:
            return (
               <Searching
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    state={this.state}
                />
);
        case 4:
            return (
               <Music
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    state={this.state}
                />
);
            case 5:
              return (
                 <Sports
                      nextStep={this.nextStep}
                      inputChange={this.inputChange}
                      state={this.state}
                  />
);
              case 6:
            return (
               <Movies
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    state={this.state}
                />
);
            case 7:
            return (
               <Creativity
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    state={this.state}
                />
);
            case 8:
              return (
                 <Values
                      nextStep={this.nextStep}
                      inputChange={this.inputChange}
                      state={this.state}
                  />
);
              case 9:
            return (
               <Social
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    state={this.state}
                />
);
        default: return (
          <AccountInfo
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            state={this.state}
          />
)
    }
}
}

export default SignUp;
