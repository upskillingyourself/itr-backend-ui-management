import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';
import { getToken } from '../../utils/common';
import './file.css'
import FileUpload from './FilesUpload';

const SalariedForm = ({ cardType }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showForm, setShowForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState({});

  const userName = Cookies.get('userName');
  const token = getToken();

  const onSubmit = async (data) => {
    const salaried = cardType === 'Salaried';
    const allData = {
      ...data,
      itrYear: String(new Date().getFullYear()),
      salaried: salaried ? 'true' : 'false',
      userId: userName,
    };
    console.log('allData',allData);
    // setShowForm(!showForm);
    setLoading(true);
    try {
      const response = await axios.post(process.env.REACT_APP_API_BASE + "itrrequest", allData,
      {
        headers: {
          'Authorization': token,
        },
      }
      );
      setLoading(false);
      setShowForm(!showForm);
      console.log('itrrequest response',response);
      toast.success("Form Submitted Successfully!");
    } catch (error) {
      setLoading(false);
      if (error.response) {
        toast.error("Something went wrong. Please try again later.");
      } else {
        toast.error("Network Error");
        console.error(error);
      }
    }
  };

  

  

  // const changeForm = () => {
  //   setShowForm(!showForm);
  // };

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
                  {errors.firstName && <span>This field is required</span>}
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="lastName">Last Name</label>
                  <input type="text" className="input" id="lastName" {...register("lastName", { required: true })} placeholder="Enter your Last Name" />
                  {errors.lastName && <span>This field is required</span>}
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="email">Email</label>
                  <input type="email" className="input" id="email" {...register("emailId", { required: true })} placeholder="Enter your email" />
                  {errors.emailId && <span>This field is required</span>}
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2">Phone Number</label>
                  <input type="tel" className="input" id="phone" {...register("mobileNumber")} placeholder="Enter your mobile number" />
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2">PAN Number</label>
                  <input type="text" className="input" id="pan" {...register("pan")} placeholder="ABCDE1234F" />
                </div>
              </div>
              <div className="col-sm-12 mb-3 d-flex justify-content-end">
                <button 
                  type="submit"
                  // onClick={changeForm}
                  className="btn btn-primary"
                >
                  {loading ? "Wait..." 
                  :'Next'}
                  
                </button>
              </div>
            </>
          ) : (
             <FileUpload setShowForm={setShowForm}/>
          )}
        </div>
      </form>
    </>
  );
};

export default SalariedForm;
