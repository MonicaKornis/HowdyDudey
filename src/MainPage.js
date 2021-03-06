import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive  from './StepFive';
import StepSix from './StepSix';
import StepSeven from './StepSeven';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      signText: "Howdy Dudey",
      1 :"Miami",
      2: "Cool-White",
      3: 'Outlined',
      4: 'Medium',
      5: 'Hanging',
      6: 'test@test.com',
      totalPrice: 10,
    }
    this.goForwardStep = this.goForwardStep.bind(this);
    this.changeText = this.changeText.bind(this);
    this.goBackStep = this.goBackStep.bind(this);

  }

  goBackStep(e,stepPrice) {

    if(this.state.step > 1){
      let step = this.state.step;
      step = this.state.step - 1;
      this.props.history.push(`${step}`);

      this.setState(prevState => {
        debugger
        stepPrice = stepPrice === undefined ? 0 : stepPrice;
        let totalPrice = prevState.totalPrice - stepPrice;

        return (
          { totalPrice: totalPrice, step: step}
        )
      });
    }
  }

  goForwardStep(e,selection,cost) {
    // event.stopPropagation();

    let newStepNum = this.state.step;
    this.props.history.push(`${this.state.step+1}`)
    this.setState( prevState => {
      let number = prevState.step;
      cost = cost === undefined ? 0 : cost;
      let newPrice = prevState.totalPrice + cost;

      return (
        {step: number+1, [number]: selection, totalPrice: newPrice}
      )
    })
  }

  changeText(e){
    this.setState({signText: e.target.value});
  }

  render() {
    console.log(this.state);
    const steps = {
      1: StepOne,
      2: StepTwo,
      3: StepThree,
      4: StepFour,
      5: StepFive,
      6: StepSix,
      7: StepSeven,
    }

    const Component = steps[this.state.step];

    return (
      <div className="App">
        <header className="App-header">
            <Component text={this.state.text} step={this.state.step} changeText={this.changeText}
              goForwardStep={this.goForwardStep} color={this.state[2]} font={this.state[1]} goBackStep={this.goBackStep} signText={this.state.signText} totalPrice={this.state.totalPrice}/>
        </header>
      </div>

    );
  }
}

export default MainPage;
