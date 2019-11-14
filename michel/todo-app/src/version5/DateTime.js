import React, { Component } from 'react';

export default class DateTime extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            date: new Date()
        };
        setInterval(() => this.tick(), 1000);
    }
    
    tick()
    {
        this.setState({date : new Date()});
    }

    render() {
        return (
            this.state.date.toLocaleString()
        );
    }
}