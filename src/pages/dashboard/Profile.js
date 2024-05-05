import React from 'react'
import { FaInstagram, FaLinkedinIn, FaClipboardList, FaUserEdit, FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
const Profile = () => {
  return (
    <>
      <section className=" d-table w-100 bg-primary  " style={{ background: "url('/images/bg.png') center center" }} >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card public-profile border-0 rounded shadow" style={{ zIndex: "1", top: "75px" }}>
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
                            <li className="list-inline-item me-2"><Link to="#" className="text-muted gap-2" title="Instagram"><FaInstagram />Karan_Sharma</Link></li>
                            <li className="list-inline-item"><Link to="#" className="text-muted" title="Linkedin"><FaLinkedinIn />Karan Sharma</Link></li>
                          </ul>
                        </div>
                        <div className="col-md-5 text-md-end text-center">
                          <ul className="list-unstyled social-icon social mb-0 mt-4">
                            <li className="list-inline-item"><Link to="#" className="rounded" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add Friend"><i className="uil uil-user-plus align-middle"></i></Link></li>
                            <li className="list-inline-item"><Link to="#" className="rounded" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Messages"><i className="uil uil-comment align-middle"></i></Link></li>
                            <li className="list-inline-item"><Link to="#" className="rounded" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Notifications"><i className="uil uil-bell align-middle"></i></Link></li>
                            <li className="list-inline-item"><Link to="account-setting.html" className="rounded" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Settings"><i className="uil uil-cog align-middle"></i></Link></li>
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

      <section className="section mt-60" style={{marginTop:"100px"}}>
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
                    
                    <div className="mt-4  p-3 rounded shadow">
                    <h5>Personal Details :</h5>
                      <div className="d-flex align-items-center my-4">
                        <i data-feather="mail" className="fea icon-ex-md text-muted me-3"></i>
                        <div className="flex-1">
                          <h6 className="text-primary mb-0">Email :</h6>
                          <Link to="#" className="text-muted">karan@mail.com</Link>
                        </div>
                      </div>
                     
                      <div className="d-flex align-items-center mt-3">
                        <i data-feather="gift" className="fea icon-ex-md text-muted me-3"></i>
                        <div className="flex-1">
                          <h6 className="text-primary mb-0">Pan Card Number :</h6>
                          <p className="text-muted mb-0">RDCR5566</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <i data-feather="map-pin" className="fea icon-ex-md text-muted me-3"></i>
                        <div className="flex-1">
                          <h6 className="text-primary mb-0">Location :</h6>
                          <Link to="#" className="text-muted">Noida, UP</Link>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <i data-feather="phone" className="fea icon-ex-md text-muted me-3"></i>
                        <div className="flex-1">
                          <h6 className="text-primary mb-0">Phone No :</h6>
                          <Link to="#" className="text-muted"> 000 000 0000</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-md-6 mt-4 pt-2 pt-sm-0">
                    <h5>Lorem :</h5>

                    <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow mt-4">
                      <img src="/images/07.jpg" className="avatar avatar-ex-sm rounded-pill" alt="" />
                      <div className="flex-1 content ms-3">
                        <h4 className="title mb-0">Lorem</h4>
                        <p className="text-muted mb-0">Lorem Ipsum is simply dummy</p>
                        <p className="text-muted mb-0"><Link to="#" className="read-more">Lorem Ipsum</Link> @dummy, dummy</p>
                      </div>
                    </div>
                    <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow mt-4">
                      <img src="/images/07.jpg" className="avatar avatar-ex-sm rounded-pill" alt="" />
                      <div className="flex-1 content ms-3">
                        <h4 className="title mb-0">Lorem</h4>
                        <p className="text-muted mb-0">Lorem Ipsum is simply dummy</p>
                        <p className="text-muted mb-0"><Link to="#" className="read-more">Lorem Ipsum</Link> @dummy, dummy</p>
                      </div>
                    </div>
                    <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow mt-4">
                      <img src="/images/07.jpg" className="avatar avatar-ex-sm rounded-pill" alt="" />
                      <div className="flex-1 content ms-3">
                        <h4 className="title mb-0">Lorem</h4>
                        <p className="text-muted mb-0">Lorem Ipsum is simply dummy</p>
                        <p className="text-muted mb-0"><Link to="#" className="read-more">Lorem Ipsum</Link> @dummy, dummy</p>
                      </div>
                    </div>

                    
                  </div> */}
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
