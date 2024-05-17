import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { setUserSession } from '../../utils/common';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Cookies from "js-cookie";

import base64 from 'base-64';
const SignIn = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false)


  const onSubmit = async (data) => {
    // console.log(data);
    setLoading(true)
    try {
      const username = data.username;
      const password = data.password;
      const encodedCredentials = base64.encode(`${username}:${password}`);
      // console.log("encodedCredentials", encodedCredentials)
      const headers = {
        Authorization: `Basic ${encodedCredentials}`

      };
      const response = await axios.get(`${process.env.REACT_APP_API_BASE}login`, { headers });
      console.log('Login Response:', response.data);
      setLoading(false)
      const authorizationHeader = response.headers.get('Authorization');
      // console.log('Authorization Header:', authorizationHeader);
      setUserSession(authorizationHeader)
      Cookies.set('firstName', response.data.firstName)
      Cookies.set('lastName', response.data.lastName)
      Cookies.set('phoneNumber', response.data.phoneNumber)
      Cookies.set('role', response.data.role)
      Cookies.set('userName', response.data.userName)
      Cookies.set('emailId', response.data.emailId)
      reset()
      if (response.status === 200) {
        toast.success('Successfully Login!');
      }
      setTimeout(()=>{
        navigate('/')
      },1000)
    } catch (error) {
      setLoading(false)
      if (error.response && error.response.status === 403) {
        toast.error('Forbidden Error');
        console.error('Forbidden Error:', error);
      } else {
        toast.error('Network Error');
        console.error('Error:', error);
      }
    }
  };



  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <section class="d-flex align-items-center" style={{ minHeight: "100vh", backgroundPosition: "center center" }}>

        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 col-md-6">
              <div class="me-lg-5">
                <img src="/images/login.svg" class="img-fluid d-block mx-auto" alt="ToraTax Login Logo" />
              </div>
            </div>
            <div class="col-lg-5 col-md-6">
              <div class="card login-page shadow  rounded border-0  mx-auto auth-card" style={{ fontSize: "15px", WebkitBoxShadow: "0 0 3px rgba(60,72,88,.15)!important", boxShadow: "0 0 3px rgba(60,72,88,.15)!important" }}>
                <div class="card-body">
                  <h4 class="card-title text-center">Login</h4>
                  <form class="login-form mt-4 " onSubmit={handleSubmit(onSubmit)}>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label class="form-label">Username <span class="text-danger">*</span></label>
                          <div class="form-icon position-relative">

                            <input type="text" class="input" placeholder="Enter Your Email" name="username" {...register('username', { required: true })} />
                            {errors.username && <span className="text-danger">This field is required</span>}
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label class="form-label">Password <span class="text-danger">*</span></label>
                          <div class="form-icon position-relative">
                            {/* <i data-feather="key" class="fea icon-sm icons"></i> */}
                            <input type="password" class="input" placeholder=" Enter Your Password"{...register('password', { required: true, minLength: 6 })} />
                            {errors.password && errors.password.type === 'required' && <span className="text-danger">This field is required</span>}
                            {errors.password && errors.password.type === 'minLength' && <span className="text-danger">Password must be at least 6 characters long</span>}

                          </div>
                        </div>
                      </div>

                      {/* <div class="col-lg-12">
                        <div class="d-flex justify-content-between">
                          <div class="mb-3">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">Remember me</label>
                            </div>
                          </div>
                          <p class="forgot-pass mb-0"><Link href="auth-re-password.html" class="text-dark fw-bold text-decoration-none">Forgot password ?</Link></p>
                        </div>
                      </div> */}

                      <div class="col-lg-12 mb-0">
                        <div class="d-grid">
                        <button className="btn btn-primary" disabled={loading}>{loading ? "Signing In...":"Sign In" }</button>
                        </div>
                      </div>

                      {/* <div class="col-lg-12 mt-4 text-center">
                        <h6>Or Login With</h6>
                        <div class="row">
                          <div class="col-6 mt-3">
                            <div class="d-grid">
                              <Link to="" class="btn btn-light d-flex align-items-center justify-content-center gap-2">
                                <span className='text-primary'>
                                  <FaFacebook />
                                </span>
                                <span> Facebook</span>
                              </Link>
                            </div>
                          </div>

                          <div class="col-6 mt-3">
                            <div class="d-grid">
                              <Link to="" class="btn btn-light d-flex align-items-center justify-content-center gap-2">
                                <span className='text-danger'>
                                  <FaGoogle />
                                </span>
                                <span> Google</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div> */}

                      <div class="col-12 text-center">
                        <p class="mb-0 mt-3"><small class="text-dark me-2">Don't have an account ?</small> <Link to="/signup" class="text-dark fw-bold text-decoration-none">Sign Up</Link></p>
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
