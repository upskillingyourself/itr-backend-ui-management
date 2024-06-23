import React, { useState, useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const codeRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const validateForm = () => {
    const newErrors = {};
    if (code.some((char) => !char)) {
      newErrors.code = 'All fields are required';
    }
    if (!password) {
      newErrors.password = 'This field is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = 'This field is required';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    try {

      const iscode = code.join('');
      const data = { 
        code :iscode, password, confirmPassword };
      
      console.log(data);
      // navigate('/success'); 
    } catch (error) {
      
      console.error('Reset password failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCodeChange = (index, event) => {
    const newCode = [...code];

    newCode[index] = event.target.value;
    setCode(newCode);
    if (event.target.value.length === 1 && index < 3) {
      codeRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && event.target.value === '') {
      codeRefs[index - 1].current.focus();
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
                  <h4 className="card-title text-center">Reset Password</h4>
                  <form className="login-form mt-4" onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">Code <span className="text-danger">*</span></label>
                        <div className="form-icon position-relative d-flex justify-content-between">
                          {Array.from({ length: 4 }).map((_, index) => (
                            <input
                              key={index}
                              type="text"
                              className="input"
                              maxLength="1"
                              style={{ width: '20%', textAlign: 'center', }}
                              value={code[index]}
                              onChange={(e) => handleCodeChange(index, e)}
                              onKeyDown={(e) => handleBackspace(index, e)}
                              ref={codeRefs[index]}
                            />
                          ))}
                        </div>
                        {errors.code && <span className="text-danger">{errors.code}</span>}
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">Password <span className="text-danger">*</span></label>
                        <div className="form-icon position-relative">
                          <input 
                            type="password" 
                            className="input" 
                            placeholder="Enter New Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          {errors.password && <span className="text-danger">{errors.password}</span>}
                        </div>
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label className="form-label">Confirm Password <span className="text-danger">*</span></label>
                        <div className="form-icon position-relative">
                          <input 
                            type="password" 
                            className="input" 
                            placeholder="Confirm Your Password" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                          {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword}</span>}
                        </div>
                      </div>
                      <div className="col-lg-12 mb-3">
                        <div className="d-grid">
                          <button className="btn btn-primary" disabled={loading}>{loading ? "Wait..." : "Next"}</button>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <p className="mb-0 mt-3">
                          <small className="text-dark me-1">Back to login</small>
                          <Link to="/signin" className="text-dark fw-bold text-decoration-none">Sign In</Link>
                        </p>
                      </div>
                    </div>
                    {errors.submit && <div className="text-danger text-center mt-3">{errors.submit}</div>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResetPassword;
