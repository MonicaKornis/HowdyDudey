import React from 'react';
import Sign from './sub-components/Sign';
import Arrow from './sub-components/Arrow';
import ContinueButton from './sub-components/ContinueButton';
import LighteningBolt from './svgs/lightening-bolt';

class StepTwo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      color: this.props.color,
      price: 0
    }
    this.selectColor = this.selectColor.bind(this);
  }

  selectColor(event,price) {
    //find DOM node of previously selected element and set it equal to default
    document.getElementById(this.state.color).className = 'colorCircle';
    let cost = price === undefined ? 0 : price;
    this.setState({color: event.target.id, price: cost});
    event.target.className = `colorCircle--selected`;
  }

  render() {
    console.log(this.state);
    return(
    <div className='selector-container'>

    <div className='arrowBar'>
      <Arrow goForwardStep={() => {}} goBackStep={(e) => this.props.goBackStep(e,this.state.price)} type='back'/>
      <Arrow goForwardStep={(e) => this.props.goForwardStep(e,this.state.color,this.state.price)} goBackStep={() => {}} type='forward'/>
    </div>

      <Sign font={this.props.font} color={this.state.color} changeText={this.props.changeText} signText={this.props.signText}/>

      <LighteningBolt className='selector-caption'/>
      <div className='selector-caption'> Pick A Color </div>

      <section className='colorBar'>
        <div className='colorIconWrapper'>
          <div className='colorBox'>
            <div className='colorCircle-wrapper'><div id='Cool-White' className='colorCircle' onClick={this.selectColor}></div></div>
            <div className='colorCircle-wrapper'><div id='Peach' className='colorCircle' onClick={this.selectColor}></div></div>
            <div className='colorCircle-wrapper'><div id='Baby-Blue' className='colorCircle' onClick={this.selectColor}></div></div>
            <div className='colorCircle-wrapper'><div id='Mint-Green' className='colorCircle' onClick={this.selectColor}></div></div>
            <div className='colorCircle-wrapper'><div id='Warm-White' className='colorCircle' onClick={this.selectColor}></div></div>
            <div className='colorCircle-wrapper'><div id='Pink' className='colorCircle' onClick={this.selectColor}></div></div>
            <div className='colorCircle-wrapper'><div id='Sky-Blue' className='colorCircle' onClick={this.selectColor}></div></div>
            <div className='colorCircle-wrapper'><div id='Yellow' className='colorCircle' onClick={this.selectColor}></div></div>
            <div className='colorCircle-wrapper'><div id='Hot-Pink' className='colorCircle' onClick={this.selectColor}></div></div>
            <div className='colorCircle-wrapper'><div id='Electric-Blue' className='colorCircle' onClick={this.selectColor}></div></div>
            <div className='colorCircle-wrapper'><div id='Forest-Green' className='colorCircle' onClick={this.selectColor}></div></div>
            <div className='colorCircle-wrapper'><div id='Orange' className='colorCircle' onClick={this.selectColor}></div></div>
            <div className='colorCircle-wrapper'><div id='Red' className='colorCircle' onClick={this.selectColor}></div></div>
            <div className='colorCircle-wrapper'><div id='Lilac' className='colorCircle' onClick={this.selectColor}></div></div>
            <div className='colorCircle-wrapper'><div id='Purple' className='colorCircle' onClick={this.selectColor}></div></div>
            <div className='colorCircle-wrapper'><div id='Custom' className='colorCircle' onClick={(e) => this.selectColor(e,20)}></div></div>
          </div>
        </div>
      </section>
      <ContinueButton goForwardStep={(e) => this.props.goForwardStep(e,this.state.color, this.state.price)}/>
    </div>
    )
  }
}

 export default StepTwo;
