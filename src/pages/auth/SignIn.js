import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { setUserSession } from '../../utils/common';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
const SignIn = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      setUserSession("5555", data)
      navigate("/dashboard")
      // Add your submission logic here, like calling an API
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      {/* <section className="p-3 p-md-4 p-xl-3 mt-xl-5">
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
                    <p className="lead m-0"> TORATAX is an online platform that provide assistance to taxpayers in filing their income tax returns. 												
</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <h3>Sign In</h3>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row gy-3 gy-md-4 overflow-hidden">
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                        <input type="email" className="input" name="email" id="email" placeholder="name@example.com" {...register('email', { required: true })} />
                        {errors.email && <span className="text-danger">This field is required</span>}
                      </div>
                      <div className="col-12">
                        <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                        <input type="password" className="input" name="password" id="password" placeholder="Enter your password" {...register('password', { required: true, minLength: 6 })} />
                        {errors.password && errors.password.type === 'required' && <span className="text-danger">This field is required</span>}
                        {errors.password && errors.password.type === 'minLength' && <span className="text-danger">Password must be at least 6 characters long</span>}
                      </div>
                    </div>
                    <div className="col-12 mt-4">
                      <div className="d-grid">
                        <button className="btn bsb-btn-xl btn-primary" type="submit">Sign In</button>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-12">
                      <hr className="mt-5 mb-4 border-secondary-subtle" />
                      <div className='d-flex justify-content-between align-items-center'>
                        <Link to="/" className='btn btn-outline-danger'>Back To Home</Link>

                      <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-2">
                        <p>Don't have an account ?</p>
                        <Link to="/signup" className="link-secondary text-decoration-none ">Create new account</Link>
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

      <div class="back-to-home" style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        zIndex: "1",
      }}>
        <Link to="/" class="back-button btn btn-icon btn-danger"><IoMdArrowBack /> <span>Back To Home</span></Link>
      </div>

      <section class="d-flex align-items-center" style={{ backgroundPosition: "center center" }}>

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
                  <form class="login-form mt-4 "onSubmit={handleSubmit(onSubmit)}>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label class="form-label">Your Email <span class="text-danger">*</span></label>
                          <div class="form-icon position-relative">

                            <input type="email" class="input" placeholder="Enter Your Email" name="email" {...register('email', { required: true })} />
                            {errors.email && <span className="text-danger">This field is required</span>}
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

                      <div class="col-lg-12">
                        <div class="d-flex justify-content-between">
                          <div class="mb-3">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault">Remember me</label>
                            </div>
                          </div>
                          <p class="forgot-pass mb-0"><Link href="auth-re-password.html" class="text-dark fw-bold text-decoration-none">Forgot password ?</Link></p>
                        </div>
                      </div>

                      <div class="col-lg-12 mb-0">
                        <div class="d-grid">
                          <button class="btn btn-primary">Sign in</button>
                        </div>
                      </div>

                      <div class="col-lg-12 mt-4 text-center">
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
                      </div>

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
