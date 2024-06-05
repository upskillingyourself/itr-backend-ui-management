import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        process.env.REACT_APP_API_BASE + "register", data
      );
      setLoading(false);
      console.log('Response:', response.data);
      if (response.status === 201) {
        toast.success( response.data);
      }
      setTimeout(() => {
        navigate('/signin');
      }, 2000);
      reset();
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data);
      } else {
        // Handle other errors
        toast.error('Network Error');
        console.error('Error:', error);
      }
    }
  };

  const password = watch('password');

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <section className="d-flex align-items-center" style={{ backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="me-lg-5">
                <img src="/images/login.svg" className="img-fluid d-block mx-auto" alt="ToraTax Login Logo" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="card login-page shadow rounded border-0 auth-card  mx-auto" style={{ fontSize: "15px", maxWidth: "100%", WebkitBoxShadow: "0 0 3px rgba(60,72,88,.15)!important", boxShadow: "0 0 3px rgba(60,72,88,.15)!important" }}>
                <div className="card-body">
                  <h4 className="card-title text-center">Register</h4>
                  <form className="login-form mt-4 " onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">User Name (Email / Mobile Number ) <span className="text-danger">*</span></label>
                          <div className="form-icon position-relative">
                            <input type="text" className="input" placeholder="Enter Your User Name" name="userName" {...register('userName', { required: true })} />
                            {errors.userName && <span className="text-danger">This field is required</span>}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">First name <span className="text-danger">*</span></label>
                          <div className="form-icon position-relative">
                            <input type="text" className="input" placeholder="First Name" name="firstName" {...register('firstName', { required: true })} />
                            {errors.firstName && <span className="text-danger">This field is required</span>}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Last name <span className="text-danger"></span></label>
                          <div className="form-icon position-relative">
                            <input type="text" className="input" placeholder="Last Name" name="lastName" {...register('lastName')} />
                            {errors.lastName && <span className="text-danger">This field is required</span>}
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
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">Confirm Password <span className="text-danger">*</span></label>
                          <div className="form-icon position-relative">
                            <input type="password" className="input" placeholder="Confirm Your Password" {...register('confirmPassword', { 
                              required: true, 
                              validate: value => value === password || 'Passwords do not match'
                            })} />
                            {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword.message}</span>}
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12 mb-0">
                        <div className="d-grid">
                          <button className="btn btn-primary" disabled={loading}>{loading ? "Signing Up..." : "Sign Up"}</button>
                        </div>
                      </div>

                      <div className="col-12 text-center">
                        <p className="mb-0 mt-3"><small className="text-dark me-2">Already have an account ?</small> <Link to="/signin" className="text-dark fw-bold text-decoration-none">Sign In</Link></p>
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
