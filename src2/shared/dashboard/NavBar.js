import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { getToken, removeUserSession } from '../../utils/common';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const token = getToken()
  console.log(token);

  const handleLogout = () => {
    removeUserSession();
    navigate("/signin");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "rgba(244, 247, 250)" }}>
        <div className="container">
          <Link className="navbar-brand" to="/dashboard">
            <h3>
              Tora<span className=' text-warning'>Tax</span>
            </h3>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-3 ms-auto mb-2 mb-lg-0">

            
              {token &&
              <>
              <li className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                <NavLink className="nav-link fw-semibold text-decoration-none text-dark" to="/dashboard">Dashboard</NavLink>
              </li>
              <li className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}>
                <NavLink className="nav-link fw-semibold text-decoration-none text-dark" to="/profile">Profile</NavLink>
              </li>
              <li className={`nav-item ${location.pathname === '/logout' ? 'active' : ''}`} onClick={handleLogout}>
                <NavLink className="nav-link fw-semibold text-decoration-none text-dark" >Logout</NavLink>
              </li>
              </>
              
              }
              
              {!token && <>
                <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <NavLink className="nav-link fw-semibold text-decoration-none text-dark" to="/">Home</NavLink>
                </li>
                <li className={`nav-item ${location.pathname === '/contact-us' ? 'active' : ''}`}>
                <NavLink className="nav-link fw-semibold text-decoration-none text-dark" to="/contact-us">Contact</NavLink>
              </li>
              <li className={`nav-item ${location.pathname === '/about-us' ? 'active' : ''}`}>
                <NavLink className="nav-link fw-semibold text-decoration-none text-dark" to="/about-us">About</NavLink>
              </li>
              
                <li className={`nav-item ${location.pathname === '/signin' ? 'active' : ''}`}>
                <NavLink className="nav-link fw-semibold text-decoration-none text-dark" to="/signin">Sign In</NavLink>
              </li>
              <li className={`nav-item ${location.pathname === '/signup' ? 'active' : ''}`}>
                <NavLink className="nav-link fw-semibold text-decoration-none text-dark" to="/signup">Sign Up</NavLink>
              </li>
              </>}
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
