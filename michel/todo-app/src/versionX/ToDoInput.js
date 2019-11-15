import React, {Component} from 'react';

export default class ToDoInput extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            inputTitle: "",
            inputRating: 0
        }
    }

    render() {
        return(
            <div >
                <input placeholder="Neuer Eintrag" value={this.state.inputTitle} onChange={event => this.setState({inputTitle : event.target.value})} />
                <input type="number" value={this.state.inputRating} onChange={event => this.setState({inputRating: event.target.value})} />
                <input type="submit" value="Hinzufügen" onClick={() => this.props.onClick(this.state.inputTitle, this.state.inputRating)} disabled={this.state.inputTitle === null || this.state.inputTitle === ""} />
            </div>
        )
    }
}