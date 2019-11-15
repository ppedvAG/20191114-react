import React from "react";

export default class DateTime extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      timerID: 0
    };
  }
  componentDidMount() {
    this.setState({
      timerID: window.setInterval(() => this.tick(), 1000)
    })
  }
  
  tick() {    
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timerID);
    window.console.log("DateTime gone");
  }

  render() {  
    return (
      <div>
        <p>{this.state.date.toLocaleDateString()}</p>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

// window.setInterval(() => DateTime.tick(), 1000);
