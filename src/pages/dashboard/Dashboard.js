import React from 'react'
import { FaInstagram,FaLinkedinIn,FaClipboardList,FaUserEdit,FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
const jsonData=  [
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
const Dashboard = () => {
  return (
    <>
     <section className="bg-half-170 bg-primary d-table w-100" style={{ background: "url('/images/bg.png') center center" }}>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="pages-heading">
                <h3 className="fw-bold text-white mb-0 mt-4"> Welcome in Toratax </h3>
              </div>
            </div>
          </div>
          {/* profile */}
          <section className=" d-table w-100  " >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card public-profile border-0 rounded shadow" style={{ zIndex: "1",top:"75px" }}>
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-lg-2 col-md-3 text-md-start text-center">
                          <img src="/images/07.jpg" className="avatar avatar-large rounded-circle shadow d-block mx-auto" alt="" />
                        </div>

                        <div className="col-lg-10 col-md-9">
                          <div className="row align-items-end">
                            <div className="col-md-7 text-md-start text-center mt-4 mt-sm-0">
                              <h3 className="title mb-0">Karan Sharma</h3>
                              <small className="text-muted h6 me-2">Noida, Uttar Pradesh,22663</small>
                              <ul className="list-inline mb-0 mt-3">
                                <li className="list-inline-item me-2"><Link href="#" className="text-muted gap-2" title="Instagram"><FaInstagram/>Karan_Sharma</Link></li>
                                <li className="list-inline-item"><Link href="#" className="text-muted" title="Linkedin"><FaLinkedinIn/>Karan Sharma</Link></li>
                              </ul>
                            </div>
                            <div className="col-md-5 text-md-end text-center">
                              <ul className="list-unstyled social-icon social mb-0 mt-4">
                                <li className="list-inline-item"><Link href="#" className="rounded" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add Friend"><i className="uil uil-user-plus align-middle"></i></Link></li>
                                <li className="list-inline-item"><Link href="#" className="rounded" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Messages"><i className="uil uil-comment align-middle"></i></Link></li>
                                <li className="list-inline-item"><Link href="#" className="rounded" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Notifications"><i className="uil uil-bell align-middle"></i></Link></li>
                                <li className="list-inline-item"><Link href="account-setting.html" className="rounded" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Settings"><i className="uil uil-cog align-middle"></i></Link></li>
                              </ul>
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
        </div>
      </section>
      <section className="section " style={{ marginTop: "80px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="table-responsive bg-white shadow rounded mt-4">
                <table className="table mb-0 table-center">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-bottom p-3" style={{ maxWidth: "300px" }}>Name</th>
                      <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "150px" }}>Type</th>
                      <th scope="col" className="border-bottom p-3 text-center" style={{ maxWidth: "100px" }}>InDate</th>
                      <th scope="col" className="border-bottom p-3 text-end h5 ml-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jsonData.map((item, index) => (
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
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;

