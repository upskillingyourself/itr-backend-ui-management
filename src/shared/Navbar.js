import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import NavBar from './dashboard/NavBar';
import { getToken, removeUserSession } from '../utils/common';

const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate()
  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(!click)
  const [isToken, setToken] = useState(false)

  useEffect(() => {
    const token = getToken()

    { token ? setToken(true) : setToken(false) }


  })
  const handleLogout = () => {
    removeUserSession();
    navigate("/signin");
  };
  const handleSignIn = () => {
    navigate('/signin')
  }
  const handleSignUp = () => {
    navigate('/signup')
  }

  return (
    <div className='header sticky-top ' style={{ backgroundColor: "#4384f9" }}>

      <nav class="navbar navbar-expand-lg navbar-light  " style={{ backgroundColor: "	#4384f9" }}>
        <div class="container gap-5">
          <div to='#' class=" border-0 navbar-brand fw-bold text-decoration-none text-white"
          >
            <h3 className='text-white'>
              Tora<span className=' text-warning'>Tax</span>
            </h3>

          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className={click ? "  navbar-nav gap-3 me-auto mb-2 mb-lg-0" : " navbar-nav gap-3 me-auto mb-2 mb-lg-0"}>
              <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <NavLink className="nav-link fw-semibold text-decoration-none text-white" to="/">Home</NavLink>
              </li>
              <li className={`nav-item ${location.pathname === '/about-us' ? 'active' : ''}`}>
                <NavLink className="nav-link fw-semibold text-decoration-none text-white" to="/about-us">About Us</NavLink>
              </li>
              <li className={`nav-item ${location.pathname === '/knowledge-centre' ? 'active' : ''}`}>
                <NavLink className="nav-link fw-semibold text-decoration-none text-white" to="/knowledge-center">Knowledge Centre</NavLink>
              </li>
              <li className={`nav-item ${location.pathname === '/contact-us' ? 'active' : ''}`}>
                <NavLink className="nav-link fw-semibold text-decoration-none text-white" to="/contact-us">Contact Us</NavLink>
              </li>
            </ul>
            
              <ul  className={click ? "  navbar-nav gap-3  mb-2 mb-lg-0 d-flex" : " navbar-nav gap-3 mb-2 mb-lg-0 "}>
            {isToken?<>
              <li className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}>
              <NavLink className="nav-link fw-semibold text-decoration-none text-white" to="/profile">Profile</NavLink>
            </li>
              <li className={`nav-item ${location.pathname === '/logout' ? 'active' : ''}`} onClick={handleLogout}>
                <NavLink className="nav-link fw-semibold text-decoration-none text-white" >Sign Out</NavLink>
              </li>
              </>
              :
              <li className={`nav-item ${location.pathname === '/signin' ? 'active' : ''}`}>
                <NavLink className="nav-link fw-semibold text-decoration-none text-white" to="/signin">Sign In</NavLink>
              </li>
              }
              </ul>
      
          </div>
        </div>
      </nav>



    </div>
  )
}

export default Navbar
