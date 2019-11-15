import React, {Component} from 'react';

class DateTime extends Component {
  constructor(props){
    super(props);
    this.state={
        time: new Date().toTimeString(),
        intV: ""
    }
    
  }

  componentDidMount(){
    this.setState({intV:setInterval(()=> this.calcNewTime() , 1000)});
  }

  componentWillUnmount(){
    console.log(this.intV)
    this.setState({intV:""});
    console.log(this.intV)
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
