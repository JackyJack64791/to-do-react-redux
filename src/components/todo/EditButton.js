import React, {Component} from 'react';

class EditButton extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        this.props.submit();
    }
    render() {
        return (
            <button type="button" className="close glyphicon glyphicon-remove" aria-label="Close" onClick={this.handleSubmit}><span aria-hidden="true"></span></button>)
    }
}
export default (EditButton);