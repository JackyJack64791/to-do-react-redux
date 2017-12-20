import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-default navbar-static">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to='/dashboard'>To-do List</Link>
                    </div>
                </div>

            </nav>
        )
    }
}

export default Header;