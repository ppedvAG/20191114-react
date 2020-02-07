import React from 'react';

export default class MyClassComponent extends React.Component {
    constructor(myProps) {
        super(myProps);
        this.state = {
            counter: 0
        }
    }
    count() {
        let counter = this.state.counter;
        this.setState({
            counter: counter + 1
        })
    }
    render() {
        return (
            <div>
                <p>Click the button</p>
                <button onClick={() => this.count()}>click me to count up</button>
                <p>{this.state.counter}</p>
                <p>Event-Handler werden mit Pfeilfunktionen aufgerufen</p>
            </div>
        )
    }
}