
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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


function App() {
  return (
    <div className="App">

      <BrowserRouter>


        <Routes>
          <Route path='*' element={<ErrorPage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route element={<PublicRoutes />}>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
          </Route>
          <Route element={<PrivateRoutes />}>
          <Route path='/dashboard' element={< Dashboard/>} />
          <Route path='/profile' element={< Profile/>} />
          </Route>


          
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
