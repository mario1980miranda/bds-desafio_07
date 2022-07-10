import { Link, NavLink } from "react-router-dom";

import './styles.css';


const NavbarDois = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark main-nav">
    <div className="container-fluid">
        <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"></span>
            <Link className="navbar-brand" to="/"> Carros Top </Link>
            <div className="w-100 text-right">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar7">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
        <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7">
            <ul className="navbar-nav ms-auto flex-nowrap">
                <li className="nav-item">
                    <NavLink to="#" className="nav-link">Link</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="#" className="nav-link">Link</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="#" className="nav-link">Link</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="#" className="nav-link">Link</NavLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
    );
};

export default NavbarDois;