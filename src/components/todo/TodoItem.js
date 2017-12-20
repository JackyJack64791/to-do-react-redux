import React, {Component} from 'react';
import * as actions from '../../actions/actions';
import {connect} from 'react-redux';
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.todoCheck = this.todoCheck.bind(this);
    }
    deleteTodo(){
        this.props.todoDelete(this.props.id)
    }
    todoCheck() {
        this.props.todoCheck(this.props.id);
    }
    checkDate() {
        if(this.props.checked) return false;
        return new Date(this.props.deadline) <= new Date();
    }
    render() {
        return <li className={`list-group-item ${this.props.checked ? "checked" : ""} ${this.checkDate() ? "timeout" : ""}`}>
            <DeleteButton submit={this.deleteTodo}/>
            <EditButton link={`/update/${this.props.id}`}/>
            <input type="checkbox" checked={this.props.checked} onChange={this.todoCheck}/>
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
            <p>Importance: {this.props.importance}</p>
            {this.props.deadline ? <p>Deadline: {new Date(this.props.deadline).toLocaleString()}</p> : ""}
            <p>{this.props.id}</p>
        </li>;
    }
}

export default connect(null,actions)(TodoItem);