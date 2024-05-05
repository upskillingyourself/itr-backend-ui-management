import React from 'react';
import { Navigate , Outlet } from 'react-router-dom';
import { getToken } from './common';
import Navbar from './../shared/Navbar'
import Footer from '../shared/Footer';
 
// handle the public routes
const PublicRoutes = () => {
  return !getToken() ? 
  <>
  {/* <Navbar/> */}
  <Outlet />
  {/* <Footer/> */}
  </>
   : <Navigate  to="/" />
}
 
export default PublicRoutes;