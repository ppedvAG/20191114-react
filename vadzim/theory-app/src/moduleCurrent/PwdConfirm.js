import React from "react";

export default class PwdConfirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inp1Value: "",
      inp2Value: "",
      cnfrmMessage: ""
    };
  }

  handleChange(ev) {
    console.log(ev.target.id + " " + ev.target.value);
    if (ev.target.id === "inp1") {
      this.setState({ inp1Value: ev.target.value });
    } else {
      this.setState({ inp2Value: ev.target.value });
    }
  }
  // handleClick(ev) {
      // event object geht nicht automatisch rüber
    handleClick() {
      //console.log("button clicked " + ev.target)
    this.setState({
      cnfrmMessage: "Eingaben stimmen überein"
    });
  }

  render() {
    return (
      <div>
        <input
          type="password"
          placeholder="Ihr Password"
          id="inp1"
          value={this.state.inp1Value}
          onChange={event => {
            this.handleChange(event);
          }}
        />
        <input
          type="password"
          placeholder="Bestätigen Sie Ihr Password"
          id="inp2"
          value={this.state.inp2Value}
          onChange={event => {
            this.handleChange(event);
          }}
        />
        <button
          disabled={this.state.inp1Value !== this.state.inp2Value || this.state.inp1Value === ''}
          onClick={() => this.handleClick()}
        >
          OK
        </button>
        <p>{this.state.cnfrmMessage}</p>
      </div>
    );
  }
}