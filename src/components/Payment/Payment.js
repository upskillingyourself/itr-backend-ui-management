import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Payment = ({ isFieledData }) => {
  // console.log('isFieledDataisFieledData',isFieledData);
  const [token, setToken] = useState("your-auth-token"); // Replace with actual token handling
  // const [isFieledData, setIsFieledData] = useState({
  //     firstName: "John",
  //     lastName: "Doe",
  //     emailId: "john.doe@example.com",
  //     mobileNumber: "1234567890",
  //     itrYear: "2023"
  // }); // Replace with actual data
  const [selectedFee, setSelectedFee] = useState({ serviceFee: 100 }); // Replace with actual fee data
  const [cardType, setCardType] = useState("Salaried"); // Replace with actual card type
  const navigate = useNavigate();

  const handlePaymentSuccess = async (response, orderResponse) => {
    //console.log('response', response);
    // toast.success("Payment successful!");

    const paymentData = {
      razorpay_payment_id: response.razorpay_payment_id,
      transactionId: response.razorpay_payment_id,
      amount: orderResponse.amount,
      currency: orderResponse.currency,
      status: "success",
      paymentBy: isFieledData.firstName + " " + isFieledData.lastName,
      transactionForYear: isFieledData.itrYear,
    };
    // console.log('paymentData', paymentData);

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
      // console.log('Payment response', apiResponse);
      // handleClose(); // Implement handleClose if needed
    } catch (error) {
      // handleClose(); // Implement handleClose if needed
      console.error("Error sending payment response", error);
      toast.error("Failed to send payment response. Please try again.");
    }
  };

  const handlePaymentFailure = (response) => {
    console.error(response);
    toast.error("Payment failed. Please try again.");
  };

  const handleSubmit = async () => {
    let paymentAmount = cardType === "Salaried" ? "1" : selectedFee.serviceFee;

    if (typeof window.Razorpay === "undefined") {
      toast.error("Razorpay SDK is not loaded. Please try again.");
      return;
    }

    const data = JSON.stringify({ amount: paymentAmount });

    try {
      const orderResponse = await axios.post(
        `${process.env.REACT_APP_API_BASE}payment/createOrder`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      // console.log('orderResponse', orderResponse);

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
          name: isFieledData.firstName,
          email: isFieledData.emailId,
          contact: isFieledData.mobileNumber,
        },
        notes: {
          address: "ToraTax",
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
      // Implement removeUserSession if needed
      navigate("/signin");
    }
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Payment;
