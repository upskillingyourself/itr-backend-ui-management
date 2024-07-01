import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { getToken, removeUserSession } from "../../utils/common";
import { useNavigate } from "react-router-dom";

const FileUpload = ({
  cardType,
  setShowForm,
  handleClose,
  isFieledData,
  selectedFee,
}) => {
  const navigate = useNavigate();
  // console.log('cardType',cardType,selectedFee);
  //  console.log('isFieledData',isFieledData);
  const [uploadStatus, setUploadStatus] = useState({});
  const [isState, setState] = useState({});
  const {
    register,
    formState: { errors },
  } = useForm();
  const token = getToken();
  //console.log('isState',isState);
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
    var info = JSON.stringify({
      typeId: documentInfo.documentTypeId,
      year: isFieledData.itrYear,
    });
    const formData = new FormData();
    formData.append("document", selectedFile);
    formData.append("info", info);
    // console.log('formData',selectedFile,info,formData);

    try {
      setUploadStatus((prevStatus) => ({
        ...prevStatus,
        [fieldName]: "Uploading...",
      }));
      const response = await axios.post(
        process.env.REACT_APP_API_BASE + "fileupload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        }
      );
      // console.log('fileupload',response);
      setUploadStatus((prevStatus) => ({
        ...prevStatus,
        [fieldName]: "Upload Complete",
      }));
      //   toast.success("File uploaded successfully!");
    } catch (error) {
      console.log("error Error", error);
      if (error.message === "Network Error") {
        removeUserSession();
        navigate("/signin");
        console.log("error Network Error", error.message);
      } else {
        setUploadStatus((prevStatus) => ({
          ...prevStatus,
          [fieldName]: "Upload Failed",
        }));
      }
      //   toast.error("File upload failed. Please try again.");
    }
  };

  const handleBack = () => {
    setShowForm(true);
  };

  const handlePaymentSuccess = async (response, orderResponse) => {
    // console.log('response', response);
    // toast.success("Payment successful!");

    const paymentData = {
      razorpay_payment_id: response.razorpay_payment_id,
      transactionId: response.razorpay_payment_id,
      amount: orderResponse.amount,
      currency: orderResponse.currency,
      status: "success",
      paymentBy: isFieledData.firstName + isFieledData.lastName,
      transactionForYear: isFieledData.itrYear,
    };
    // console.log('paymentData',paymentData);
    setState(paymentData);

    try {
      const apiResponse = await axios.post(
        `${process.env.REACT_APP_API_BASE}payment/response`,
        paymentData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      //  console.log('Payment response', apiResponse);
      handleClose();
    } catch (error) {
      handleClose();
      console.error("Error sending payment response", error);
      toast.error("Failed to send payment response. Please try again.");
    }
  };

  const handlePaymentFailure = (response) => {
    console.error(response);
    toast.error("Payment failed. Please try again.");
  };

  const handleSubmit = async () => {
    var paymentAmount;

    {
      cardType === "Salaried"
        ? (paymentAmount = selectedFee.serviceFee)
        : (paymentAmount = selectedFee.serviceFee);
    }
    // console.log('paymentAmount',paymentAmount);
    if (typeof window.Razorpay === "undefined") {
      toast.error("Razorpay SDK is not loaded. Please try again.");
      return;
    }

    const data = JSON.stringify({ amount: paymentAmount });

    try {
      const orderResponse = await axios.post(
        process.env.REACT_APP_API_BASE + `payment/createOrder`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      // console.log('orderResponse',orderResponse);

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,

        amount: paymentAmount,
        currency: "INR",
        name: "ToraTax",
        description: "Test Transaction",
        image: "/favicon.png",
        order_id: orderResponse.data.id,
        handler: (response) =>
          handlePaymentSuccess(response, orderResponse.data),

        prefill: {
          name: isFieledData.firstname,
          email: isFieledData.emailId,
          contact: isFieledData.mobileNumber,
        },
        notes: {
          address: "ToraTAx",
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
      removeUserSession();
      navigate("/signin");
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
              className="form-contol"
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
              <div className="mt-2">
                {uploadStatus[fieldName] === "Uploading..." && (
                  <div className="alert alert-warning" role="alert">
                    Uploading...
                  </div>
                )}
                {uploadStatus[fieldName] === "Upload Complete" && (
                  <div className="alert alert-success" role="alert">
                    Upload Complete
                  </div>
                )}
                {uploadStatus[fieldName] === "Upload Failed" && (
                  <div className="alert alert-danger" role="alert">
                    Upload Failed
                  </div>
                )}
              </div>
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
