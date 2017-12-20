import React from 'react';
import Layout from './components/layout/Layout';
import Dashboard from "./components/Dashboard";
import {Route} from "react-router-dom";
import TodoCreate from "./components/todo/TodoCreate";
import TodoUpdate from "./components/todo/TodoUpdate";

const Routes = () => {
    return (
        <Layout>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path="/create" component={TodoCreate}/>
            <Route path="/update" component={TodoUpdate}/>
        </Layout>
    )
};

export default Routes;