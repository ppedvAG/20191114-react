import React, {Component} from 'react';

class AddTodo extends Component {
  constructor(props){
    super(props);
    this.state={
        inputTitleValue:""      ,
        inputUserIdValue:"",
        validityMessage: ""  
    }    
  }

  handleChange(event){
       if(event.target.id==="inputTitle"){
            this.setState({inputTitleValue: event.target.value});
      }
      if(event.target.id==="inputUserId"){
        this.setState({inputUserIdValue: event.target.value});
  } 
 }

  render()
  {
  return (
    <div>
       <input type="text" placeholder="todo title" value={this.state.inputTitleValue} onChange={event=>{this.handleChange(event)}} id="inputTitle"/>
       <input type="text" placeholder="userId" value={this.state.inputUserIdValue} onChange={event=>{this.handleChange(event)}} id="inputUserId"/>
        <button id="start" onClick={()=>this.props.myOnClick(this.state.inputTitleValue,this.state.inputUserIdValue)} disabled={this.state.inputUserIdValue === "" || this.state.inputTitleValue===""}>Start</button>
        <p>{this.state.validityMessage}</p></div>
  );
}}
 
export default AddTodo;
