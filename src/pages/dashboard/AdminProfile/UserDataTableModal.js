
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaClipboardList } from 'react-icons/fa'
import { GrDocumentImage } from 'react-icons/gr'
import { RiSecurePaymentFill, RiSecurePaymentLine } from 'react-icons/ri'
import Moment from 'react-moment'
import { getToken } from '../../../utils/common'
import DocumentShowModal from '../../../components/Modals/DocumentShowModal'

const UserDataTableModal = ({ showModal, handleCloseUserModal,user}) => {
  const [isUserItrInfo, setUserItrInfo] = useState([]);
  const [isUserDocumentDetails, setUserDocumentDetails] = useState();
  const [isYear,setIsYear]=useState()
  const [show, setShow] = useState(false);

  const [isUser, setUser] = useState({});
  const [isUserData, setUserData] = useState();
  const token = getToken();
  
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    handleCloseUserModal()
    setIsYear(item.serviceYear)
       setShow(true);
  };
  useEffect( ()=>{
    userItrInfo()
    userData()
  },[user])
  const userData = async()=>{
    try {
    const response = await axios.get(process.env.REACT_APP_API_BASE + `userdata/${user}`,
    {
      headers: {
        'Authorization': token,
      },
    }
    );
    //setLoading(false);
    setUserData(response.data.yearlyDataDetails)
    
    setUser(response.data)
    console.log('itrrequest response',response.data);
    // toast.success("get Successfully!");
  } catch (error) {
   // setLoading(false);
    if (error.response && error.response.status===404) {
      toast.error("Data NOT FOUND!");
    } else {
      toast.error("Network Error");
      console.error(error);
      // removeUserSession()
     //  navigate('/signin')
    }
  }
}

  const userItrInfo = async()=>{
    try {
    const response = await axios.get(process.env.REACT_APP_API_BASE + `user/${user}/itrinfo`,
    {
      headers: {
        'Authorization': token,
      },
    }
    );
    
    setUserItrInfo(response.data)
    setUserDocumentDetails(response.data.yearlyDataDetails)
    // setUser(response.data)
    console.log('itrrequest userItrInfo',response.data);
    // toast.success("get Successfully!");
  } catch (error) {
    
    if (error.response && error.response.status===404) {
      toast.error("Data NOT FOUND!");
    } else {
      toast.error("Network Error");
      console.error(error);
      // navigate('/signin')
    }
  }
}
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

const styles = {
  pendingPayment: {
    backgroundColor: '#fcd1d1',
    color: 'darkred',
    borderRadius:'12px ',
    padding:'5px',
    fontWeight:'500'
    
  },
  successPayment: {
    backgroundColor: 'lightgreen',
    color: 'darkgreen'
  },
 
}
  return (
    <div>
       <Modal
      size="xl" show={showModal} onHide={handleCloseUserModal}
      aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title>
          User Name { ' '}
          <span className='text-primary'>
          {user}
          </span>

        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
      <table className="table mb-0 table-center">
                      <thead className="bg-light">
                        <tr>
                          <th scope="col" className="border-bottom p-3" style={{ maxWidth: "300px" }}>ID</th>
                          <th scope="col" className="border-bottom p-3 " style={{ maxWidth: "150px" }}>ITR Request date</th>
                          <th scope="col" className="border-bottom p-3 text-center " style={{ maxWidth: "150px" }}>Service Year</th>
                          {/* <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "150px" }}>Request Date</th> */}
                          <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "100px" }}>Status</th>
                         
                          {/* <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "100px" }}>Comments</th> */}
                          <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "100px" }}>Payment</th>
                          <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "100px" }}>Action</th>
                         
                        </tr>
                      </thead>
                      <tbody>
                      
                        
                        { isUserItrInfo.length ? isUserItrInfo.map((item, index) => (
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
                            
                            {/* <td className="text-center small p-3 text-muted">empty <span role="button"><MdOutlineEdit/></span></td> */}
                            <td className="text-center small p-3 text-muted ">
                              <span  style={getPaymentStatusStyle(item.paymentStatus)}>
                                <span className='ms-2'>
                                  
                                  {item.paymentStatus}
                                  </span>
                                 {/* {item.paymentStatus === 'PENDING' ? <RiSecurePaymentFill  className='fs-4 text-primary' />:<RiSecurePaymentLine className='fs-4 text-success' />}
                                  */}
                                  <span  className='me-2'>
                               {item.paymentStatus === 'PENDING' ? <RiSecurePaymentFill className='fs-5 ms-2' />:<RiSecurePaymentLine className='fs-5'/>}

                                  </span>
                              </span>   
                            </td>
                            <td className="text-center small p-3 text-muted">
                              <div className='d-flex gap-3 justify-content-center align-items-center '>
                                <div  className='cursor-pointer' onClick={(e) => handleShow(item)}>
                                  <GrDocumentImage className='text-warning fs-5' role="button"/>
                                </div>
                                  
                               {/* <LiaEdit className='text-success '/> */}
                               {/* <AiOutlineDelete className='text-danger fs-4' role="button"/> */}


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

      </Modal.Body>
      {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
    </Modal>
    <DocumentShowModal show={show} handleClose={handleClose} isYear={isYear} setIsYear={setIsYear} permanentDataDetails = {isUser.permanentDataDetails} yearlyDataDetails={isUser.yearlyDataDetails} selectedUser={user}/>
    </div>
  )
}

export default UserDataTableModal
