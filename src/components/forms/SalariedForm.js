import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';
import { getToken, removeUserSession } from '../../utils/common';
import './file.css'
import FileUpload from './FilesUpload';
import { useNavigate } from 'react-router-dom';

const SalariedForm = ({ cardType, handleClose,selectedFee }) => {
  console.log('selectedFee',selectedFee);
  const navigate=useNavigate()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [showForm, setShowForm] = useState(true);
  const [isFieledData, setFieledData] = useState({});
  const [loading, setLoading] = useState(false);

  const userName = Cookies.get('userName');
  const token = getToken();

  const firstName = Cookies.get('firstName');
  const lastName = Cookies.get('lastName');
  const emailId = Cookies.get('emailId');
  const phoneNumber = Cookies.get('phoneNumber');

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    
    setValue('firstName', firstName);
    setValue('lastName', lastName);
    if (emailId !== 'null') {
      setValue('emailId', emailId);
    }
    if (phoneNumber !== 'null') {
      setValue('mobileNumber', phoneNumber);
    }
    
    setValue('itrYear', currentYear);  // Set default value for itrYear
  }, [setValue, firstName, lastName, emailId, phoneNumber, currentYear]);

  const generateYears = () => {
    const years = [];
    for (let i = currentYear - 5; i <= currentYear + 5; i++) {
      years.push(i);
    }
    return years;
  };

  const onSubmit = async (data) => {
    const salaried = cardType === 'Salaried';
    const allData = {
      ...data,
      salaried: salaried ? 'true' : 'false',
      userId: userName,
    };
    // setLoading(true);
    // console.log('alldata',allData);
    // setFieledData(allData);
    // setShowForm(!showForm);
    try {
      const response = await axios.post(process.env.REACT_APP_API_BASE + "itrrequest", allData, {
        headers: {
          'Authorization': token,
        },
      });
      setLoading(false);
      setShowForm(!showForm);
      setFieledData(allData);
      console.log('itrrequest response', response);
      // toast.success("Form Submitted Successfully!");
    } catch (error) {
      setLoading(false);
      if (error.response) {
        toast.error("Something went wrong. Please try again later.");
      } else {
        toast.error("Network Error");
        console.error(error);
          removeUserSession()
          navigate('/signin')
      }
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="row">
          {showForm ? (
            <>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="firstName">First Name</label>
                  <input type="text" className="input" id="firstName" {...register("firstName", { required: true })} placeholder="Enter your First Name" />
                  {errors.firstName && <span className="text-danger">This field is required</span>}
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="lastName">Last Name</label>
                  <input type="text" className="input" id="lastName" {...register("lastName", { required: true })} placeholder="Enter your Last Name" />
                  {errors.lastName && <span className="text-danger">This field is required</span>}
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="email">Email</label>
                  <input type="email" className="input" id="email" {...register("emailId", { required: true })} placeholder="Enter your email" />
                  {errors.emailId && <span className="text-danger">This field is required</span>}
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2">Phone Number</label>
                  <input type="tel" className="input" id="phone" {...register("mobileNumber")} placeholder="Enter your Phone number" />
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2">PAN Number</label>
                  <input type="text" className="input" id="pan" {...register("pan")} placeholder="ABCDE1234F" />
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2">Service Year</label>
                  <select className="input" id="year" {...register("itrYear", { required: true })}>
                    {generateYears().map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  {errors.itrYear && <span className="text-danger">This field is required</span>}
                </div>
              </div>
              <div className="col-sm-12 mb-3 d-flex justify-content-end">
                <button 
                  type="submit"
                  className="btn btn-primary"
                >
                  {loading ? "Wait..." : 'Next'}
                </button>
              </div>
            </>
          ) : (
            <FileUpload setShowForm={setShowForm} handleClose={handleClose} cardType={cardType} isFieledData={isFieledData} selectedFee={selectedFee} />
          )}
        </div>
      </form>
    </>
  );
};

export default SalariedForm;
