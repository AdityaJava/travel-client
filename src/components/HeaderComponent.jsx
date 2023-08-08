import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/bootstrap.css'

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <ul className="navbar-nav navbar-collapse">
                            <li className="nav-link ">
                                <Link to="/"></Link>
                                <Link to="/travelPackages">TravelPackages</Link>

                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent