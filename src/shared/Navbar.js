import React, { useState } from 'react'
 import { useLocation, useNavigate } from 'react-router-dom'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import NavBar from './dashboard/NavBar';

const Navbar = () => {
  const location = useLocation();
  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(!click)
  const navigate = useNavigate() 

  const handleSignIn = ()=>
  {
    navigate('/signin')
  }
  const handleSignUp = ()=>
  {
    navigate('/signup')
  }
  return (
    <div className='header sticky-top ' style={{backgroundColor:"rgba(255,255,255,1)"}}>
{location.pathname === '/' ? 
      <nav class="navbar navbar-expand-lg navbar-light  ">
        <div class="container">
          <Link to='/' class="navbar-brand fw-bold"onClick={closeMenu}
          spy={true} 
          smooth={true} 
          offset={50} 
          duration={500}  >
            <h3>
            Tora<span className=' text-warning'>Tax</span>
            </h3>
            
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul  className={click ? "  navbar-nav gap-3 ms-auto mb-2 mb-lg-0" : " navbar-nav gap-3 ms-auto mb-2 mb-lg-0"}>
              <li class="nav-item"style={{cursor:"pointer"}}>
                <Link to='home'className='fw-semibold text-decoration-none text-dark'  onClick={closeMenu} spy={true} smooth={true} offset={50} duration={500}  >Home</Link>
              </li>
              
              <li class="nav-item"style={{cursor:"pointer"}}>
                <Link to='features' className='fw-semibold text-decoration-none text-dark' onClick={closeMenu} spy={true} smooth={true} offset={50} duration={500}  >Features </Link>
              </li> 

              <li class="nav-item"style={{cursor:"pointer"}}>
                <Link to='faq'className='fw-semibold text-decoration-none text-dark' onClick={closeMenu} spy={true} smooth={true} offset={50} duration={500}  >Faq</Link>
              </li>
              <li class="nav-item"style={{cursor:"pointer"}}>
                <Link to='contact' className='fw-semibold text-decoration-none text-dark' onClick={closeMenu} spy={true} smooth={true} offset={50} duration={500} >Contact Us</Link>
              </li>
              <li class="nav-item"style={{cursor:"pointer"}}>
                <Link to='about' className='fw-semibold text-decoration-none text-dark' onClick={closeMenu} spy={true} smooth={true} offset={150} duration={500} >About Us</Link>
              </li>

              
              <li class="nav-item  " style={{cursor:"pointer"}}>
                <Link
                
                  onClick={handleSignIn} 
                 
                  className='fw-semibold text-decoration-none text-dark'>Sign In</Link>
              </li>
              <li class="nav-item" style={{cursor:"pointer"}}>
                <Link  
                
                onClick={handleSignUp}
                
                className='fw-semibold text-decoration-none text-dark'>Sign Up</Link>
              </li>
            
            </ul>
        
          </div>
        </div>
      </nav>
       : 
       <NavBar/>
       }
    </div>
  )
}

export default Navbar
