import React from 'react';
import Sign from './sub-components/Sign';
import Arrow from './sub-components/Arrow';
import ContinueButton from './sub-components/ContinueButton';
import LighteningBolt from './svgs/lightening-bolt';

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
      if(this.state.font !== "") document.getElementById(this.state.font).className = `option--${this.state.font}`;
      this.setState({font: event.target.id});
      event.target.className = `selected--${event.target.id}`;
    }

    render() {
      console.log(this.state);
      return(
      <div id='selector-container'>
        <div className='arrowBar'>
          <div></div>
          <Arrow goForwardStep={(e) => this.props.goForwardStep(e,this.state.font,this.state.price)} goBackStep={() => {}} type={'forward'}/>
        </div>

        <Sign font={this.state.font} color={this.props.color} changeText={this.props.changeText} signText={this.props.signText}/>

        <LighteningBolt className='selector-caption'/>
        <div className='selector-caption'> Pick A Font </div>
        <section className='fontBar'>
          <div id='Miami' className='option--Miami' onClick={this.selectFont}>Miami</div>
          <div id='Dolly' className='option--Dolly' onClick={this.selectFont}>Dolly</div>
          <div id='Presley' className='option--Presley' onClick={this.selectFont}>Presley</div>
          <div id='Stevie' className='option--Stevie' onClick={this.selectFont}>Stevie</div>
          <div id='Willie' className='option--Willie' onClick={this.selectFont}>Willie</div>
          <div id='Jackson' className='option--Jackson' onClick={this.selectFont}>Jackson</div>
          <div id='Palm-Springs' className='option--Palm-Springs' onClick={this.selectFont}>Palm Springs</div>
          <div id='Beverly-Hills' className='option--Beverly-Hills' onClick={this.selectFont}>Beverly Hills</div>
          <div id='San-Francisco' className='option--San-Francisco' onClick={this.selectFont}>San Francisco</div>
          <div id='Long-Beach' className='option--Long-Beach' onClick={this.selectFont}>Long Beach</div>
          <div id='Hank' className='option--Hank' onClick={this.selectFont}>Hank</div>
          <div id='Bowie' className='option--Bowie' onClick={this.selectFont}>Bowie</div>
        </section>
        <ContinueButton goForwardStep={(e) => this.props.goForwardStep(e,this.state.font,this.state.price)} />
      </div>
      )
    }
 }

 export default StepOne;
