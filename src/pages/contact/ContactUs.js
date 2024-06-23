import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
const ContactUs = () => {

    const {
        register,
        handleSubmit,
    } = useForm()


    const onSubmit = (data)=>{
        console.log("Contact us Form data",data );
    }
  return (
    <>
      <section class="section py-5 hero-margin">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 ">
                        <div class="card border-0 text-center features feature-primary feature-clean">
                            <div class="icons p-3 rounded text-center mx-auto">
                                <span class="  rounded h3 mb-0"><FiPhone/></span>
                            </div>
                            <div class="content mt-4">
                                <h5 class="fw-bold">Phone</h5>
                                <p class="text-muted">Start working with ToraTax that can 
                                <br/>
                                provide everything</p>
                                <Link href="tel:9990670020" class="read-more">9990670020</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 mt-3 mt-sm-0 pt-2 pt-sm-0 ">
                        <div class="card border-0 text-center features feature-primary feature-clean">
                            <div class="icons p-3 rounded text-center mx-auto">
                                <span class=" rounded h3 mb-0"><MdOutlineMail/></span>
                            </div>
                            <div class="content mt-4">
                                <h5 class="fw-bold">Email</h5>
                                <p class="text-muted">Contact with an email if you need
                                <br/>
                                any information.</p>
                                <Link href="mailto:contact@toratax.com" class="read-more">Contact@toratax.com</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="card border-0 text-center features feature-primary feature-clean">
                            <div class="icons p-3 rounded text-center mx-auto">
                                <span class=" rounded h3 mb-0"><IoLocationOutline/></span>
                            </div>
                            <div class="content mt-4">
                                <h5 class="fw-bold">Location</h5>
                                <p class="text-muted">Near Vivekanand School, Bhagwatiganj, Balrampur,<br/> UP 271201, India </p>
                                <Link href="#"
                                    data-type="iframe" class="">View on Google map</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-6 pt-2 pt-sm-0 order-2 order-md-1">
                        <div class="card shadow rounded border-0 mx-auto w-75">
                            <div class="card-body py-5">
                                <h4 class="card-title">Get In Touch !</h4>
                                <div class="custom-form mt-3">
                                <ul className="contact-info__list list-style--none position-relative z-index-101">
                                    <li className="mb-4 pl-4">
                                        <span className="position-absolute"><FaEnvelope /></span> support@toratax.com
                                    </li>
                                    <li className="mb-4 pl-4">
                                        <span className="position-absolute"><FaPhone /></span> 9990670020
                                    </li>
                                    <li className="mb-4 pl-4">
                                        <span className="position-absolute"><FaLocationDot /></span> TorTax 
                                        <br/>Near Vivekanand School, Bhagwatiganj, Balrampur,
                                        <br/> UP 271201, India 
                                        <div className="mt-3"></div>
                                    </li>
                                </ul>
                                    {/* <form name="myForm" id="myForm" onSubmit={handleSubmit(onSubmit)}>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Your Name <span class="text-danger">*</span></label>
                                                    <div class=" position-relative">
                                                        
                                                        <input name="name" id="name" type="text" class="form-control " placeholder="Name :" {...register('name')}/>
                                                        
                                                    </div>
                                                </div>
                                            </div>
        
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Your Email <span class="text-danger">*</span></label>
                                                    <div class=" position-relative">
                                                        <input name="email" id="email" type="email" class="form-control " placeholder="Email :" {...register('email')}/>
                                                        
                                                        
                                                    </div>
                                                </div> 
                                            </div>
        
                                            <div class="col-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Subject</label>
                                                    <div class=" position-relative">
                                                        <input name="subject" id="subject" class="form-control " placeholder="subject :" {...register("subject")}/>
                                                        
                                                    </div>
                                                </div>
                                            </div>
        
                                            <div class="col-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Comments <span class="text-danger">*</span></label>
                                                    <div class=" position-relative">
                                                        <textarea name="comments" id="comments" rows="4" class="form-control " placeholder="Message :" {...register("message")}/>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <button type="submit" id="submit" name="send" class="btn btn-primary">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-7 col-md-6 order-1 order-md-2">
                        <div class="card border-0  " >
                            <div class="card-body p-0">
                                <img src="/images/contact.svg" class="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
        </section> 
    </>
  )
}

export default ContactUs
