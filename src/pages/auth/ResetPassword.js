import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ResetPassword = () => {
  const query = useQuery();
  const token = query.get('token');

  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  useEffect(() => {
    const storedResetFlag = localStorage.getItem('isPasswordReset');
    const storedToken = localStorage.getItem('resetToken');
    if (storedResetFlag && storedToken === token) {
      setIsPasswordReset(true);
    }
  }, [token]);

  const onSubmit = async (data) => {
    setLoading(true);
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords do not match');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('password', data.password);
    formData.append('token', token);

    try {
      const response = await axios.put(
        process.env.REACT_APP_API_BASE + "change-password/reset-password", formData
      );
      setLoading(false);
      if (response.status === 200) {
        toast.success(response.data);
        setIsPasswordReset(true);
        localStorage.setItem('isPasswordReset', 'true');
        localStorage.setItem('resetToken', token);
      }
      reset();
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data);
      } else {
        toast.error('Network Error');
        console.error('Error:', error);
      }
    }
  };

  const password = watch('password');

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="d-flex align-items-center" style={{ backgroundPosition: "center center" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="me-lg-5">
                <img src="/images/login.svg" className="img-fluid d-block mx-auto" alt="ToraTax Login Logo" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="card login-page shadow rounded border-0 auth-card mx-auto" style={{ fontSize: "15px", maxWidth: "100%", WebkitBoxShadow: "0 0 3px rgba(60,72,88,.15)!important", boxShadow: "0 0 3px rgba(60,72,88,.15)!important" }}>
                <div className="card-body">
                  {isPasswordReset ? (
                    <div className="text-center">
                      <h4 className="card-title">Your password has been updated</h4>
                      <p className="mt-3">You can now sign in with your new password.</p>
                      <Link to="/signin" className="btn btn-primary">Go to Sign In</Link>
                    </div>
                  ) : (
                    <>
                      <h4 className="card-title text-center">Reset Password</h4>
                      <form className="login-form mt-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
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
                              <button className="btn btn-primary" disabled={loading}>{loading ? "Wait..." : "Submit"}</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
