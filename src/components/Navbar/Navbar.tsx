import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/COOK-NEST.svg';

export default function Navbar(): JSX.Element {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <nav className="navbar-container" aria-label="Main navigation">
        <a title="cooke_nest_logo" href="/" className="navbar-logo">
          <img src={logo} alt="Cooke Nest Logo" />
        </a>
      {/*<h1 className="navbar-brand">
        <Link to="/" aria-label="Go to home page">CookNest</Link>
      </h1>*/}

        <div className="navbar-links">
          <Link
            to="/"
            className="navbar-button"
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>
          <Link
            to="/login"
            className="navbar-button"
            aria-current={location.pathname === '/signup' ? 'page' : undefined}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="navbar-button"
            aria-current={location.pathname === '/login' ? 'page' : undefined}
          >
            Sign-up
          </Link>
        </div>
        {/* Three Dots Menu Icon */}
        <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
          &#x22EE;
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="dropdown-menu">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="dropdown-item"
            >
              Home
            </Link>
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="dropdown-item"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="dropdown-item"
            >
              Sign-up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}