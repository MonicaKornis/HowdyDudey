import React from 'react';
import Sign from './sub-components/Sign';
import Arrow from './sub-components/Arrow';
import ContinueButton from './sub-components/ContinueButton';


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
    document.getElementById(this.state.size).className = '';
    this.setState({size: event.target.id, price: cost});
    event.target.className = `selected`;
  }

  render() {
    console.log(this.state);
    return(
    <div>
      <Sign font={this.props.font} color={this.props.color} changeText={this.props.changeText} signText={this.props.signText}/>
      <div> Step FOUR </div>
      <Arrow goForwardStep={() => {}} goBackStep={(e) => this.props.goBackStep(e,this.state.price)} type={'back'}/>
      <Arrow goForwardStep={(e) => this.props.goForwardStep(e,this.state.size)} goBackStep={() => {}} type={'forward'}/>

      <section>
        <div id='Extra-Small' onClick={(e)=>this.selectSize(e,30)}>Extra Small</div>
        <div id='Small' onClick={(e)=>this.selectSize(e,40)}>Small</div>
        <div id='Medium' onClick={(e)=>this.selectSize(e,50)}>Medium</div>
        <div id='Large' onClick={(e)=>this.selectSize(e,60)}>Large</div>
        <div id='Extra-Large' onClick={(e)=>this.selectSize(e,70)}>Extra-Large</div>

      </section>
      <ContinueButton goForwardStep={(e) => this.props.goForwardStep(e,this.state.size,this.state.price)}/>
    </div>
    )
  }
}

 export default StepFour;
