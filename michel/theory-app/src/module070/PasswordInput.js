import React, { Component } from 'react';

export default class PasswordInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input1: "",
            input2: ""
        };
    }

    setInput1(value)
    {
        this.setState({ input1: value});
    }

    setInput2(value)
    {
        this.setState({ input2: value});
    }

    render() {
        return(<form>
            <input placeholder="Passwort eingeben" value={this.state.input1} onChange={ev => this.setInput1(ev.target.value)} />
            <br/>
            <input placeholder="Passwort wiederholen" value={this.state.input2} onChange={ev => this.setInput2(ev.target.value)} />
            <br/>
            <button disabled={!this.isValid()} >Absenden</button>
        </form>);
    }

    isValid() {
       return this.state.input1.length > 3
                && this.state.input1 === this.state.input2; 
    }
}