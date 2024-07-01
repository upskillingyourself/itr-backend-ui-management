import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { getToken } from "../../utils/common";

const FileUpload = ({ setShowForm, handleClose }) => {
  const [uploadStatus, setUploadStatus] = useState({});
  const {
    register,
    formState: { errors },
  } = useForm();
  const token = getToken();

  const documentMapping = {
    aadharDocument: { documentTypeId: 1, documentName: "Aadhar" },
    panDocument: { documentTypeId: 2, documentName: "PAN" },
    drivingLicence: { documentTypeId: 3, documentName: "Driving Licence" },
    otherDocument: { documentTypeId: 4, documentName: "Other Document" },
    passport: { documentTypeId: 5, documentName: "Passport" },
    form16Document: { documentTypeId: 6, documentName: "Form-16" },
  };

  // Function to handle file uploads
  const handleUpload = async (fieldName) => {
    const selectedFile = document.getElementById(fieldName).files[0];
    if (!selectedFile) {
      toast.error("No File Selected");
      return;
    }

    const documentInfo = documentMapping[fieldName];
    var info = JSON.stringify({ typeId: documentInfo.documentTypeId });
    const formData = new FormData();
    formData.append("document", selectedFile);
    formData.append("info", info);

    try {
      setUploadStatus((prevStatus) => ({
        ...prevStatus,
        [fieldName]: "Uploading...",
      }));
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE}fileupload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        }
      );
      // console.log('fileupload', response);
      setUploadStatus((prevStatus) => ({
        ...prevStatus,
        [fieldName]: "Upload Complete",
      }));
      toast.success("File uploaded successfully!");
    } catch (error) {
      setUploadStatus((prevStatus) => ({
        ...prevStatus,
        [fieldName]: "Upload Failed",
      }));
      toast.error("File upload failed. Please try again.");
    }
  };

  const handleBack = () => {
    setShowForm(true);
  };

  const handlePaymentSuccess = (response) => {
    // console.log(response);
    toast.success("Payment successful!");
    handleClose();
  };

  const handlePaymentFailure = (response) => {
    console.error(response);
    toast.error("Payment failed. Please try again.");
  };

  const handleSubmit = async () => {
    //console.log(token);
    const paymentAmount = 1000; // Set your desired payment amount here
    try {
      const orderResponse = await axios.post(
        "https://api.toratax.com/toratax/rest/v1.0/createOrder",
        { amount: paymentAmount },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const order = orderResponse.data;

      const options = {
        key: process.env.RAZORPAY_KEY_ID || "rzp_test_CJdIyOaRepCj8r", // Replace with your Razorpay key ID
        amount: paymentAmount * 100, // Amount in the smallest currency unit (e.g., paise)
        currency: "INR",
        name: "ToraTax",
        description: "Test Transaction",
        // image: "https://example.com/your_logo",
        handler: handlePaymentSuccess,
        prefill: {
          name: " Sat",
          email: "sat@gmail.com",
          contact: "83828694",
        },
        notes: {
          address: "Easy Billing Home",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", handlePaymentFailure);
      rzp1.open();
    } catch (error) {
      console.error(error);
      toast.error("Unable to create order. Please try again.");
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {Object.keys(documentMapping).map((fieldName) => (
        <div className="col-sm-6 mb-3" key={fieldName}>
          <div className="form-group">
            <label className="form-label mb-2" htmlFor={fieldName}>
              {documentMapping[fieldName].documentName}
            </label>
            <input
              type="file"
              className="file"
              id={fieldName}
              {...register(fieldName)}
            />
            <button
              type="button"
              className="btn btn-secondary mt-2"
              onClick={() => handleUpload(fieldName)}
            >
              Upload
            </button>
            {uploadStatus[fieldName] && (
              <small className="form-text text-muted">
                {uploadStatus[fieldName]}
              </small>
            )}
          </div>
        </div>
      ))}
      <div className="col-sm-12 mb-3 d-flex justify-content-end gap-3">
        <button
          type="button"
          onClick={handleBack}
          className="btn btn-outline-primary"
        >
          Back
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default FileUpload;
