import React from "react";
import DateTime from "./DateTime";

export default class Greeter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        uhr: <DateTime />
    }
} 
unmountUhr() {  
  this.setState({
    uhr: <p>hier war die Uhr</p>
  })  
}
render() {
  return (
    <div>
      <h1>Hallo, {this.props.name}!</h1>
      <div>Heute ist {this.state.uhr}</div>
      <button onClick={() => this.unmountUhr()}>Versteck die Uhr</button>   
    </div>
  );
}
}

