import React from 'react';
import Sign from './sub-components/Sign';
import Arrow from './sub-components/Arrow';
import PayPalButton from './sub-components/PayPalButton';

class StepSeven extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      style: "Hanging"
    }
    this.selectStyle = this.selectStyle.bind(this);
  }

  selectStyle(event,price) {
    //find DOM node of previously selected element and set it equal to default
    this.setState({style: event.target.id});
    event.target.className = `selected`;
  }

  render() {
    console.log(this.state);
    return(
    <div>
      <Sign font={this.props.font} color={this.props.color} changeText={this.props.changeText} signText={this.props.signText}/>
      <div> CHECKOUT </div>
      <Arrow goForwardStep={() => {}} goBackStep={this.props.goBackStep} type={'back'}/>
      <Arrow goForwardStep={(e) => this.props.goForwardStep(e,this.state.style)} goBackStep={() => {}} type={'forward'}/>

      <section>
      <PayPalButton totalPrice={this.props.totalPrice}/>
      </section>
    </div>
    )
  }
}

 export default StepSeven;
