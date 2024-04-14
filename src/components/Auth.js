import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Auth = () => {
    const [showSignUp, setShowSignUp] = useState(true);
    const { register, handleSubmit,reset } = useForm();

    const toggleForm = () => {
        setShowSignUp(!showSignUp);
        reset();
    };

    const onSubmit = (data) => {
        console.log(data); // You can handle form submission here
    };

    return (
        <>
            <section className="p-3 p-md-4 p-xl-3 " id='auth'>
                <div className="container" style={{ marginTop: "80px", marginBottom: "80px" }}>
                    <div className="card border-light-subtle shadow-sm">
                        <div className="row g-0">
                            <div className="col-12 col-md-6 text-bg-primary">
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <div className="col-10 col-xl-8 py-3">
                                        <h3>
                                            Tora<span className=' text-warning'>Tax</span>
                                        </h3>
                                        <hr className="border-primary-subtle mb-4" />
                                        <h2 className="h1 mb-4">We make digital products that drive you to stand out.</h2>
                                        <p className="lead m-0">New World.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="card-body p-3 p-md-4 p-xl-5">
                                    <div className="row">
                                        <div className="col-12 ">
                                            <div className="mb-5">
                                                {showSignUp ? (
                                                    <div className="d-flex justify-content-between ">
                                                        <div className="">

                                                            <h3 className=' active'>Sign Up</h3>
                                                        </div>
                                                        <div className="">
                                                            <button className='btn btn-outline-primary' onClick={toggleForm}><h5 className=''>Sign In</h5></button>

                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="d-flex justify-content-between ">
                                                        <div className="">
                                                            <button className='btn btn-outline-primary' onClick={toggleForm}><h5 className=''>Sign Up</h5></button>
                                                        </div>
                                                        <div className="">
                                                            <h3 className='active'>Sign In</h3>

                                                        </div>
                                                    </div>
                                                )}
                                                {/* {showSignUp ? (
                                                    <button className='btn btn-outline-primary' onClick={toggleForm}><h5 className='ms-auto'>Sign Up</h5></button>
                                                ) : (
                                                    <h3 className=' ms-auto' onClick={toggleForm}>Sign In</h3>
                                                )} */}
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        {showSignUp ? (
                                            <>
                                                <div className="row gy-3 gy-md-4 overflow-hidden">
                                                    <div className="col-12">
                                                        <label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
                                                        <input type="text" className="input" name="name" id="name" placeholder="Enter your Name" required {...register('name')} />
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                                        <input type="email" className="input" name="email" id="email" placeholder="name@example.com" required {...register('email')} />
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="mobile" className="form-label">Phone Number <span className="text-danger">*</span></label>
                                                        <input type="tel" className="input" name="mobile" id="mobile" placeholder="Enter your phone Number" required {...register('mobile')} />
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                                                        <input type="password" className="input" name="password" id="password" placeholder="Enter your password" required {...register('password')} />
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
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-grid">
                                                        <button className="btn bsb-btn-xl btn-primary" type="submit">Sign Up</button>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="row gy-3 gy-md-4 overflow-hidden">
                                                    <div className="col-12">
                                                        <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                                        <input type="email" className="input" name="email" id="email" placeholder="name@example.com" required {...register('email')} />
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                                                        <input type="password" className="input" name="password" id="password" placeholder="Enter your password" required {...register('password')} />
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-4">
                                                    <div className="d-grid">
                                                        <button className="btn bsb-btn-xl btn-primary" type="submit">Sign In</button>
                                                    </div>
                                                </div>

                                            </>
                                        )}
                                    </form>
                                    <div className="row">
                                        <div className="col-12">
                                            <hr className="mt-5 mb-4 border-secondary-subtle" />
                                            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                                                <p>{showSignUp ? 'Already have an account ?' : 'Don\'t have an account ?'}</p>
                                                <p className="link-secondary text-decoration-none" style={{cursor:"pointer"}} onClick={toggleForm}>{showSignUp ? 'Sign In' : 'Sign Up'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Auth;
