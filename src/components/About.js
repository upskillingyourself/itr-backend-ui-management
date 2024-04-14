import React from 'react'
import { Link } from 'react-router-dom'
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GrTechnology } from "react-icons/gr";
import { MdSecurity } from "react-icons/md";
import { FaAccusoft } from "react-icons/fa";
const About = () => {
    return (
        <>
            <section className='py-5' id='about' style={{ backgroundColor: "rgba(244, 247, 250)" }}>
                <div className="container" style={{ marginTop: "80px", marginBottom: "80px" }}>
                    <div className='mx-auto w-75 mb-4'>
                        <h1 className='text-center '> <span className='active'>About Us</span> </h1>
                    </div>
                    <div class="container" style={{ marginTop: "50px" }}>
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-6 col-12 order-2 order-md-1 mt-md-4">
                                <div class="section-title ml-lg-5">
                                    {/* <h5 class="text-primary font-weight-normal mb-3">About Us</h5> */}
                                    <h4 class="title mb-4">
                                        Our mission is to <br />
                                        make your life easier.
                                    </h4>
                                    <p class="text-muted mb-0">TORATAX is an online platform that provide assistance to taxpayers in filing their income tax returns. </p>

                                    <div class="row">
                                        <div class="col-lg-6 mt-4 pt-2">
                                            <Link to="/about-us" class="text-dark text-decoration-none">
                                                <div class=" d-flex gap-3 media align-items-center rounded shadow p-3">
                                                    <VscWorkspaceTrusted />
                                                    <h6 class="ml-3 mb-0">Trusted reputation </h6>
                                                </div>
                                            </Link>
                                        </div>
                                        <div class="col-lg-6 mt-4 pt-2">
                                            <Link to="/about-us" class="text-dark text-decoration-none">
                                                <div class=" d-flex gap-3 media align-items-center rounded shadow p-3">
                                                    <GrTechnology />
                                                    <h6 class="ml-3 mb-0">Advanced Technology </h6>
                                                </div>
                                            </Link>
                                        </div>
                                        <div class="col-lg-6 mt-4 pt-2">
                                            <Link to="/about-us" class="text-dark text-decoration-none">
                                                <div class=" d-flex gap-3  media align-items-center rounded shadow p-3">
                                                    <MdSecurity />
                                                    <h6 class="ml-3 mb-0">Security </h6>
                                                </div>
                                            </Link>
                                        </div>
                                        <div class="col-lg-6 mt-4 pt-2">
                                            <Link to="/about-us" class=" text-dark text-decoration-none">
                                                <div class="d-flex gap-3  media align-items-center rounded shadow p-3">
                                                    <FaAccusoft />
                                                    <h6 class="ml-3 mb-0">Accuracy </h6>
                                                </div>
                                            </Link>
                                        </div>

                                    </div>
                                    <div className=' mt-5 '>
                                        <Link to="/about-us" class="btn btn-primary  p-2 float-right text-decoration-none">
                                            Know More About Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 order-1 order-md-2 mt-4 pt-2 mt-sm-0 mb-4 opt-sm-0" >
                                <div class="row align-items-center">
                                    <div class="col-lg-6 col-md-6 col-6">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 mt-4 pt-2">
                                                <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                                    <img src="images/img1.avif" class="img-fluid" alt="Image" />
                                                    <div class="img-overlay bg-dark"></div>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 mt-4 pt-2">
                                                <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                                    <img src="images/img1.avif" class="img-fluid" alt="Image" />
                                                    <div class="img-overlay bg-dark"></div>
                                                </div>
                                            </div>



                                            {/* <div class="col-12">
                                                <div class="mt-4 pt-2 text-right">
                                                    <Link to="/about-us" class="btn btn-primary">Read More <i class="mdi mdi-chevron-right"></i></Link>
                                                </div>
                                            </div> */}
                                        </div>

                                    </div>


                                    <div class="col-lg-6 col-md-6 col-6">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12">
                                                <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                                    <img src="images/img1.avif" class="img-fluid" alt="Image" />
                                                    <div class="img-overlay bg-dark"></div>
                                                </div>
                                            </div>


                                            <div class="col-lg-12 col-md-12 mt-4 pt-2">
                                                <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                                    <img src="images/img1.avif" class="img-fluid" alt="Image" />
                                                    <div class="img-overlay bg-dark"></div>
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

        </>
    )
}

export default About
