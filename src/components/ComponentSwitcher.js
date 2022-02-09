import React, { Component } from 'react';
import AccountInfo from '../Registration/AccountInfo';
import Description from '../Registration/Description'
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
                 <Description
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    values={values}
                />
            );
        case 3:
            return (
               <AccountInfo
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    values={values}
                />
            );
        case 4:
            return (
               <AccountInfo
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    values={values}
                />
            );
    }
}
}

export default SignUp;