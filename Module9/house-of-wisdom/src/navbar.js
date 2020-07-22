import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
        <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="/home">House of Wisdom
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mr-auto">
                    {/* <li className="nav-item">
                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown">
                                Find Articles
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">All Categories</a>
                                <a className="dropdown-item" href="#">Ethics</a>
                                <a className="dropdown-item" href="#">Morality</a>
                                <a className="dropdown-item" href="#">Logic</a>
                                <a className="dropdown-item" href="#">Economic Theory</a>
                                <a className="dropdown-item" href="#">Epistomology</a>
                                <a className="dropdown-item" href="#">Metaphysics</a>
                            </div>
                        </div>

                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" href="/find-articles">
                            Find Articles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about-us">About Us</a>
                    </li> 
                </ul>
            </div>
        </nav>
        </header>

        )
    }
}

export default NavBar;
