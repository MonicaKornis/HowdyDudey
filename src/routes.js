import React from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';

import App from './App';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import MainPage from './MainPage';


const routes = (
  <HashRouter>
    <Route path='/' component={MainPage} />
    <Route exact path="1" component={StepOne}/>
    <Route path="2" component={StepTwo}/>
    <Route path="3" component={StepThree}/>
  </HashRouter>
);

export default routes;
