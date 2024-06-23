import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

    const onSubmit = async (data) => {
        console.log(data.username);

        const formData = new FormData();
        formData.append('userName', data.username);
        
        setLoading(true);
        try {
            const response = await axios.post(
                process.env.REACT_APP_API_BASE + "change-password/forgot-password",
                formData
            );
            setLoading(false);
            console.log('Response:', response.data);
            if (response.status === 200) {
                setAlert({ show: true, message: 'A password reset link was sent to the email.', variant: 'success' });
            }
            reset();
        } catch (error) {
            setLoading(false);
            if (error.response && error.response.status === 400) {
                setAlert({ show: true, message: 'Username not available', variant: 'danger' });
            } else {
                setAlert({ show: true, message: 'Network Error', variant: 'danger' });
                console.error('Error:', error);
            }
        }
    };

    return (
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
                                <h4 className="card-title text-center">Forgot Password</h4>
                                <form className="login-form mt-4" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        {alert.show && (
                                            <div className="col-lg-12">
                                                <div className={`alert alert-${alert.variant} alert-dismissible fade show`} role="alert">
                                                    {alert.message}
                                                    <button type="button" className="btn-close" aria-label="Close" onClick={() => setAlert({ ...alert, show: false })}></button>
                                                </div>
                                            </div>
                                        )}
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Username <span className="text-danger">*</span></label>
                                                <div className="form-icon position-relative">
                                                    <input type="text" className="input" placeholder="Enter Your Email" name="username" {...register('username', { required: true })} />
                                                    {errors.username && <span className="text-danger">This field is required</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-0">
                                            <div className="d-grid">
                                                <button className="btn btn-primary" disabled={loading}>{loading ? "Wait..." : "Next"}</button>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <p className="mb-0 mt-3"><small className="text-dark me-1">Back to login</small><Link to="/signin" className="text-dark fw-bold text-decoration-none">Sign In</Link></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
