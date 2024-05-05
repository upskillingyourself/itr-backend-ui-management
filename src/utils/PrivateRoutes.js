import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from './common';
import NavBar from '../shared/dashboard/NavBar';
import Footer from '../shared/dashboard/Footer';

// handle the private routes
const PrivateRoutes = props => {

  return getToken() ?
    <> 
    {/* <NavBar/> */}
    <Outlet />
    {/* <Footer/> */}
     </> : <Navigate to="/signin" />
}

export default PrivateRoutes;