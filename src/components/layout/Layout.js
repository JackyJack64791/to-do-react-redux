import React, {Component} from 'react';
import Header from './Header';
import * as actions from '../../actions/actions';
import {connect} from 'react-redux';

class Layout extends Component {
    componentDidMount() {
        if(!this.props.getSuccess && !this.props.isLoading) this.props.todoGet();
    }
    render() {
        let todos;
        if (this.props.getSuccess && !this.props.isLoading){
            todos = this.props.todos;
        }
        else return <p>Loading...</p>;
        return todos && <div>
            <Header/>
            <div className="container">
                {this.props.children}
            </div>
        </div>
    }
}
function mapStateToProps(state) {
    return {
        id: state.todo.id,
        todos: state.todo.todos,
        getSuccess: state.todo.getSuccess
    }
}

export default connect(mapStateToProps,actions)(Layout);
