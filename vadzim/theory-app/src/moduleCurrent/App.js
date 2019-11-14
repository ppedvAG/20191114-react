import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meldung: ""
        }
    }
    componentDidCatch() {
        // catched Error
    }

    componentDidMount() {
        this.setState({meldung: this.state.meldung + ' component did mount'})
    }

    componentWillUnmount() {
        window.console.log('good bye');
        this.setState({meldung: this.state.meldung + ' component will unmount'});
    }

    render() {
        return(
            <div>
                <h1>Lifecycle Methods</h1>
                <p>{this.props.text}</p>
                <p>{this.state.meldung}</p>
            </div>
        )

    }
}

