import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-bar mt-5">
                <div className="footer-py-30">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-sm-3">
                                <div className="text-sm-start">
                                    <Link className="navbar-brand" to="/dashboard">
                                        <h3>
                                            Tora<span className=' text-warning'>Tax</span>
                                        </h3>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="text-center">
                                    <p className="mb-0">© {new Date().getFullYear()} ToraTax. </p>
                                </div>
                            </div>

                            <div className="col-sm-3 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <ul className="text-sm-end mb-0 d-flex justify-content-end gap-3">
                                    {/* <li className="list-inline-item mb-0 rounded"><Link to="#" className="rounded text-white text-decoration-none"><FaInstagram /></Link></li>
                                    <li className="list-inline-item mb-0 rounded"><Link to="#" className="rounded text-white"><FaTwitter /></Link></li>
                                    <li className="list-inline-item mb-0 rounded"><Link to="#" className="rounded text-white"><FaLinkedinIn /></Link></li>
                                    <li className="list-inline-item mb-0 rounded"><Link to="#" className="rounded text-white"><FaFacebook /></Link></li> */}
                                    <li className="list-inline-item mb-0 rounded"><Link to="/privacy-policy" className='text-align-center text-decoration-none text-white'>Privacy Policy</Link>
                                </li>
                                <li className="list-inline-item mb-0 rounded"><Link to="#" className='text-align-center text-decoration-none text-white'>Terms & Condations</Link>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
