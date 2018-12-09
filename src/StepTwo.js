import React from 'react';
import Sign from './sub-components/Sign';
import Arrow from './sub-components/Arrow';
import ContinueButton from './sub-components/ContinueButton';

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
    <div>
      <Sign font={this.props.font} color={this.state.color} changeText={this.props.changeText} signText={this.props.signText}/>
      <div> Step One </div>
      <Arrow goForwardStep={() => {}} goBackStep={(e) => this.props.goBackStep(e,this.state.price)} type={'back'}/>
      <Arrow goForwardStep={(e) => this.props.goForwardStep(e,this.state.color,this.state.price)} goBackStep={() => {}} type={'forward'}/>

      <section>
        <div id='Cool-White' onClick={this.selectColor}>Cool White</div>
        <div id='Peach' onClick={this.selectColor}>Peach</div>
        <div id='Baby-Blue' onClick={this.selectColor}>Baby Blue</div>
        <div id='Mint-Green' onClick={this.selectColor}>Mint Green</div>
        <div id='Warm-White' onClick={this.selectColor}>Warm White</div>
        <div id='Pink' onClick={this.selectColor}>Pink</div>
        <div id='Sky-Blue' onClick={this.selectColor}>Sky Blue</div>
        <div id='Yellow' onClick={this.selectColor}>Yellow</div>
        <div id='Hot-Pink' onClick={this.selectColor}>Hot Pink</div>
        <div id='Electric-Blue' onClick={this.selectColor}>Electric Blue</div>
        <div id='Forest-Green' onClick={this.selectColor}>Forest Green</div>
        <div id='Orange' onClick={this.selectColor}>Orange</div>
        <div id='Red' onClick={this.selectColor}>Red</div>
        <div id='Lilac' onClick={this.selectColor}>Lilac</div>
        <div id='Purple' onClick={this.selectColor}>Purple</div>
        <div id='Custom' onClick={(e) => this.selectColor(e,20)}>Custom</div>
      </section>
      <ContinueButton goForwardStep={(e) => this.props.goForwardStep(e,this.state.color, this.state.price)}/>
    </div>
    )
  }
}

 export default StepTwo;
