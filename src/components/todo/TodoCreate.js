import React, {Component} from 'react';
import * as actions from '../../actions/actions';
import {connect} from 'react-redux';

class TodoCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', description: '', deadline: '', importance: ''};
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
            id: this.props.id,
            importance: this.state.importance,
            title: this.state.title,
            deadline: this.state.deadline,
            description: this.state.description,
            datePerform: '',
            checked: false,
        };
        actions.todoCreate(todo);
        if (!this.props.isError) this.props.history.push("/dashboard");
    }

    render() {
        return <form className="form-horizontal" onSubmit={this.handleSubmit}>

            <fieldset className="form-group">
                <label htmlFor="title"
                       className="col-md-4 control-label">Title</label>

                <div className="col-md-6">
                    <input id="title" type="text" className="form-control"
                           name="title" required onChange={this.handleTitle}/>

                </div>
            </fieldset>
            <fieldset className="form-group">
                <label htmlFor="deadline" className="col-md-4 control-label">Deadline</label>

                <div className="col-md-6">
                    <input id="deadline" type="datetime-local" className="form-control"
                           name="deadline" onChange={this.handleDeadline}/>

                </div>
            </fieldset>
            <fieldset className="importance">
                <label htmlFor="deadline" className="col-md-4 control-label">Importance</label>
                <div className="col-md-6">
                    <select id="importance" className="form-control"
                            name="importance" required onChange={this.handleImportance}>
                        <option value="1">Common</option>
                        <option value="2">Important</option>
                        <option value="3">Very important</option>
                    </select>

                </div>
            </fieldset>
            <fieldset className="form-group">
                <label htmlFor="description" className="col-md-4 control-label">Description</label>

                <div className="col-md-6">
                    <textarea id="description" className="form-control" name="description" required onChange={this.handleDescription}/>
                </div>
            </fieldset>
            <fieldset className="form-group">
                <div className="col-md-8 col-md-offset-4">
                    <button type="submit" className="btn btn-primary">
                        Create Todo
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
        isError: state.todo.isError,
        error: state.todo.error
    }
}


export default connect(mapStateToProps, actions)(TodoCreate);