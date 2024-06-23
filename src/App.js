
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/home/Home';

import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Footer from './shared/Footer';
import ErrorPage from './pages/ErrorPage';
import PublicRoutes from './utils/PublicRoutes';
import PrivateRoutes from './utils/PrivateRoutes';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/dashboard/Profile';
import AboutUs from './pages/about/AboutUs';
import Navbar from './shared/Navbar';
import ContactUs from './pages/contact/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermCondation from './pages/TermCondation';
import KnowledgeCenter from './pages/knowledge-center/KnowledgeCenter';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';


function App() {
  return (
     <div className="App">

      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='*' element={<ErrorPage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='reset-ui/reset-password' element={<ResetPassword />} />
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-&-condations' element={<TermCondation />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/knowledge-center' element={<KnowledgeCenter />} />


          <Route element={<PublicRoutes />}>


          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-&-condations' element={<TermCondation />} />
            <Route path='/contact-us' element={<ContactUs />} />

            <Route path='/dashboard' element={< Dashboard />} />
            <Route path='/profile' element={< Profile />} />
          </Route>



        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
