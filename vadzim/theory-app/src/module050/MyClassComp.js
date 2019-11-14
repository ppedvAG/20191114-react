// import React from 'react';
import React, { Component } from 'react';

// export default class MyClassComponent extends React.Component { 
export default class MyClassComponent extends Component {

    render() {
        return (
            <div>
                <p>{this.props.text} müssen Methode render() haben</p>
                <p>{this.props.text} haben state.</p>
                <p>{this.props.text} verfügen über Lifecycle-Methoden.</p>
                <p>{this.props.text} können Konstruktor mit super(props) haben.</p>
            </div>
        )
    }
}