import React from "react";

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inpTitleValue: "",
      inpUserIdValue: "",
      validityMessage: ""
    };
  }

  handleChange(ev) {
    // console.log(ev.target.id + " " + ev.target.value);
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
          type="text"
          placeholder="todo title"
          id="inpTitle"
          value={this.state.inpTitleValue}
          onChange={event => {
            this.handleChange(event);
          }}
        />
        <input
          type="number"
          placeholder="user ID"
          id="inpUserId"
          value={this.state.inpUserIdValue}
          onChange={event => {
            this.handleChange(event);
          }}
        />
        <button
          disabled={this.state.inpUserId === '' || this.state.inpTitle === ''}
          onClick={() => this.handleClick()}
        >
          OK
        </button>
        <p>{this.state.validityMessage}</p>
      </div>
    );
  }
}