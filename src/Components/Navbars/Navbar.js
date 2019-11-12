import React, {Component} from 'react';
import "./Navbars.css";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="dashboard-nav">
                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-items-container">
                            <Link
                                to={'/dashboard/search_order'}
                                style={{marginLeft: "10rem", marginRight: "4rem"}}>
                                Search Order
                            </Link>
                            <Link
                                className="navbar-items"
                                to={'/dashboard/give_order'}>
                                Give Order
                            </Link>
                            <Link
                                className="navbar-items"
                                to={'/dashboard/projects'}>
                                Projects
                            </Link>
                            <Link
                                className="navbar-items"
                                to={'/dashboard/chat'}>
                                Chat
                            </Link>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Navbar;