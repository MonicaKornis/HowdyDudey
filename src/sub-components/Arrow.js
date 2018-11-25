import React from 'react';

const Arrow = ({ type, goBackStep, goForwardStep}) => {
  const action = type === 'forward' ? goForwardStep : goBackStep;

  return (
      <div onClick={action}>
        {type}
      </div>
  )
}

export default Arrow;
