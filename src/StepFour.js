import React from 'react';
import Sign from './sub-components/Sign';
import Arrow from './sub-components/Arrow';
import ContinueButton from './sub-components/ContinueButton';
import LighteningBolt from './svgs/lightening-bolt';


class StepFour extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      size: "Medium",
      price: 0
    }
    this.selectSize = this.selectSize.bind(this);
  }

  selectSize(event,price) {
    //find DOM node of previously selected element and set it equal to default
    let cost = price === undefined ? 0 : price;
    document.getElementById(this.state.size).className = 'sizeButton';
    this.setState({size: event.target.id, price: cost});
    event.target.className = `sizeButton selected`;
  }

  render() {
    console.log(this.state);
    return(
    <div className='selector-container'>
    <div className='arrowBar'>
      <Arrow goForwardStep={() => {}} goBackStep={(e) => this.props.goBackStep(e,this.state.price)} type='back'/>
      <Arrow goForwardStep={(e) => this.props.goForwardStep(e,this.state.color,this.state.price)} goBackStep={() => {}} type='forward'/>
    </div>

      <Sign font={this.props.font} color={this.props.color} changeText={this.props.changeText} signText={this.props.signText}/>

      <LighteningBolt className='selector-caption'/>
      <div className='selector-caption'> Pick A Size </div>


      <section className='colorBar'>
        <div  className='sizeButton' id='Extra-Small' onClick={(e)=>this.selectSize(e,30)}>XS</div>
        <div className='sizeButton' id='Small' onClick={(e)=>this.selectSize(e,40)}>S</div>
        <div className='sizeButton' id='Medium' onClick={(e)=>this.selectSize(e,50)}>M</div>
        <div className='sizeButton' id='Large' onClick={(e)=>this.selectSize(e,60)}>L</div>
        <div className='sizeButton' id='Extra-Large' onClick={(e)=>this.selectSize(e,70)}>XL</div>
      </section>

      <ContinueButton goForwardStep={(e) => this.props.goForwardStep(e,this.state.backing)}/>
    </div>
    )
  }
}

 export default StepFour;
