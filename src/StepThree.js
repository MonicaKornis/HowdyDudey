import React from 'react';
import Sign from './sub-components/Sign';
import Arrow from './sub-components/Arrow';
import ContinueButton from './sub-components/ContinueButton';

class StepThree extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      size: "Medium"
    }
    this.selectSize = this.selectSize.bind(this);
  }

  selectSize(event) {
    //find DOM node of previously selected element and set it equal to default
    document.getElementById(this.state.size).className = '';
    this.setState({size: event.target.id});
    event.target.className = `selected`;
  }

  render() {
    console.log(this.state);
    return(
    <div>
      <Sign font={this.props.font} color={this.state.color} changeText={this.props.changeText} signText={this.props.signText}/>
      <div> Step One </div>
      <Arrow goForwardStep={() => {}} goBackStep={this.props.goBackStep} type={'back'}/>
      <Arrow goForwardStep={(e) => this.props.goForwardStep(e,this.state.size)} goBackStep={this.props.goBackStep} type={'forward'}/>

      <section>
        <div id='Medium' onClick={this.selectColor}>Medium</div>
        <div id='Large' onClick={this.selectColor}>Large</div>

      </section>
      <ContinueButton goForwardStep={(e) => this.props.goForwardStep(e,this.state.color)}/>
    </div>
    )
  }
}

 export default StepThree;
