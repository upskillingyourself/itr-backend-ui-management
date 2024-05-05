import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import http from '../../utils/http';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const Xsrftoken = '2020520b-f459-4c2e-9c93-37a687279804';
    console.log(data);
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_BASE + "register",
        data,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': Xsrftoken,
          },
          // cookies should be set via the "withCredentials" option
          withCredentials: true 
        }
      );
  
      console.log('Response:', response.data);
  
      
      if (response.status === 201) {
        toast.success('Successfully toasted!');
      }
  
    } catch (error) {
      if (error.response && error.response.status === 403) {
        // Show forbidden error
        toast.error('Forbidden Error');
        console.error('Forbidden Error:', error);
      } else {
        // Handle other errors
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
      {/* <section className="p-3 p-md-4 p-xl-3">
        <div className="container">
          <div className="card border-light-subtle shadow-sm">
            <div className="row g-0">
              <div className="col-12 col-md-6 text-bg-primary">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div className="col-10 col-xl-8 py-3">
                    <h3>
                      Tora<span className=' text-warning'>Tax</span>
                    </h3>
                    <hr className="border-primary-subtle mb-4" />
                    <h2 className="h1 mb-4">TORATAX stand out as the best online assisted filing platform.</h2>
                    <p className="lead m-0">TORATAX is an online platform that provide assistance to taxpayers in filing their income tax returns.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <h3>Sign Up</h3>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row gy-3 gy-md-4 overflow-hidden">
                      <div className="col-12">
                        <label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
                        <input type="text" className="input" name="name" id="name" placeholder="Enter your Name" required {...register('name')} />
                      </div>
                      <div className="col-6">
                        <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                        <input type="email" className="input" name="email" id="email" placeholder="name@example.com" required {...register('email', { required: true })} />
                        {errors.email && <span className="text-danger">This field is required</span>}
                      </div>
                      <div className="col-6">
                        <label htmlFor="mobile" className="form-label">Phone Number <span className="text-danger">*</span></label>
                        <input type="tel" className="input" name="mobile" id="mobile" placeholder="Enter your phone Number" required {...register('mobile')} />
                      </div>
                      <div className="col-12">
                        <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                        <input type="password" className="input" name="password" id="password" placeholder="Enter your password" required {...register('password', { required: true, minLength: 6 })} />
                        {errors.password && errors.password.type === 'required' && <span className="text-danger">This field is required</span>}
                        {errors.password && errors.password.type === 'minLength' && <span className="text-danger">Password must be at least 6 characters long</span>}
                      </div>
                      <div className="col-12">
                        <div className='d-flex justify-content-between mb-3 '>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me" />
                            <label className="form-check-label text-secondary" htmlFor="remember_me">
                              Keep me logged in
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn bsb-btn-xl btn-primary" type="submit">Sign Up</button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-12">
                      <hr className="mt-5 mb-4 border-secondary-subtle" />
                      <div className='d-flex justify-content-between align-items-center'>
                        <Link to="/" className='btn btn-outline-danger'>Back To Home</Link>

                      <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                        <p>Already have an account ?</p>
                        <Link to="/signin" className="link-secondary text-decoration-none ">Sign In</Link>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <div class="back-to-home" style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        zIndex: "1",
      }}>
        <Link to="/" class="back-button btn btn-icon btn-danger"><IoMdArrowBack /> <span>Back To Home</span></Link>
      </div> */}

      <section class="d-flex align-items-center" style={{ backgroundPosition: "center center" }}>

        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 col-md-6">
              <div class="me-lg-5">
                <img src="/images/login.svg" class="img-fluid d-block mx-auto" alt="ToraTax Login Logo" />
              </div>
            </div>
            <div class="col-lg-5 col-md-6">
              <div class="card login-page shadow rounded border-0 auth-card  mx-auto" style={{ fontSize: "15px", maxWidth: "100%", WebkitBoxShadow: "0 0 3px rgba(60,72,88,.15)!important", boxShadow: "0 0 3px rgba(60,72,88,.15)!important" }}>
                <div class="card-body">
                  <h4 class="card-title text-center">Register</h4>
                  <form class="login-form mt-4 " onSubmit={handleSubmit(onSubmit)}>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label class="form-label">User Name (Email / Mobile Number ) <span class="text-danger">*</span></label>
                          <div class="form-icon position-relative">

                            <input type="text" class="input" placeholder="Enter Your User Name" name="userName" {...register('userName', { required: true })} />
                            {errors.userName && <span className="text-danger">This field is required</span>}
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">First name <span class="text-danger">*</span></label>
                          <div class="form-icon position-relative">
                            <input type="text" class="input" placeholder="First Name" name="firstName" {...register('firstName', { required: true })} />
                            {errors.firstName && <span className="text-danger">This field is required</span>}
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label class="form-label">Last name <span class="text-danger"></span></label>
                          <div class="form-icon position-relative">
                            <input type="text" class="input" placeholder="Last Name" name="lastName" {...register('lastName', { required: true })} />
                            {errors.lastName && <span className="text-danger">This field is required</span>}
                          </div>
                        </div>
                      </div>


                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label class="form-label">Password <span class="text-danger">*</span></label>
                          <div class="form-icon position-relative">
                            <input type="password" class="input" placeholder=" Enter Your Password"{...register('password', { required: true, minLength: 6 })} />
                            {errors.password && errors.password.type === 'required' && <span className="text-danger">This field is required</span>}
                            {errors.password && errors.password.type === 'minLength' && <span className="text-danger">Password must be at least 6 characters long</span>}

                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label class="form-label"> Confirm Password <span class="text-danger">*</span></label>
                          <div class="form-icon position-relative">
                            {/* <i data-feather="key" class="fea icon-sm icons"></i> */}
                            <input type="password" class="input" placeholder=" Enter Your Password"{...register('password', { required: true, minLength: 6 })} />
                            {errors.password && errors.password.type === 'required' && <span className="text-danger">This field is required</span>}
                            {errors.password && errors.password.type === 'minLength' && <span className="text-danger">Password must be at least 6 characters long</span>}

                          </div>
                        </div>
                      </div>

                      {/* <div class="col-md-12">
                        <div class="mb-3">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">I Accept <Link to="#" class="text-primary">Terms And Condition</Link></label>
                          </div>
                        </div>
                      </div> */}

                      <div class="col-lg-12 mb-0">
                        <div class="d-grid">
                          <button class="btn btn-primary">Sign up</button>
                        </div>
                      </div>

                      {/* <div class="col-lg-12 mt-4 text-center">
                        <h6>Or Sign Up With</h6>
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
                        <p class="mb-0 mt-3"><small class="text-dark me-2">Already have an account ?</small> <Link to="/signin" class="text-dark fw-bold text-decoration-none">Sign In</Link></p>
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

export default SignUp;
