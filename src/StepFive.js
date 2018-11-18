import React from 'react';
import Sign from './sub-components/Sign';
import Arrow from './sub-components/Arrow';
import ContinueButton from './sub-components/ContinueButton';

 const StepFive= ({ step, signText, changeText, goForwardStep, goBackStep }) => {
   debugger
   return(
      <div>
        <Sign changeText={changeText} signText={signText}/>
        <div> Step Five </div>
        <Arrow goForwardStep={goForwardStep} goBackStep={goBackStep} type={'back'}/>
        <Arrow goForwardStep={goForwardStep} goBackStep={goBackStep} type={'forward'}/>
        <ContinueButton goForwardStep={goForwardStep}/>
      </div>
   )
 }

 export default StepFive;