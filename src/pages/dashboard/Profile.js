        import React, { useEffect, useState } from 'react'
        import { FaInstagram, FaLinkedinIn, FaClipboardList, FaUserEdit, FaRegEdit } from "react-icons/fa";

        import { IoMdSettings } from "react-icons/io";
        import { MdDelete } from "react-icons/md";
        import { Link, useNavigate } from 'react-router-dom';
        import Cookies from "js-cookie";
        import { BiDownload, BiSolidEdit } from "react-icons/bi";
        import { IoSettingsOutline } from "react-icons/io5";
        import axios from 'axios';
        import toast, { Toaster } from 'react-hot-toast';
        import { getToken, removeUserSession } from '../../utils/common';
        import { GrDocumentImage } from "react-icons/gr";
        import { AiOutlineDelete } from "react-icons/ai";
        import { FaEdit } from "react-icons/fa";
        import { LiaEdit } from "react-icons/lia";
        import DocumentShowModal from '../../components/Modals/DocumentShowModal';
        import Moment from 'react-moment';
        import { MdOutlineEdit } from "react-icons/md";
        import { RiSecurePaymentFill, RiSecurePaymentLine } from "react-icons/ri";
        import AdminProfile from './AdminProfile/AdminProfile';
        import Payment from '../../components/Payment/Payment';
        import { BsDownload } from 'react-icons/bs';

        // const jsonData = [
        //   {
        //     "id": 1,
        //     "name": "Karan Sharma",
        //     "type": "Salried",
        //     "location": "Noida, UP 6654",
        //     "date": "15/04/2024"
        //   },
        //   {
        //     "id": 2,
        //     "name": "Preeti Singh",
        //     "type": "Non-Salried",
        //     "location": "Delhi",
        //     "date": "01/04/2024"
        //   },
        //   {
        //     "id": 3,
        //     "name": "John Doe",
        //     "type": "Freelancer",
        //     "location": "New York",
        //     "date": "12/05/2024"
        //   },
        //   {
        //     "id": 4,
        //     "name": "Emily Smith",
        //     "type": "Salried",
        //     "location": "Los Angeles",
        //     "date": "20/04/2024"
        //   },
        //   {
        //     "id": 5,
        //     "name": "David Johnson",
        //     "type": "Non-Salried",
        //     "location": "Chicago",
        //     "date": "05/05/2024"
        //   }
        // ]

        // const rtr_requests = [
        //   {
        //     "request_id": "RTR2024-001",
        //     "request_date": "2024-04-15",
        //     "document_type": "Tax Return",
        //     "status": "Completed",
        //     "processing_time": "3 days",
        //     "outcome": "Successfully filed",
        //     "filing_reference_number": "FIL2024-001",
        //     "comments": "Client provided all necessary documents.",
        //     "follow_up_action": "",
        //     "contact_person": "John Doe",
        //     "payment_status": "Paid"
        //   },
        //   {
        //     "request_id": "RTR2024-002",
        //     "request_date": "2024-04-28",
        //     "document_type": "Financial Statement",
        //     "status": "Pending",
        //     "processing_time": "",
        //     "outcome": "",
        //     "filing_reference_number": "",
        //     "comments": "Awaiting additional documents from the client.",
        //     "follow_up_action": "Sent reminder email to the client.",
        //     "contact_person": "Jane Smith",
        //     "payment_status": "Pending"
        //   }
        // ]

        // Define style objects
        const styles = {
        pendingPayment: {
            backgroundColor: '#fcd1d1',
            color: 'darkred',
            borderRadius: '12px ',
            padding: '5px',
            fontWeight: '500'

        },
        successPayment: {
            backgroundColor: 'lightgreen',
            color: 'darkgreen',
            borderRadius: '12px ',
            padding: '5px',
            fontWeight: '500'
        },

        };

        const Profile = () => {
        const navigate = useNavigate();
        const [isYear,setIsYear]=useState()
        const [loading, setLoading] = useState(false);
        const [isUserData, setUserData] = useState();
        const [isAdminData, setAdminData] = useState([]);
        const [isUserItrInfo, setUserItrInfo] = useState([]);
        const [isUser, setUser] = useState({});
        const [show, setShow] = useState(false);
        //console.log('isUser',isUser);
          console.log('isUserData',isUserData);
        const firstName = Cookies.get('firstName')
        const lastName = Cookies.get('lastName')
        const emailId = Cookies.get('emailId')
        const phoneNumber = Cookies.get('phoneNumber')
        const role = Cookies.get('role')
        const userName = Cookies.get('userName')
        const token = getToken();
        // console.log('role',role);
        useEffect(() => {
            userItrInfo()
            if (role === 'ADMIN') {
            adminData()
            } else {
            userData()
            }
        }, [])

        const userData = async () => {
            try {
            const response = await axios.get(process.env.REACT_APP_API_BASE + `userdata/${userName}`,
                {
                headers: {
                    'Authorization': token,
                },
                }
            );
            setLoading(false);
            setUserData(response.data.yearlyDataDetails)
            setUser(response.data)
            // console.log('itrrequest response',response.data);
            // toast.success("get Successfully!");
            } catch (error) {
            setLoading(false);
            if (error.response && error.response.status === 404) {
                toast.error("Data NOT FOUND!");
            } else {
                toast.error("Network Error");
                console.error(error);
                removeUserSession()
                navigate('/signin')
            }
            }
        }

        const userItrInfo = async () => {
            try {
            const response = await axios.get(process.env.REACT_APP_API_BASE + `user/${userName}/itrinfo`,
                {
                headers: {
                    'Authorization': token,
                },
                }
            );

            setUserItrInfo(response.data)
            // setUser(response.data)
            //console.log('itrrequest userItrInfo',response.data);
            // toast.success("get Successfully!");
            } catch (error) {
            setLoading(false);
            if (error.response && error.response.status === 404) {
                toast.error("Data NOT FOUND!");
            } else {
                toast.error("Network Error");
                console.error(error);
                // navigate('/signin')
            }
            }
        }




        const adminData = async () => {

            try {
            const response = await axios.get(process.env.REACT_APP_API_BASE + `users`,
                {
                headers: {
                    'Authorization': token,
                },
                }
            );
            setLoading(false);
            setAdminData(response.data)
            // setUser(response.data)
            console.log('itrrequest response', response.data);
            // toast.success("get Successfully!");
            } catch (error) {
            setLoading(false);
            if (error.response && error.response.status === 404) {
                toast.error("Data NOT FOUND!");
            } else {
                toast.error("Network Error");
                console.error(error);
                removeUserSession()
                navigate('/signin')
            }
            }
        }

        const handleClose = () => setShow(false);
        const handleShow = (item) => {
            console.log('setIsYear',item.serviceYear);
            setIsYear(item.serviceYear)
            setShow(true);
        };
        // Function to determine style based on payment status
        const getPaymentStatusStyle = (status) => {
            switch (status) {
            case 'PENDING':
                return styles.pendingPayment;
            case 'SUCCESS':
                return styles.successPayment;
            default:
                return {};
            }
        };



        // Payment

        const [filteredData, setFilteredData] = useState(null);
        console.log('filteredData',filteredData);
        
        useEffect(() => {
        
        }, []);
            const handleSubmit = async (item) => {
            console.log('item',item);
            console.log('isUserItrInfo',isUserItrInfo);
            console.log('isUser',isUser);

            const serviceYear = item.serviceYear;

            const filteredYearlyDataDetails = isUser.yearlyDataDetails.filter(
                yearlyData => yearlyData.itrYear === serviceYear
            );
            const newFilteredData = {
                permanentDataDetails: isUser.permanentDataDetails,
                yearlyDataDetails: filteredYearlyDataDetails,
                userId: isUser.userId
            };

            setFilteredData(newFilteredData);

            let paymentAmount;
            try {
                // Fetch the service fee data
                const feeResponse = await axios.get('https://api.toratax.com/toratax/rest/v1.0/fee/findservicefee/ITR_1');
                const feeData = feeResponse.data;

                const salariedStatus = newFilteredData.yearlyDataDetails[0].salaried;
                const feeDetails = feeData.find(fee => salariedStatus === 1 ? fee.categoryId === 1 : fee.categoryId === 2);
                
                paymentAmount = feeDetails.serviceFee;

            } catch (error) {
                console.error('Error fetching service fee:', error);
                toast.error("Unable to fetch service fee. Please try again.");
                return;
            }



            //console.log('paymentAmount',paymentAmount);
            if (typeof window.Razorpay === 'undefined') {
                toast.error("Razorpay SDK is not loaded. Please try again.");
                return;
            }

            const data = JSON.stringify({ amount: paymentAmount });

            try {
                const orderResponse = await axios.post(`${process.env.REACT_APP_API_BASE}payment/createOrder`, data, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token,
                    }
                });
                console.log('orderResponse', orderResponse);

                const options = {
                    key: process.env.REACT_APP_RAZORPAY_KEY_ID,
                    amount: paymentAmount,
                    currency: "INR",
                    name: "ToraTax",
                    description: "Test Transaction",
                    image: "/favicon.png",
                    order_id: orderResponse.data.id,
                    handler: (response) => handlePaymentSuccess(response, orderResponse.data,newFilteredData),
                    prefill: {
                        name: newFilteredData.permanentDataDetails.firstName,
                        email:newFilteredData.permanentDataDetails.emailId,
                        contact: newFilteredData.permanentDataDetails.phoneNumber,
                    },
                    notes: {
                        address: "ToraTax"
                    },
                    theme: {
                        color: "#3399cc"
                    }
                };

                const rzp1 = new window.Razorpay(options);
                rzp1.on("payment.failed", handlePaymentFailure);
                rzp1.open();
            } catch (error) {
                console.error(error);
                toast.error("Unable to create order. Please try again.");
                // Implement removeUserSession if needed
                navigate('/signin');
            }
        };


        const handlePaymentSuccess = async (response, orderResponse,newFilteredData) => {
            console.log('response', response,isUser,orderResponse);
            // toast.success("Payment successful!");

            const paymentData = {
            razorpay_payment_id: response.razorpay_payment_id,
            transactionId: response.razorpay_payment_id,
            amount: orderResponse.amount,
            currency: orderResponse.currency,
            status: "success",
            paymentBy: isUser.permanentDataDetails.firstName + " " + isUser.permanentDataDetails.lastName,
            transactionForYear: newFilteredData.yearlyDataDetails[0].itrYear
            };
            console.log('paymentData', paymentData);

            try {
            const apiResponse = await axios.post(`${process.env.REACT_APP_API_BASE}payment/response`, paymentData, {
                headers: {
                'Authorization': token,
                },
            });
            console.log('Payment response', apiResponse);
            // handleClose(); // Implement handleClose if needed
            userItrInfo()
            } catch (error) {
            // handleClose(); // Implement handleClose if needed
            console.error('Error sending payment response', error);
            toast.error("Failed to send payment response. Please try again.");
            }
        };


        const handlePaymentFailure = (response) => {
            console.error(response);
            toast.error("Payment failed. Please try again.");
        };




        //   download
        const [documents, setDocuments] = useState([]);
        console.log('documents',documents);
        useEffect(() => {
            const fetchDocuments = async () => {
                try {
                    const response = await axios.get('https://api.toratax.com/toratax/rest/v1.0/documenttypes');
                    const data = response.data;
                    const documentsArray = Object.values(data);
                    setDocuments(documentsArray);
                } catch (error) {
                    console.error('Error fetching documents:', error);
                }
            };


                fetchDocuments();
            
        }, []);


        const handleDownload = async (documentTypeId) => {
            try {
                
                const userData = isUserData.find(data => {
                    return data.documentDetails.some(doc => doc.documentTypeId === documentTypeId);
                });
        
                if (!userData) {
                    console.error(`No document found with documentTypeId ${documentTypeId}`);
                    return;
                }
        
                const documentData = userData.documentDetails.find(doc => doc.documentTypeId === documentTypeId);
                if (!documentData) {
                    console.error(`No document found with documentTypeId ${documentTypeId}`);
                    return;
                }
        
                const { documentId, documentName, documentPath } = documentData;
        
                const response = await axios.post(
                    process.env.REACT_APP_API_BASE + 'downloadfile',
                    {
                        documentTypeId: documentTypeId,
                        documentId: documentId,
                        documentName: documentName,
                        documentPath: documentPath
                    },
                    {
                        headers: {
                            'Authorization': token,
                        },
                        responseType: 'blob' 
                    }
                );
        
                console.log('response', response);
        
                if (typeof document !== 'undefined') {
                    const file = new Blob([response.data], { type: response.headers['content-type'] });
                    const fileURL = window.URL.createObjectURL(file);
                    const link = window.document.createElement('a'); 
                    link.href = fileURL;
                    link.setAttribute('download', documentName);
                    window.document.body.appendChild(link); 
                    link.click();
                    link.remove();
                } else {
                    console.error('document is not defined in the current scope');
                }
            } catch (error) {
                console.error('Error downloading document:', error);
            }
        };
        
        
        return (
            <>
            <Toaster position="top-center" reverseOrder={false} />
            <section className=" d-table w-100 bg-primary  " style={{ background: "url('/images/bg.png') center center" }} >
                <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-lg-12 text-center">
                    <div className="pages-heading">
                        <h3 className="fw-bold text-white mb-0 mt-4"> Welcome in ToraTax </h3>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <div className="card public-profile border-0 rounded shadow" style={{ zIndex: "1", top: "75px" }}>
                        <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-3 text-md-start text-center">

                            <svg xmlns="http://www.w3.org/2000/svg" className="avatar avatar-large rounded-circle shadow d-block mx-auto" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 4335 4335" id="avatar"><path fill="#595bd4" d="M2155 4191c1116 0 2021-905 2021-2021S3271 149 2155 149 134 1054 134 2170s905 2021 2021 2021z" class="color6d97b5 svgShape"></path><path fill="#53d86a" d="M2156 1207h14c308 9 555 304 555 667s-247 659-555 667h-15c-351 0-569-345-569-668 0-363 247-659 555-667h15zM914 3737s417-823 719-963c247-114 800-114 1046 0 302 139 719 963 719 963-411 335-929 423-1173 446v8s-25 0-69-3c-44 3-69 3-69 3v-8c-244-23-762-111-1173-446z" class="colore6e6e6 svgShape"></path></svg>
                            {/* <img src="/images/60111.jpg" className="avatar avatar-large rounded-circle shadow d-block mx-auto" alt="" /> */}
                            </div>

                            <div className="col-lg-10 col-md-9">
                            <div className="row align-items-end">
                                <div className="col-md-7 text-md-start text-center mt-4 mt-sm-0">
                                <h3 className="title mb-0">
                                    {firstName} {lastName}
                                </h3>

                                <small className="text-muted h6 me-2 d-block mt-2">Username : {userName} </small>

                                </div>
                                <div className="col-md-5 d-flex justify-content-end">
                                <div>
                                    <small className="text-muted h6 me-2 d-block">Role: {role}</small>
                                    <small className="text-muted h6 me-2 d-block">Email: {emailId !== 'null' ? emailId : "--"}</small>
                                    <small className="text-muted h6 me-2 d-block">Phone: {phoneNumber !== 'null' ? phoneNumber : "--"}</small>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="section mt-60" style={{ marginTop: "100px", minHeight: "60vh" }}>
                <div className="container mt-lg-3">
                <div className="row">


                    <div className="col-lg-12 col-12">


                    <div className="border-bottom pb-4">
                        <div className="row">
                        <div className="col-md-12 mt-4">
                            <div className="border-bottom pb-4">
                            {role === 'admin' ?
                                <h5>Details  </h5>
                                :
                                <h5>ITR Details  </h5>
                            }

                            </div>
                            <div className="table-responsive bg-white shadow rounded mt-4">
                            {role === 'ADMIN' ?
                                //  admin table
                                <>
                                <h4 className='px-3 pt-2'>Users :</h4>
                                <AdminProfile isAdminData={isAdminData} />
                                </>


                                :

                                // user table
                                <table className="table mb-0 table-center">
                                <thead className="bg-light">
                                    <tr>
                                    <th scope="col" className="border-bottom p-3" style={{ maxWidth: "300px" }}>ID</th>
                                    <th scope="col" className="border-bottom p-3 " style={{ maxWidth: "150px" }}>ITR Request Date</th>
                                    <th scope="col" className="border-bottom p-3 text-center " style={{ maxWidth: "150px" }}>Service Year</th>
                                    {/* <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "150px" }}>Request Date</th> */}
                                    <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "100px" }}>Status</th>

                                    <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "100px" }}>Acknowledgement</th>
                                    <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "100px" }}>ITR Form</th>  
                                    <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "100px" }}>Payment</th>
                                    <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "100px" }}>Action</th>

                                    </tr>
                                </thead>
                                <tbody>


                                    {isUserItrInfo.length ? isUserItrInfo.map((item, index) => (
                                    <tr key={index}>
                                        <td className="p-3">{index + 1}</td>
                                        <td className="p-3">
                                        <div className="d-flex">
                                            <span className="text-muted h5"><FaClipboardList /></span>
                                            <div className="flex-1 content ms-3">
                                            <p className="text-primary fw-bold mb-0">
                                                {/* {isUserData.yearlyDataDetails.itrYear} */}

                                                <Moment format="YYYY/MM/DD">
                                                {item.requestedDate}
                                                </Moment>
                                            </p>
                                            {/* <p className="text-muted small mb-1">Document Type: {item.document_type}</p> */}

                                            </div>
                                        </div>

                                        </td>
                                        <td className="text-center small p-3 text-muted fw-bold">
                                        {item.serviceYear}
                                        </td>
                                        {/* <td className="text-center small p-3 text-muted">{item.request_date}</td> */}
                                        <td className="text-center small p-3 text-muted fw-bold text-capitalize">{item.itrFillingStatus}</td>

                                        <td className="text-center fs-4 text-primary" role='button' name='Acknowledgement'
                                        onClick={() => handleDownload(7)}
                                        ><BiDownload/>  </td>
                                        <td className="text-center fs-4 text-primary"name='ITR Form' role='button'
                                          onClick={() => handleDownload(8)}
                                        ><BiDownload/>  </td>
                                        <td className="text-center small p-3 text-muted ">
                                        <span style={getPaymentStatusStyle(item.paymentStatus)} >
                                            <span className='ms-2'>

                                            {item.paymentStatus}
                                            </span>
                                            {/* {item.paymentStatus === 'PENDING' ? <RiSecurePaymentFill  className='fs-4 text-primary' />:<RiSecurePaymentLine className='fs-4 text-success' />}
                                        */}
                                            <span className='me-2'>
                                            {item.paymentStatus === 'PENDING' ? <RiSecurePaymentFill  role='button' className='fs-5 ms-2'onClick={(e)=>handleSubmit(item)} /> : <RiSecurePaymentLine className='fs-5' />}

                                            </span>
                                        </span>
                                        </td>
                                        <td className="text-center small p-3 text-muted">
                                        <div className='d-flex gap-3 justify-content-center align-items-center '>
                                            <div className='cursor-pointer'  onClick={(e)=>handleShow(item)}>
                                            <GrDocumentImage className='text-warning fs-5' role="button" />
                                            </div>

                                            {/* <LiaEdit className='text-success '/> */}
                                            {/* <AiOutlineDelete className='text-danger fs-4' role="button" /> */}


                                        </div>
                                        </td>

                                    </tr>
                                    ))
                                    :
                                    <tr>
                                        <td>
                                        <h5> data not avilable </h5>

                                        </td>
                                    </tr>
                                    }


                                </tbody>
                                </table>

                            }
                            </div>


                        </div>


                        </div>
                    </div>

                    </div>
                </div>
                </div>
            </section>
            <DocumentShowModal show={show} handleClose={handleClose} isYear={isYear} setIsYear={setIsYear} permanentDataDetails={isUser.permanentDataDetails} yearlyDataDetails={isUser.yearlyDataDetails} />
            </>
        )
        }

        export default Profile
