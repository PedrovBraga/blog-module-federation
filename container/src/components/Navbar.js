import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    console.log('Navigating to:', path);
    navigate(path);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <button
          className="navbar-brand btn btn-link text-decoration-none text-white"
          onClick={() => handleNavigation('/')}
        >
          MyApp
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className="btn nav-link text-white"
                onClick={() => handleNavigation('/blog')}
              >
                Blog
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn nav-link text-white"
                onClick={() => handleNavigation('/auth')}
              >
                Auth
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn nav-link text-white"
                onClick={() => handleNavigation('/admin')}
              >
                Admin
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
