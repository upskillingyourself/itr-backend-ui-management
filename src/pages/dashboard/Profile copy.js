import React, { useEffect, useState } from 'react'
import { FaInstagram, FaLinkedinIn, FaClipboardList, FaUserEdit, FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";
import { BiSolidEdit } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { getToken } from '../../utils/common';
const jsonData = [
  {
    "id": 1,
    "name": "Karan Sharma",
    "type": "Salried",
    "location": "Noida, UP 6654",
    "date": "15/04/2024"
  },
  {
    "id": 2,
    "name": "Preeti Singh",
    "type": "Non-Salried",
    "location": "Delhi",
    "date": "01/04/2024"
  },
  {
    "id": 3,
    "name": "John Doe",
    "type": "Freelancer",
    "location": "New York",
    "date": "12/05/2024"
  },
  {
    "id": 4,
    "name": "Emily Smith",
    "type": "Salried",
    "location": "Los Angeles",
    "date": "20/04/2024"
  },
  {
    "id": 5,
    "name": "David Johnson",
    "type": "Non-Salried",
    "location": "Chicago",
    "date": "05/05/2024"
  }
]

const rtr_requests = [
  {
    "request_id": "RTR2024-001",
    "request_date": "2024-04-15",
    "document_type": "Tax Return",
    "status": "Completed",
    "processing_time": "3 days",
    "outcome": "Successfully filed",
    "filing_reference_number": "FIL2024-001",
    "comments": "Client provided all necessary documents.",
    "follow_up_action": "",
    "contact_person": "John Doe",
    "payment_status": "Paid"
  },
  {
    "request_id": "RTR2024-002",
    "request_date": "2024-04-28",
    "document_type": "Financial Statement",
    "status": "Pending",
    "processing_time": "",
    "outcome": "",
    "filing_reference_number": "",
    "comments": "Awaiting additional documents from the client.",
    "follow_up_action": "Sent reminder email to the client.",
    "contact_person": "Jane Smith",
    "payment_status": "Pending"
  }
]

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [isUserData, setUserData] = useState();
console.log('isUserData',isUserData);
 console.log('isUserData',isUserData);
  const firstName = Cookies.get('firstName')
  const lastName = Cookies.get('lastName')
  const emailId = Cookies.get('emailId')
  const phoneNumber = Cookies.get('phoneNumber')
  const role = Cookies.get('role')
  const userName = Cookies.get('userName')
  const token = getToken();

  useEffect( ()=>{
    console.log();

    userData()

  },[])

  const userData = async()=>{
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
      console.log('itrrequest response',response.data.yearlyDataDetails);
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
  }
 
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

                      <svg xmlns="http://www.w3.org/2000/svg"  className="avatar avatar-large rounded-circle shadow d-block mx-auto" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 4335 4335" id="avatar"><path fill="#595bd4" d="M2155 4191c1116 0 2021-905 2021-2021S3271 149 2155 149 134 1054 134 2170s905 2021 2021 2021z" class="color6d97b5 svgShape"></path><path fill="#53d86a" d="M2156 1207h14c308 9 555 304 555 667s-247 659-555 667h-15c-351 0-569-345-569-668 0-363 247-659 555-667h15zM914 3737s417-823 719-963c247-114 800-114 1046 0 302 139 719 963 719 963-411 335-929 423-1173 446v8s-25 0-69-3c-44 3-69 3-69 3v-8c-244-23-762-111-1173-446z" class="colore6e6e6 svgShape"></path></svg>
                      {/* <img src="/images/60111.jpg" className="avatar avatar-large rounded-circle shadow d-block mx-auto" alt="" /> */}
                    </div>

                    <div className="col-lg-10 col-md-9">
                      <div className="row align-items-end">
                        <div className="col-md-7 text-md-start text-center mt-4 mt-sm-0">
                          <h3 className="title mb-0">
                            {firstName} {lastName}
                            </h3>
                          {/* <small className="text-muted h6 me-2">Noida, Uttar Pradesh,22663</small> */}
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
              {/* <div className="border-bottom pb-4">
                <h5>Karan Sharma</h5>
                <p className="text-muted mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
              </div> */}

              <div className="border-bottom pb-4">
                <div className="row">
                  <div className="col-md-12 mt-4">
                    <div className="border-bottom pb-4">
                      <h5>RTR Details  </h5>
                    </div>
                    <div className="table-responsive bg-white shadow rounded mt-4">
                      <table className="table mb-0 table-center">
                        <thead className="bg-light">
                          <tr>
                            <th scope="col" className="border-bottom p-3" style={{ maxWidth: "300px" }}>ID</th>
                            <th scope="col" className="border-bottom p-3 " style={{ maxWidth: "150px" }}>Request Id/Type</th>
                            <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "150px" }}>Request Date</th>
                            <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "100px" }}>Status</th>
                            {/* <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "100px" }}>InDate</th> */}
                            <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "100px" }}>Comments</th>
                            <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "100px" }}>Payment</th>
                            {/* <th scope="col" className="border-bottom p-3 text-end ">Actions</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {/* {jsonData.map((item, index) => (
                      <tr key={index}>
                        <td className="p-3">
                          <div className="d-flex">
                            <span className="text-muted h5"><FaClipboardList /></span>
                            <div className="flex-1 content ms-3">
                              <a href={`forums-topic.html?id=${item.id}`} className="forum-title text-primary fw-bold text-decoration-none">{item.name}</a>
                              <p className="text-muted small mb-0 mt-1">{item.location}</p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center small p-3 h6 text-muted">{item.type}</td>
                        <td className="text-center small p-3 text-muted">{item.date}</td>
                        <td className="small p-3 text-end">
                          <div className='d-flex gap-3 justify-content-end'>
                            <span className='text-muted h5'><FaUserEdit /></span>
                            <span className='text-muted h5'><MdDelete /></span>
                          </div>
                        </td>
                      </tr>
                    ))} */}
                          {/* Assuming 'data' is your array of items */}
                          {rtr_requests.map((item, index) => (
                            <tr key={index}>
                              <td className="p-3">{index + 1}</td>
                              <td className="p-3">
                                <div className="d-flex">
                                  <span className="text-muted h5"><FaClipboardList /></span>
                                  <div className="flex-1 content ms-3">
                                    <p className="text-primary fw-bold mb-0">ITR RequestYear: 
                                    {/* {isUserData.yearlyDataDetails.itrYear} */}
                                    {/* {item.request_id} */}
                                    </p>
                                    <p className="text-muted small mb-1">Document Type: {item.document_type}</p>
                                    {/* <p className="text-muted small mb-0">Status: {item.status}</p> */}
                                  </div>
                                </div>

                              </td>
                              <td className="text-center small p-3 text-muted">{item.request_date}</td>
                              <td className="text-center small p-3 text-muted">{item.status}</td>
                              {/* <td className="text-center small p-3 text-muted">{item.filing_reference_number}</td> */}
                              <td className="text-center small p-3 text-muted">{item.comments}</td>
                              <td className="text-center small p-3 text-muted">{item.payment_status}</td>
                              {/* <td className="small p-3 text-end">
                                <div className='d-flex gap-3 justify-content-end'>
                                  <span className='text-muted h5'><FaUserEdit /></span>
                                  <span className='text-muted h5'><MdDelete /></span>
                                </div>
                              </td> */}
                            </tr>
                          ))}


                        </tbody>
                      </table>
                    </div>

                    {/* <div className="mt-4  p-3 rounded shadow">
                      <h5>Personal Details :</h5>
                      <div className="d-flex align-items-center my-4">
                        <i data-feather="mail" className="fea icon-ex-md text-muted me-3"></i>
                        <div className="flex-1">
                          <h6 className="text-primary mb-0">Email :</h6>
                          <Link to="#" className="text-muted">karan@mail.com</Link>
                        </div>
                      </div>
                    </div> */}
                  </div>


                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile
