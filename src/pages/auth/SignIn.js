import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { setUserSession } from '../../utils/common';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';
import base64 from 'base-64';

const SignIn = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const username = data.username;
      const password = data.password;
      const encodedCredentials = base64.encode(`${username}:${password}`);
      
      const headers = {
        Authorization: `Basic ${encodedCredentials}`
      };

      const response = await axios.get(`${process.env.REACT_APP_API_BASE}login`, {
        headers,
      },
    );

      setLoading(false);

      const authorizationHeader = response.headers.authorization;
      //  console.log('response',response.headers.get['X-Xsrf-Token']);
      
      
      // Save other user data from response
      const userData = response.data;
      console.log('userData',userData);
      setUserSession(authorizationHeader,userData.userName);
      Cookies.set('firstName', userData.firstName);
      Cookies.set('lastName', userData.lastName);
      Cookies.set('phoneNumber', userData.phoneNumber);
      Cookies.set('role', userData.role);
      Cookies.set('userName', userData.userName);
      Cookies.set('emailId', userData.emailId);

      reset();
      if (response.status === 200) {
        toast.success('Successfully Login!');
      }
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 401) {
        toast.error('Unauthorized');
      }
      else if(error.response && error.response.status === 302 ){
        toast.error('Please enter valid username & password');
      }
      else {
        toast.error('Please enter valid username & password');
      }
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="d-flex align-items-center" style={{ minHeight: "100vh", backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="me-lg-5">
                <img src="/images/login.svg" className="img-fluid d-block mx-auto" alt="ToraTax Login Logo" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="card login-page shadow rounded border-0 mx-auto auth-card" style={{ fontSize: "15px", WebkitBoxShadow: "0 0 3px rgba(60,72,88,.15)!important", boxShadow: "0 0 3px rgba(60,72,88,.15)!important" }}>
                <div className="card-body">
                  <h4 className="card-title text-center">Login</h4>
                  <form className="login-form mt-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">Username <span className="text-danger">*</span></label>
                          <div className="form-icon position-relative">
                            <input type="text" className="input" placeholder="Enter Your Email" name="username" {...register('username', { required: true })} />
                            {errors.username && <span className="text-danger">This field is required</span>}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">Password <span className="text-danger">*</span></label>
                          <div className="form-icon position-relative">
                            <input type="password" className="input" placeholder="Enter Your Password" {...register('password', { required: true, minLength: 6 })} />
                            {errors.password && errors.password.type === 'required' && <span className="text-danger">This field is required</span>}
                            {errors.password && errors.password.type === 'minLength' && <span className="text-danger">Password must be at least 6 characters long</span>}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-0">
                        <div className="d-grid">
                          <button className="btn btn-primary" disabled={loading}>{loading ? "Signing In..." : "Sign In"}</button>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <p className="mb-0 mt-3"><small className="text-dark me-2">Don't have an account?</small> <Link to="/signup" className="text-dark fw-bold text-decoration-none">Sign Up</Link></p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
