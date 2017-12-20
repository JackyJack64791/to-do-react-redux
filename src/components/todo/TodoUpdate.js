import React, {Component} from 'react';
import * as actions from '../../actions/actions';
import {connect} from 'react-redux';

class TodoUpdate extends Component {
    constructor(props) {
        super(props);
        const {id} = this.props.match.params;
        let todo = this.props.todos.find(item => item.id == id);
        this.state = {
            id: todo.id,
            title: todo.title,
            description: todo.description,
            deadline: todo.deadline,
            importance: todo.importance,
        };
        this.handleImportance = this.handleImportance.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleDeadline = this.handleDeadline.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleImportance(e) {
        this.setState({
            importance: e.target.value
        })
    }

    handleTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleDeadline(e) {
        this.setState({
            deadline: e.target.value
        })
    }

    handleDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const todo = {
            id: this.state.id,
            importance: this.state.importance,
            title: this.state.title,
            deadline: this.state.deadline,
            description: this.state.description,
            datePerform: '',
            checked: false,
        };
        this.props.todoUpdate(todo);
        if (!this.props.isError) this.props.history.push("/dashboard");
    }

    render() {
        return <form className="form-horizontal" onSubmit={this.handleSubmit}>

            <fieldset className="form-group">
                <label htmlFor="title"
                       className="col-md-4 control-label">Title</label>

                <div className="col-md-6">
                    <input id="title" type="text" className="form-control"
                           name="title" required onChange={this.handleTitle} value={this.state.title}/>

                </div>
            </fieldset>
            <fieldset className="form-group">
                <label htmlFor="deadline" className="col-md-4 control-label">Deadline</label>

                <div className="col-md-6">
                    <input id="deadline" type="datetime-local" className="form-control"
                           name="deadline" onChange={this.handleDeadline} value={this.state.deadline}/>

                </div>
            </fieldset>
            <fieldset className="importance">
                <label htmlFor="deadline" className="col-md-4 control-label">Importance</label>
                <div className="col-md-6">
                    <select id="importance" className="form-control"
                            name="importance" required onChange={this.handleImportance} value={this.state.importance}>
                        <option disabled value="0">Choose importance...</option>
                        <option value="Common">Common</option>
                        <option value="Important">Important</option>
                        <option value="Very important">Very important</option>
                    </select>

                </div>
            </fieldset>
            <fieldset className="form-group">
                <label htmlFor="description" className="col-md-4 control-label">Description</label>

                <div className="col-md-6">
                    <textarea id="description" className="form-control" name="description" required onChange={this.handleDescription} value={this.state.description}/>
                </div>
            </fieldset>
            <fieldset className="form-group">
                <div className="col-md-8 col-md-offset-4">
                    <button type="submit" className="btn btn-primary">
                        Update Todo
                    </button>
                </div>
            </fieldset>
            {this.props.isError ? <p>{this.props.error}</p> : ""}
        </form>
    }
}

function mapStateToProps(state) {
    return {
        id: state.todo.id,
        todos: state.todo.todos,
        isError: state.todo.isError,
        error: state.todo.error
    }
}


export default connect(mapStateToProps, actions)(TodoUpdate);