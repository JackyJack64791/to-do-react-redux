import React, {Component} from 'react';
import * as actions from '../../actions/actions';
import {connect} from 'react-redux';
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    deleteTodo(){
        actions.todoDelete(this.props.id)
    }
    render() {
        return <li className="list-group-item">
            <DeleteButton submit={this.deleteTodo}/>
            <EditButton link={this.props.inkEditl}/>
            <input type="checkbox" onChange={actions.todoCheck(this.props.id)}/>
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
        </li>;
    }

}

export default connect(null,actions)(TodoItem);