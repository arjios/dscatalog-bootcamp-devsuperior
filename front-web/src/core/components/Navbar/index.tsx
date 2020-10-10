import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import './style.scss';

const Navbar = () => {
    return (
        <nav className="row bg-primary main-nav">
            <div className="col-2">
                <Link to = "/" className="nav-logo-text">
                   <h4>DSCatalog</h4>
                </Link>
            </div>
            <div className="col-6 offset-2">
                <ul className="main-menu">
                    <li>
                        <NavLink to ="/home" activeClassName="active" exact>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ="/catalog" activeClassName="active">
                            Catalogo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ="admin" activeClassName="active">
                            Admin
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;