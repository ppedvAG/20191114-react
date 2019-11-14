import React, { Component } from 'react';

export default class ClassStateComponent extends Component {
    constructor(myProps)
    {
        super(myProps);
        this.state = {
            counter : 0
        }
    }
    
    count() {
        let counter = this.state.counter;
        this.setState({
            counter: counter+1
        });
    }

    render() {
        return (
            <div>
                <p>Click the button</p>
                <button onClick={() => this.count()}>Click me to count</button>
                <p>{this.state.counter}</p>
                <p>Event-Handler werden mit Pfeil-Funktionen aufgerufen.</p>
            </div>
        );
    }
}