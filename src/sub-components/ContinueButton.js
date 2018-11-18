import React from 'react';

const ContinueButton = ({ goForwardStep, selection}) => {
  debugger
  return (
      <div onClick={(e) => goForwardStep(e,selection)}>
        CONTINUE
      </div>
  )
}

export default ContinueButton;
