import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

// Sample JSON data
const tableData = [
    {
        id: 1,
        title: "Time-saving ",
        description: " Online return filing streamlines the entire process, saving users valuable time compared to traditional paper-based methods.	"
    },
    {
        id: 2,
        title: "Accuracy",
        description: " Automated calculations and validation checks minimize errors, ensuring accurate filing and reducing the risk of penalties."

    },
    {
        id: 3,
        title: "Convenience",
        description: " Users can file their returns from anywhere with an internet connection, eliminating the need to visit physical tax offices."

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
            <section className="section  py-5 " style={{ minHeight: "100vh" }} >
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
                                {/* <p className="text-muted">
                                    The platform boasts a team of experts in finance and taxation,
                                    Emphasizing the combination of technology and subject matter expertise as the key factors that make TORATAX stand out as the best online assisted filing platform.
                                </p>
                                <p className="text-muted">
                                    The platform boasts a team of experts in finance and taxation,
                                    Emphasizing the combination of technology and subject matter expertise as the key factors that make TORATAX stand out as the best online assisted filing platform.
                                </p> */}
                                <h3 className='mt-4'> Here are a few potential benefits and features that you might want to consider highlighting																</h3>
                                <p className='mt-2'>

                                    User-Friendly Interface: TORATAX could offer a user-friendly interface that simplifies the tax filing process, making it accessible for individuals with varying levels of financial knowledge.
                                    Expert Guidance: The team of experts at TORATAX could provide personalized assistance and guidance to users, ensuring that their tax returns are accurate and in compliance with tax regulations.
                                    Secure and Reliable Technology: Emphasize the use of secure and reliable technology to protect users' sensitive financial information throughout the filing process.
                                    Time and Cost Efficiency: Highlight how TORATAX saves users time and effort by streamlining the filing process and potentially reducing the cost compared to traditional tax preparation services.
                                    Regular Updates and Compliance: Assure users that the platform stays up-to-date with the latest tax laws and regulations, ensuring that users' tax returns are in compliance with current standards.
                                    Customer Support: Offer excellent customer support to address any queries or concerns that users may have during the filing process.
                                    Customization Options: If applicable, mention any customization options that allow users to tailor their filing experience to their specific financial situation.

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


                            <div class="section-title mt-4 pt-2 bg-white">
                                <h4 class="fs-3 mb-0">Addressing Customer Pain Points</h4>

                                <div class="d-md-flex align-items-center mt-4 pt-2">
                                    <img src="" class="avatar avatar-medium rounded-pill" alt="" />

                                    <div class="ms-md-3 mt-4 mt-sm-0">
                                        <Link to="" class="text-dark h5 text-decoration-none">Time-saving :</Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">
                                         By simplifying and automating the filing process, online return filing addresses the time constraints and complexities associated with traditional methods, allowing users to complete their taxes more efficiently.		


                                        </p>
                                        <Link to="" class="text-dark h5 text-decoration-none "> Accuracy :</Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">
                                        Automated calculations and error detection features reduce the likelihood of costly mistakes, alleviating users' concerns about inaccuracies in their returns.	
                                        </p>
                                        <Link to="" class="text-dark h5 text-decoration-none">Convenience :</Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">
                                        The ability to file taxes remotely at any time suits the busy lifestyles of modern taxpayers, eliminating the need for scheduling appointments or commuting to tax offices.		

                                        </p>
                                        <Link to="" class="text-dark h5 text-decoration-none">Security :</Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">
                                         Robust security measures reassure users about the safety of their sensitive financial information, mitigating fears of identity theft or fraud.	


                                        </p>
                                    </div>
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

                                        </p>
                                        <Link to="" class="text-dark h5 text-decoration-none "> User-centric design :</Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">

                                            User-centric design: The platform prioritizes user experience, with a focus on intuitive interfaces, comprehensive guidance, and responsive support, setting it apart from less user-friendly alternatives.

                                        </p>
                                        <Link to="" class="text-dark h5 text-decoration-none">Trusted reputation :</Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">
                                            The product has received accolades, testimonials, and certifications attesting to its reliability, security, and effectiveness, enhancing its credibility and trustworthiness among potential customers.
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
