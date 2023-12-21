import React from "react";
import './Nav.scss';
import {
    Link,
    NavLink,
} from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/todo" activeClassName="active">To do</NavLink>
                <NavLink to="/about" activeClassName="active">Home</NavLink>
            </div>
        )
    }
}

export default Nav;
