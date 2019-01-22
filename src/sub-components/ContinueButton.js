import React from 'react';

const ContinueButton = ({ goForwardStep, selection}) => {

  return (
    <div id='continueButton-container'>
      <div id='continueButton' onClick={(e) => goForwardStep(e)}>
        CONTINUE
      </div>
    </div>
  )
}

export default ContinueButton;
