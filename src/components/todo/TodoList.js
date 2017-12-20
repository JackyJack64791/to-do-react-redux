import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TodoItem from "./TodoItem";
import * as actions from '../../actions/actions';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'All'
        };
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(e) {
        this.setState({
            filter: e.target.value
        });
    }

    todosRender() {
        return this.props.todos.map((key) => {
                if (this.state.filter == "All") {
                    return <TodoItem id={key.id} checked={key.checked} title={key.title} description={key.description}
                                     deadline={key.deadline} importance={key.importance}/>
                }
                else {
                    if (key.importance == this.state.filter) {
                        return <TodoItem id={key.id} checked={key.checked} title={key.title} description={key.description}
                                         deadline={key.deadline} importance={key.importance}/>
                    }
                }
            }
        )
    }

    render() {
        if (!this.props.todos.length) {
            return <p>You haven't any todos. You can <Link to="/create">create</Link> one</p>;
        }
        return <div>
            <div className="btn-group" role="group" aria-label="...">
                <button type="button" className="btn btn-default" onClick={this.handleFilter} value="All">All</button>
                <button type="button" className="btn btn-default" onClick={this.handleFilter} value="Common">Common
                </button>
                <button type="button" className="btn btn-default" onClick={this.handleFilter}
                        value="Important">Important
                </button>
                <button type="button" className="btn btn-default" onClick={this.handleFilter}
                        value="Very important">Very important
                </button>
            </div>
            {this.todosRender()}
            <div className="col-md-8 col-md-offset-4">
                <Link className="btn btn-primary" to='/create'>Create New Todo</Link>
            </div>

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