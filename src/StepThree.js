import React from 'react';
import Sign from './sub-components/Sign';
import Arrow from './sub-components/Arrow';
import ContinueButton from './sub-components/ContinueButton';

class StepThree extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      backing: 'Outlined',
    }
    this.selectBacking = this.selectBacking.bind(this);
  }

  selectBacking(event) {
    //find DOM node of previously selected element and set it equal to default
    document.getElementById(this.state.backing).className = '';
    this.setState({backing: event.target.id});
    event.target.className = `selected`;
  }

  render() {
    console.log(this.state);
    return(
    <div>
      <Sign font={this.props.font} color={this.state.color} changeText={this.props.changeText} signText={this.props.signText}/>
      <div> Step Three </div>
      <Arrow goForwardStep={() => {}} goBackStep={this.props.goBackStep} type={'back'}/>
      <Arrow goForwardStep={(e) => this.props.goForwardStep(e,this.state.backing)} goBackStep={() => {}} type={'forward'}/>

      <section>
        <div id='Outlined' onClick={this.selectBacking}>Outlined</div>
        <div id='Square' onClick={this.selectBacking}>Square</div>

      </section>
      <ContinueButton goForwardStep={(e) => this.props.goForwardStep(e,this.state.backing)}/>
    </div>
    )
  }
}

 export default StepThree;
