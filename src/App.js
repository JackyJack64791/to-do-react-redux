import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Store from './bootstrap';
import Routes from './routes';
require ('./bootstrap');
class App extends Component {
  render() {
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <div>
                    <Routes/>
                </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
