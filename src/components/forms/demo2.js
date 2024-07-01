import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import { getToken } from "../../utils/common";

const SalariedForm = ({ cardType }) => {
  // console.log('cardType form',cardType);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showForm, setShowForm] = useState(true);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const userName = Cookies.get("userName");
  const token = getToken();
  // console.log(token);
  const onSubmit = async (data) => {
    // Handle form submission here
    const salaried = cardType === "Salaried";

    const allData = {
      ...data,
      itrYear: String(new Date().getFullYear()),
      salaried: salaried ? "true" : "false",
      userId: userName,
    };

    //console.log("itr form allData",allData);
    setLoading(true);
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_BASE + "itrrequest",
        allData
        // {
        //   withCredentials: true, // Allow sending cookies
        //   headers: {
        //     "Content-Type": "application/json",
        //     // "crossdomain": true, // Inform server about cross-origin request
        //     // Add other headers as needed
        //      'X-XSRF-TOKEN':'9a5e8825-cd57-4e42-aab4-67c47f56900e',
        //     'Authorization':token

        //   },
        // }
      );

      // console.log("itrrequest response", response);
      setLoading(false);
      toast.success("Form Submitted Successfully...!");
    } catch (error) {
      setLoading(false);
      console.log("error", error);
      if (error.response) {
        toast.error("Something went wrong. Please try again later.");
      } else {
        toast.error("Network Error");
        console.error(error);
      }
    }
  };

  const handleUpload = async (fieldName) => {
    const selectedFile = document.getElementById(fieldName).files[0];
    if (!selectedFile) {
      setMsg("No File Selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
  };

  const handleBack = () => {
    setShowForm(true);
  };

  const changeForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="row">
          {showForm ? (
            <>
              {/* First part of the form */}
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="input"
                    id="firstName"
                    {...register("firstName", { required: true })}
                    placeholder="Enter your First Name"
                  />
                  {errors.firstName && <span>This field is required</span>}
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="input"
                    id="lastName"
                    {...register("lastName", { required: true })}
                    placeholder="Enter your Last Name"
                  />
                  {errors.lastName && <span>This field is required</span>}
                </div>
              </div>

              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input"
                    id="email"
                    {...register("emailId", { required: true })}
                    placeholder="Enter your email"
                  />
                  {errors.email && <span>This field is required</span>}
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="input"
                    id="phone"
                    {...register("mobileNumber")}
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2">PAN Number</label>
                  <input
                    type="text"
                    className="input"
                    id="pan"
                    {...register("pan")}
                    placeholder="ABCDE1234F"
                  />
                </div>
              </div>
              {/* Other fields */}
              <div className="col-sm-12 mb-3 d-flex justify-content-end">
                <button
                  type="button"
                  onClick={changeForm}
                  className="btn btn-primary  "
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2">PAN Document</label>
                  <input
                    type="file"
                    className="input"
                    id="panDocument"
                    {...register("panDocument")}
                  />
                  <button
                    type="button"
                    onClick={() => handleUpload("panDocument")}
                  >
                    Upload
                  </button>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="aadharDocument">
                    Aadhar Document
                  </label>
                  <input
                    type="file"
                    className="input form-control-file"
                    id="aadharDocument"
                    {...register("aadharDocument")}
                  />
                  <button
                    type="button"
                    onClick={() => handleUpload("aadharDocument")}
                  >
                    Upload
                  </button>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="bankStatement">
                    Bank Statement
                  </label>
                  <input
                    type="file"
                    className="input"
                    id="bankStatement"
                    {...register("bankStatement")}
                  />
                  <button
                    type="button"
                    onClick={() => handleUpload("bankStatement")}
                  >
                    Upload
                  </button>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="form16Document">
                    Form-16 Document
                  </label>
                  <input
                    type="file"
                    className="input"
                    id="form16Document"
                    {...register("form16Document")}
                  />
                  <button
                    type="button"
                    onClick={() => handleUpload("form16Document")}
                  >
                    Upload
                  </button>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="otherDocument">
                    Other Document
                  </label>
                  <input
                    type="file"
                    className="input"
                    id="otherDocument"
                    {...register("otherDocument")}
                  />
                  <button
                    type="button"
                    onClick={() => handleUpload("otherDocument")}
                  >
                    Upload
                  </button>
                </div>
              </div>
              <div className="col-sm-12 mb-3 d-flex justify-content-end gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn btn-outline-primary  "
                >
                  Back
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default SalariedForm;
