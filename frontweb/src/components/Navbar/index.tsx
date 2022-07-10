import "./styles.css";
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>Carros Top</h4>
        </Link>
        <button
          className="navbar-toggler custom-toggler text-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carrostop-navbar"
          aria-controls="carrostop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse flex-grow-1 text-right" id="carrostop-navbar">
          <ul className="navbar-nav offset-md-2 ms-auto flex-nowrap main-menu">
            <li className="nav-item">
              <NavLink to="/" activeClassName="active" exact>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">CATÁLOGO</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
