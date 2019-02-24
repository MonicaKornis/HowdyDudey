
import React from 'react';
import Sign from './sub-components/Sign';
import Arrow from './sub-components/Arrow';
import ContinueButton from './sub-components/ContinueButton';
import LighteningBolt from './svgs/lightening-bolt';

class StepThree extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      backing: 'NoDisplay',
    }
    this.selectBacking = this.selectBacking.bind(this);
  }

  selectBacking(event) {
    //find DOM node of previously selected element and set it equal to default
    document.getElementById(this.state.backing).className = 'backingStyle';
    this.setState({backing: event.target.id});
    event.target.className = `backingStyle selected`;
  }

  render() {
    console.log(this.state);
    return(
    <div className='selector-container'>
      <div className='arrowBar'>
        <Arrow goForwardStep={() => {}} goBackStep={(e) => this.props.goBackStep(e,this.state.price)} type='back'/>
        <Arrow goForwardStep={(e) => this.props.goForwardStep(e,this.state.color,this.state.price)} goBackStep={() => {}} type='forward'/>
      </div>

        <Sign backing={this.state.backing} font={this.props.font} color={this.props.color} changeText={this.props.changeText} signText={this.props.signText}/>

        <LighteningBolt className='selector-caption'/>
        <div className='selector-caption'> Pick A Display Backing </div>

        <section className='colorBar'>

          <div id='NoDisplay' className='backingStyle' onClick={this.selectBacking}>No Display</div>
          <div id='Outlined' className='backingStyle' onClick={this.selectBacking}>Outlined</div>
          <div id='Square' className='backingStyle' onClick={this.selectBacking}>Square</div>

        </section>
      <ContinueButton goForwardStep={(e) => this.props.goForwardStep(e,this.state.backing)}/>
    </div>
    )
  }
}

 export default StepThree;
