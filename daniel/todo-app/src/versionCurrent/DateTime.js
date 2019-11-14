import React, {Component} from 'react';

class DateTime extends Component {
  constructor(props){
    super(props);
    this.state={
        time: new Date().toTimeString()
    }
    setInterval(()=> this.calcNewTime() , 1000);
  }

 calcNewTime(){
   this.setState({time: new Date().toTimeString()})
 }

  render()
  {
  return (
    <div>{new Date().toLocaleDateString()}{this.state.time}</div>
  );
}}
 
export default DateTime;
