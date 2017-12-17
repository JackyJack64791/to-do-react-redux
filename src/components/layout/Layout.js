import React, {Component} from 'react';
import Header from './Header';

class Layout extends Component {
    render() {
       return <div>
            <Header/>
            <div className="container">
                {this.props.children}
            </div>
        </div>
    }
}


export default Layout;
