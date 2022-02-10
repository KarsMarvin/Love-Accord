import React, { useState } from 'react';
import Height from '../InterestsDesc/Height';
import Scolor from '../InterestsDesc/Scolor';
import Sports from '../InterestsDesc/Sports';
import Values from '../InterestsDesc/Values';

function MatchFinder() {
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
  }
  const inputChange2 =newInput=>{
    setSkinColor(newInput);
  }
  const inputChange3 =newInput=>{
    setValues(newInput);
  }
  const inputChange4 =newInput=>{
    setSports(newInput);
  }

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
                    inputChange={inputChange2}
                    values={skincolor}
                />
            );
        case 3:
            return (
               <Values
                    nextStep={nextStep}
                    inputChange={inputChange3}
                    values={values}
                />
            );
        default: return (
          <Sports
            nextStep={nextStep}
            inputChange={inputChange4}
            values={sports}
            allvalues={[height,skincolor,values]}
            />
        )
    }
}

export default MatchFinder;