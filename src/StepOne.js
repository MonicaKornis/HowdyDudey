import React from 'react';
import Sign from './sub-components/Sign';
import Arrow from './sub-components/Arrow';
import ContinueButton from './sub-components/ContinueButton';

  class StepOne extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        font: "Miami",
        price: 0
      }
      this.selectFont = this.selectFont.bind(this);
    }

    selectFont(event) {
      //find DOM node of previously selected element and set it equal to default
      if(this.state.font !== "") document.getElementById(this.state.font).className = '';
      this.setState({font: event.target.id});
      event.target.className = `selected`;
    }

    render() {
      console.log(this.state);
      return(
      <div>
        <Sign font={this.state.font} color={this.props.color} changeText={this.props.changeText} signText={this.props.signText}/>
        <div> Step One </div>
        <Arrow goForwardStep={(e) => this.props.goForwardStep(e,this.state.font,this.state.price)} goBackStep={() => {}} type={'forward'}/>

        <section>
          <div id='Miami' onClick={this.selectFont}>Miami</div>
          <div id='Dolly' onClick={this.selectFont}>Dolly</div>
          <div id='Presley' onClick={this.selectFont}>Presley</div>
          <div id='Jane' onClick={this.selectFont}>Jane</div>
          <div id='Stevie' onClick={this.selectFont}>Stevie</div>
          <div id='Willie' onClick={this.selectFont}>Willie</div>
          <div id='Jackson' onClick={this.selectFont}>Jackson</div>
          <div id='Palm-Springs' onClick={this.selectFont}>Palm Springs</div>
          <div id='Beverly-Hills' onClick={this.selectFont}>Beverly Hills</div>
          <div id='San-Francisco' onClick={this.selectFont}>San Francisco</div>
          <div id='Long-Beach' onClick={this.selectFont}>Long Beach</div>
          <div id='Hank' onClick={this.selectFont}>Hank</div>
          <div id='Bowie' onClick={this.selectFont}>Bowie</div>
        </section>
        <ContinueButton goForwardStep={(e) => this.props.goForwardStep(e,this.state.font,this.state.price)} />
      </div>
      )
    }
 }

 export default StepOne;
