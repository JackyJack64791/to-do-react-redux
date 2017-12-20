import React, {Component} from 'react';
import * as actions from '../actions/actions';
import {connect} from 'react-redux';
import TodoList from "./todo/TodoList";

class Dashboard extends Component {
    render() {
        return <TodoList/>
    }
}

export default connect(null,actions)(Dashboard);