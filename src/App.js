import React from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import MainPage from './MainPage';

const App = ({ children }) => {
  const baseCls = 'app';

  return (
    <HashRouter>
      <div className={baseCls}>
        <Route path='/' component={MainPage} />
        <Route path="1" component={StepOne}/>
        <Route path="2" component={StepTwo}/>
        <Route path="3" component={StepThree}/>
      </div>
    </HashRouter>
  );
};


export default App;
