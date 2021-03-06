import React from 'react';
import Sign from './sub-components/Sign';
import Arrow from './sub-components/Arrow';
import ContinueButton from './sub-components/ContinueButton';

class StepSix extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event,price) {
    //find DOM node of previously selected element and set it equal to default
    this.setState({email: event.target.value});
  }

  render() {
    console.log(this.state);
    return(
    <div>
      <Sign font={this.props.font} color={this.props.color} changeText={this.props.changeText} signText={this.props.signText}/>
      <div> Step Six </div>
      <Arrow goForwardStep={() => {}} goBackStep={this.props.goBackStep} type={'back'}/>
      <Arrow goForwardStep={(e) => this.props.goForwardStep(e,this.state.style)} goBackStep={() => {}} type={'forward'}/>

      <section>
        <h1>EMAIL</h1>
        <input onChange={this.handleChange}></input>
      </section>
      <ContinueButton goForwardStep={(e) => this.props.goForwardStep(e,this.state.email)}/>
    </div>
    )
  }
}

 export default StepSix;
