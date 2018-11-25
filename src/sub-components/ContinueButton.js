import React from 'react';

const ContinueButton = ({ goForwardStep, selection}) => {

  return (
      <div onClick={(e) => goForwardStep(e)}>
        CONTINUE
      </div>
  )
}

export default ContinueButton;
