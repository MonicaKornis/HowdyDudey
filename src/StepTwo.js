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
    document.getElementById(this.state.color).className = '';
    let cost = price === undefined ? 0 : price;
    this.setState({color: event.target.id, price: cost});
    event.target.className = `selected`;
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
            <div id='Cool-White' className='colorCircle' onClick={this.selectColor}>Cool White</div>
            <div id='Peach' className='colorCircle' onClick={this.selectColor}>Peach</div>
            <div id='Baby-Blue' className='colorCircle' onClick={this.selectColor}>Baby Blue</div>
            <div id='Mint-Green' className='colorCircle' onClick={this.selectColor}>Mint Green</div>
            <div id='Warm-White' className='colorCircle' onClick={this.selectColor}>Warm White</div>
            <div id='Pink' className='colorCircle' onClick={this.selectColor}>Pink</div>
            <div id='Sky-Blue' className='colorCircle' onClick={this.selectColor}>Sky Blue</div>
            <div id='Yellow' className='colorCircle' onClick={this.selectColor}>Yellow</div>
            <div id='Hot-Pink' className='colorCircle' onClick={this.selectColor}>Hot Pink</div>
            <div id='Electric-Blue' className='colorCircle' onClick={this.selectColor}>Electric Blue</div>
            <div id='Forest-Green' className='colorCircle' onClick={this.selectColor}>Forest Green</div>
            <div id='Orange' className='colorCircle' onClick={this.selectColor}>Orange</div>
            <div id='Red' className='colorCircle' onClick={this.selectColor}>Red</div>
            <div id='Lilac' className='colorCircle' onClick={this.selectColor}>Lilac</div>
            <div id='Purple' className='colorCircle' onClick={this.selectColor}>Purple</div>
            <div id='Custom' className='colorCircle' onClick={(e) => this.selectColor(e,20)}>Custom</div>
          </div>
        </div>
      </section>
      <ContinueButton goForwardStep={(e) => this.props.goForwardStep(e,this.state.color, this.state.price)}/>
    </div>
    )
  }
}

 export default StepTwo;
