import React, {Component} from 'react';

export default class ToDoInput extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            inputTitle: "",
            
        }
    }

    handleClick()
    {

    }

    render() {
        return(
            <form>
                <input placeholder="Neuer Eintrag" value={this.state.inputTitle} onChange={event => this.setState({inputTitle : event.target.value})} />
                <input type="submit" value="Hinzufügen" onClick={() => this.handleClick} disabled={this.state.inputTitle === null || this.state.inputTitle === ""} />
            </form>
        )
    }
}