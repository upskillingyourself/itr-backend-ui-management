import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <>
      <section className="section" style={{ minHeight: "100vh" }} >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mt-4 pt-2">
                <h4 className="fs-2 mb-4">Privacy Policy</h4>
                <p className="text-muted">
                  TORATAX is committed to protecting the privacy and security of your personal information.
                </p>
                <p className="text-muted">
                  This Privacy Policy outlines the types of personal information we collect, how we use it, and the measures we take to safeguard your information when you use our website or services.
                </p>
                {/* <p className="text-muted">
                  The platform boasts a team of experts in finance and taxation,
                  Emphasizing the combination of technology and subject matter expertise as the key factors that make TORATAX stand out as the best online assisted filing platform.
                </p>
                <p className="text-muted">
                  The platform boasts a team of experts in finance and taxation,
                  Emphasizing the combination of technology and subject matter expertise as the key factors that make TORATAX stand out as the best online assisted filing platform.
                </p> */}


              </div>

              <div className="section-title mt-4 pt-2">
                {/* <h4 className=" mb-0 fs-3">Key Benefits</h4> */}

                <div className="row" >

                  {/* {tableData.map((data) => (
                                        <div className="col-md-6 mt-4 pt-2" key={data.id}>

                                            <div className=''>
                                                

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

                                    ))} */}
                </div>
              </div>


              {/* Other sections */}
              <div class="section-title mt-4 pt-2 bg-white">
                <h4 class="fs-3 mb-0">Points of Differentiation</h4>

                <div class="d-md-flex align-items-center mt-4 pt-2">
                  <div class="ms-md-3 mt-4 mt-sm-0">
                    <Link to="" class="text-dark h5 text-decoration-none">Information We Collect:</Link>
                    <p class="text-muted mb-0 mt-2 mb-3">
                      Personal Information: When you use our website or services, we may collect personal information such as your name, email address, contact details, pan, date of birth, gst detail, aadhar, bank statement, and any other information you provide voluntarily.
                      Usage Information: We may collect information about your usage of our website and services, including your IP address, browser type, operating system, pages visited, and other usage data.
                      Cookies and Similar Technologies: We use cookies and similar technologies to enhance your experience on our website, personalize content, and analyze usage patterns. You can manage your cookie preferences through your browser settings.
                    </p>
                    <Link to="" class="text-dark h5 text-decoration-none "> How We Use Your Information:</Link>
                    <p class="text-muted mb-0 mt-2 mb-3">
                      Providing Services: We use your personal information to provide you with our tax filing services, process your requests, and communicate with you about your account and transactions.
                      Improving Our Services: We may use information collected to analyze trends, monitor the effectiveness of our website and services, and improve the user experience.
                      Marketing and Communication: We may use your contact information to send you promotional materials, newsletters, or updates about our products and services.
                      Legal Compliance: We may use your information to comply with applicable laws, regulations, or legal processes, or to protect our rights, property, or safety and that of others.

                    </p>
                    <Link to="" class="text-dark h5 text-decoration-none">Information Sharing and Disclosure:</Link>
                    <p class="text-muted mb-0 mt-2 mb-3">
                      Service Providers: We may share your personal information with third-party service providers who assist us in providing our services, such as payment processors, IT providers, or marketing partners.
                      Legal Requirements: We may disclose your information when required by law, regulation, legal process, or government request, or to protect against legal liability.
                    </p>
                    <Link to="" class="text-dark h5 text-decoration-none">Data Security:</Link>
                    <p class="text-muted mb-0 mt-2 mb-3">
                      We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
                      We ensure to protect personal information including tax return information from loss, misuse or unauthorized alteration by using industry recognized security safeguards, coupled with carefully developed security procedures and practices.
                      Whenever requires transmitting of sensitive information, such as tax return or payment information, it is supported by encryption of all the information transmitted to us.
                    </p>
                  
                  <Link to="" class="text-dark h5 text-decoration-none">Changes to This Privacy Policy:</Link>
                  <p class="text-muted mb-0 mt-2 mb-3">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website or through other means.
                  </p>
                  </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section >

    </>
  )
}

export default PrivacyPolicy
