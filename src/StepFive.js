import React from 'react';
import Sign from './sub-components/Sign';
import Arrow from './sub-components/Arrow';
import ContinueButton from './sub-components/ContinueButton';

class StepFive extends React.Component {
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
      <Sign font={this.props.font} color={this.state.color} changeText={this.props.changeText} signText={this.props.signText}/>
      <div> Step Five </div>
      <Arrow goForwardStep={() => {}} goBackStep={this.props.goBackStep} type={'back'}/>
      <Arrow goForwardStep={(e) => this.props.goForwardStep(e,this.state.style)} goBackStep={() => {}} type={'forward'}/>

      <section>
        <div id='Hanging' onClick={(e)=>this.selectStyle(e)}>Hanging</div>
        <div id='Attached-To-Wall' onClick={(e)=>this.selectStyle(e)}>Attached To Wall</div>
      </section>
      <ContinueButton goForwardStep={(e) => this.props.goForwardStep(e,this.state.style)}/>
    </div>
    )
  }
}

 export default StepFive;
