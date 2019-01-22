import React from 'react';
import ArrowLeft from '../svgs/arrow-left';
import ArrowRight from '../svgs/arrow-right';

const Arrow = ({ type, goBackStep, goForwardStep}) => {
  const action = type === 'forward' ? goForwardStep : goBackStep;
  debugger
  if(type === 'forward') {
    return (
        <ArrowRight action={goForwardStep}/>
    )
  } else {
    return (
        <ArrowLeft action={goBackStep}/>
    )
  }
}
export default Arrow;
