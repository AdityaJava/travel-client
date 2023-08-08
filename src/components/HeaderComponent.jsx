import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/bootstrap.css'

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <ul className="navbar-nav ">
                            <li className="nav-link ">
                                <Link to="/" className="nav-link"></Link>
                                <Link to="/travelPackages" className="nav-link">TravelPackages</Link>
                                <Link to="/packageSearch" className="nav-link">PackageSearch</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent