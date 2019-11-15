import { Component } from 'react';

export default class DateTime extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            date: new Date()
        };
        
    }
    
    componentDidMount() {
        let id = setInterval(() => this.tick(), 1000);
        this.setState({intervalid: id});
    }

    componentWillUnmount()
    {
        console.log("Unmounting " + this.state.intervalid);      
        window.clearInterval(this.state.intervalid);
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