import React, {Component} from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
        pwd1Value:"",
        pwd2Value:"",
        disabled: true
    }    
  }

  handleChange(event){
      if(event.target.id==="pwd1"){
            this.setState({pwd1Value: event.target.value});
      }
      if(event.target.id==="pwd2"){
        this.setState({pwd2Value: event.target.value});
  }
 }

  render()
  {
  return (
    <div>
       <input type="text" value={this.state.pwd1Value} onChange={event=>{this.handleChange(event)}} id="pwd1"/>
       <input type="text" value={this.state.pwd2Value} onChange={event=>{this.handleChange(event)}} id="pwd2"/>
        <button id="start" disabled={this.state.pwd1Value !== this.state.pwd2Value || this.state.pwd1Value===""}>Start</button></div>
  );
}}
 
export default Login;
