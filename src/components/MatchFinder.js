import React, { useState } from 'react';
import Height from '../InterestsDesc/Height';
import Scolor from '../InterestsDesc/Scolor';
import Sports from '../InterestsDesc/Sports';
import Values from '../InterestsDesc/Values';
// import axios from 'axios';

function MatchFinder() {
  // let config = {
  //   headers: {
  //     Authorization: localStorage.getItem("token"),
  //   },
  // };
  const [step,setStep] = useState(1);
  const [height,setHeight] = useState('');
  const [values,setValues] = useState('');
  const [skincolor,setSkinColor] = useState('');
  const [sports,setSports] = useState('');

  const nextStep= () =>{
    setStep(step+1);
  }
  const inputChange =newInput=>{
    setHeight(newInput);
    setValues(newInput);
    setSkinColor(newInput);
    setSports(newInput);
  }

  // console.log(height,"heighttttt");
  // console.log(skincolor,"colorrrrrrr");
  
  // axios.post('http://localhost:5000/match/',
  // {
  //   sports: sports,
  //   values: values,
  //   skincolor: skincolor,
  //   height: height,
  // },
  // config
  // ).then(res=>{
  //   console.log(res.data);
  //   // window.location.href = "/home";
  // });

    const stepid = step;

    switch (stepid) {
        case 1:
            return (
                <Height
                    nextStep={nextStep}
                    inputChange={inputChange}
                    values={height}
                />
            );
        case 2:
            return (
                 <Scolor
                    nextStep={nextStep}
                    inputChange={inputChange}
                    values={skincolor}
                />
            );
        case 3:
            return (
               <Values
                    nextStep={nextStep}
                    inputChange={inputChange}
                    values={values}
                />
            );
        default: return (
          <Sports
            nextStep={nextStep}
            inputChange={inputChange}
            values={sports}
          />
        )
    }
}

export default MatchFinder;