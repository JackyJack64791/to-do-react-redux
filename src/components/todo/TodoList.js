import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TodoItem from "./TodoItem";
import * as actions from '../../actions/actions';

class TodoList extends Component {
    componentDidMount() {
        if(!this.props.todos.length && !this.props.todos.isLoading) actions.todoGet();
    }
    todosRender() {
        return this.props.todos.map((key) =>
            <TodoItem id={key.id} title={key.title} description={key.description}/>
        )
    }

    render() {
        let todos;
        if (this.props.todos.length && !this.props.isLoading){
            todos = this.props.todos;
            console.log(todos);
        }
        else {
            if (!this.props.isLoading)
                return <p>You haven't any todos. You can <Link to="/create">create</Link> one
                </p>;
            else return <p>Loading...</p>
        }
        console.log(todos);
        return todos && <div>
            {this.todosRender()}
            <Link className="btn btn-primary" to='/create'>Create New Todo</Link>
        </div>
    }
}
function mapStateToProps(state) {
    return {
        todos: state.todo.todos,
        isLoading: state.todo.isLoading
    }
}
export default withRouter(connect(mapStateToProps, actions)(TodoList));