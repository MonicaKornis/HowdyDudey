import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Arrow = ({ type, goBackStep, goForwardStep}) => {
  const action = type === 'forward' ? goForwardStep : goBackStep;
  const icon = type === 'forward' ? faArrowRight : faArrowLeft;
  return (
      <FontAwesomeIcon icon={icon} onClick={action}/>
  )
}

export default Arrow;
