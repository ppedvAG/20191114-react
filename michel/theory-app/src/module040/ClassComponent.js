import React, { Component } from 'react';

export default class ClassComponent extends Component {
    render() {
        return (
            <div>Ausgabe {this.props.content}</div>
        );
    }
}