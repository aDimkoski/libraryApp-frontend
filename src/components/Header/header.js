import React from 'react';
import {Link} from 'react-router-dom';

const header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to={"/books"}>Library App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end p-2">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active mr-2">
                                <Link className="nav-link" to={"/countries"}>Countries</Link>
                            </li>
                            <li className="nav-item active mr-2">
                                <Link className="nav-link" to={"/authors"}>Authors</Link>
                            </li>
                            <li className="nav-item active mr-2">
                                <Link className="nav-link" to={"/books"}>Books</Link>
                            </li>
                            <li className="nav-item active mr-2">
                                <Link className="nav-link" to={"/categories"}>Categories</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default header;