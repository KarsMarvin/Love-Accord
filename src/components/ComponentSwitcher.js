import React, { Component } from 'react';
import AccountInfo from '../Registration/AccountInfo';
import Desc from '../Registration/CharsReg'
import Searching from '../Registration/Searching'
import Music from '../Registration/Music'
export class SignUp extends Component {
  state={
    step:1,
    name:' ',
    gender:' ',
    classroom:' ',
  };
  nextStep=()=>{
    const { step } = this.state;  
    this.setState({step: step+1})
  }
  // prevStep=()=>{
  //   const { step } = this.state;  
  //   this.setState({step: step-1})
  // }
  inputChange = input=>e=>{
    this.setState({
      [input]: e.target.value
    })
  }
  render() {
    const { step } = this.state;
    const { name, email, phone, password, facebook, twitter, github } = this.state;
    const values = { name, email, phone, password, facebook, twitter, github };

    switch (step) {
        case 1:
            return (
                <AccountInfo
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    values={values}
                />
            );
        case 2:
            return (
                 <Desc
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    values={values}
                />
            );
        case 3:
            return (
               <Searching
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    values={values}
                />
            );
        case 4:
            return (
               <Music
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    values={values}
                />
            );
        default: return (
          <Music
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            values={values}
          />
        )
    }
}
}

export default SignUp;
