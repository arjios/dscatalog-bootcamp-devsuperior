import React from 'react';

import './style.scss';

const Navbar = () => {
    return (
        <nav className="row bg-primary main-nav">
            <div className="col-2">
                <a href="Home" className="nav-logo-text">
                   <h4>DSCatalog</h4>
                </a>
            </div>
            <div className="col-6 offset-2">
                <ul className="main-menu">
                    <li>
                        <a href="Home" className="active">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="Home">
                            Catalogo
                        </a>
                    </li>
                    <li>
                        <a href="Home">
                            Admin
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;