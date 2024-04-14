import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

// Sample JSON data
const tableData = [
    {
        id: 1,
        title: "Introductions",
        description: "Online return filing streamlines the entire process, saving users valuable time compared to traditional paper-based methods."
    },
    {
        id: 2,
        title: "Accuracy",
        description: " Automated calculations and validation checks minimize errors, ensuring accurate filing and reducing the risk of penalties."

    },
    {
        id: 3,
        title: "Convenience",
        description: " : Users can file their returns from anywhere with an internet connection, eliminating the need to visit physical tax offices."

    },
    {
        id: 4,
        title: "Cost-effective  ",
        description: " Online filing often incurs lower fees compared to hiring professional tax preparers or purchasing software."

    }

];

const AboutUs = () => {
    const [visibleRows, setVisibleRows] = useState([]);

    const toggleBodyVisibility = (id) => {
        if (visibleRows.includes(id)) {
            setVisibleRows(visibleRows.filter(rowId => rowId !== id));
        } else {
            setVisibleRows([...visibleRows, id]);
        }
    };

    return (
        <>
            <section className="section" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mt-4 pt-2">
                                <h4 className="fs-2 mb-4">About Us</h4>
                                <p className="text-muted">
                                    TORATAX is an online platform that provides assistance to taxpayers in filing their income tax returns.
                                </p>
                                <p className="text-muted">
                                    The platform boasts a team of experts in finance and taxation,
                                    Emphasizing the combination of technology and subject matter expertise as the key factors that make TORATAX stand out as the best online assisted filing platform.
                                </p>
                                <p className="text-muted">
                                    The platform boasts a team of experts in finance and taxation,
                                    Emphasizing the combination of technology and subject matter expertise as the key factors that make TORATAX stand out as the best online assisted filing platform.
                                </p>
                                <p className="text-muted">
                                    The platform boasts a team of experts in finance and taxation,
                                    Emphasizing the combination of technology and subject matter expertise as the key factors that make TORATAX stand out as the best online assisted filing platform.
                                </p>
                                

                            </div>

                            <div className="section-title mt-4 pt-2">
                                <h4 className=" mb-0 fs-3">Key Benefits</h4>

                                <div className="row" >

                                    {tableData.map((data) => (
                                        <div className="col-md-6 mt-4 pt-2" key={data.id}>

                                            <div className=''>
                                                {/* <h5 className="mb-0">{data.title}</h5> */}

                                                <div className="table-responsive bg-white shadow-sm rounded mt-4">
                                                    <table className="table mb-0 table-center">
                                                        <thead onClick={() => toggleBodyVisibility(data.id)} style={{ cursor: 'pointer' }}>
                                                            <tr>
                                                                <th scope="col" className="h5 border-bottom text-muted py-4 px-3" style={{ minWidth: "100px" }}>{data.title}</th>
                                                                <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3 text-end">{visibleRows.includes(data.id) ? <FaChevronUp /> : <FaChevronDown />}</th>
                                                            </tr>
                                                        </thead>

                                                        {visibleRows.includes(data.id) && (
                                                            <tbody>
                                                                <tr>
                                                                    <th className="p-3">
                                                                        <div className="align-items-center">
                                                                            <i className="uil uil-notes h6"></i>
                                                                            <p className="mb-0 d-inline fw-normal h6 text-muted">{data.description}</p>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </tbody>
                                                        )}
                                                    </table>
                                                </div>
                                            </div>

                                        </div>

                                    ))}
                                </div>
                            </div>


                            {/* Other sections */}
                            <div class="section-title mt-4 pt-2 bg-white">
                                <h4 class="fs-3 mb-0">Points of Differentiation</h4>

                                <div class="d-md-flex align-items-center mt-4 pt-2">
                                    <img src="" class="avatar avatar-medium rounded-pill" alt="" />

                                    <div class="ms-md-3 mt-4 mt-sm-0">
                                        <Link to="" class="text-dark h5 text-decoration-none">Advanced technology :</Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">
                                            Advanced technology: Leveraging cutting-edge software and algorithms, the product offers superior accuracy, speed, and convenience compared to competitors.
                                            User-centric design: The platform prioritizes user experience, with a focus on intuitive interfaces, comprehensive guidance, and responsive support, setting it apart from less user-friendly alternatives.
                                            Trusted reputation: The product has received accolades, testimonials, and certifications attesting to its reliability, security, and effectiveness, enhancing its credibility and trustworthiness among potential customers.
                                        </p>
                                        <Link to="" class="text-dark h5 text-decoration-none "> User-centric design :</Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">
                                            Advanced technology: Leveraging cutting-edge software and algorithms, the product offers superior accuracy, speed, and convenience compared to competitors.
                                            User-centric design: The platform prioritizes user experience, with a focus on intuitive interfaces, comprehensive guidance, and responsive support, setting it apart from less user-friendly alternatives.
                                            Trusted reputation: The product has received accolades, testimonials, and certifications attesting to its reliability, security, and effectiveness, enhancing its credibility and trustworthiness among potential customers.
                                        </p>
                                        <Link to="" class="text-dark h5 text-decoration-none">Trusted reputation :</Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">
                                            Advanced technology: Leveraging cutting-edge software and algorithms, the product offers superior accuracy, speed, and convenience compared to competitors.
                                            User-centric design: The platform prioritizes user experience, with a focus on intuitive interfaces, comprehensive guidance, and responsive support, setting it apart from less user-friendly alternatives.
                                            Trusted reputation: The product has received accolades, testimonials, and certifications attesting to its reliability, security, and effectiveness, enhancing its credibility and trustworthiness among potential customers.
                                        </p>
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

export default AboutUs;
