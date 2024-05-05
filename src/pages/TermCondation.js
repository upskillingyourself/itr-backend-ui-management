import React from 'react'
import { Link } from 'react-router-dom'

const TermCondation = () => {
    return (
        <>
            <section style={{ minHeight: "100vh" }} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mt-4 pt-2">
                                <h4 className="fs-2 mb-4">Terms & Conditions</h4>
                                <p className="text-muted">
                                    These Terms & Conditions govern your use of TORATAX website and services. By accessing or using our website or services, you agree to abide by the listed policy and terms & conditions

                                </p>
                                <p className="text-muted">
                                    These Terms & Conditions govern your  Terms & Conditions govern yourTerms & Conditions govern yourTerms & Conditions govern youruse of TORATAX website and services. By accessing or using our website or services, you agree to abide by the listed policy and terms & conditions

                                </p>
                                <p className="text-muted">

                                    These Terms & Conditions govern your Terms & Conditions govern your use of TORATAX website and services. By accessing or using our website or services, you agree to abide by the listed policy and terms & conditions

                                </p>
                                <p className="text-muted">
                                    These Terms & Conditions use of TORATAX website and services. By accessing or using our website or services, you agree to abide by the listed policy and terms & conditions

                                </p>



                            </div>

                            <div className="section-title mt-4 pt-2">
                                <h4 className=" mb-0 fs-3">Use of Website and Services:</h4>

                                <p>
                                    Eligibility: You must be at least 18 years old and have the legal capacity to enter into a contract to use our website and services. By using our website or services, you represent and warrant that you meet these eligibility requirements.
                                    Allow Access: You agree to allow us to add you as our client on the Income Tax Department web services to submit ITR, retrieve ITR-V, refund status, 26AS, etc as per the electronic furnishing of return of income scheme, 2007 including any subsequent amendments, notifications or similar schemes, regulations, rules issued from time to time.
                                    Account Registration: Some features of our website and services may require you to create an account. You agree to provide accurate, current, and complete information during the registration process and to update your information as necessary to keep it accurate, current, and complete.
                                    User Content: You are solely responsible for any content you post, upload, or transmit through our website or services ("User Content"). You retain ownership of your User Content, but by posting, uploading, or transmitting it, you grant us a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, sublicensable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content.


                                </p>

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
                                        <Link to="" class="text-dark h5 text-decoration-none">User of Services: </Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">
                                            While preparing your tax return / filing your tax return or to provide advice about tax matters, you will need to provide information about your income, investments, credits, dependents, etc. Collectively, this information is known as (“Tax Return Information”).
                                            You agree that any Tax Return Information you share will always be accurate, correct and up to date and we shall not in any way be liable for any claims or disputes, which arises due to any wrong Tax Return Information provided by you and/or which are not attributable to us.
                                            We are only medium/platform between you and income tax department for filing the income tax return and other related services. You will be solely responsible for any action taken against you by the income tax department.
                                            Filing of income tax return is a technical work which require complex calculations, judgement, application of relevant laws & regulations and is liable for human error. Toratax do not hold any responsilibity for any damages, financial loss, notices, or demands that may arise afterwards. However, toratax may guide the customers for recourse that can be adopted under normal circumstances.
                                        </p>
                                        <Link to="" class="text-dark h5 text-decoration-none ">Intellectual Property:</Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">
                                            Ownership: All content, materials, and intellectual property rights on our website and services, including but not limited to text, graphics, logos, images, and software, are owned by or licensed to us and are protected by copyright, trademark, and other laws.
                                            Restrictions: You may not copy, reproduce, modify, distribute, display, perform, or create derivative works of any content or materials on our website and services without our prior written consent.
                                        </p>
                                        <Link to="" class="text-dark h5 text-decoration-none">Privacy:</Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">
                                            Privacy Policy: Your use of our website and services is subject to our Privacy Policy, which governs the collection, use, and disclosure of your personal information. By using our website or services, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy.
                                        </p>
                                        <Link to="" class="text-dark h5 text-decoration-none">Disclaimer of Warranties:</Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">
                                            No Warranty: Our website and services are provided on an "as is" and "as available" basis without any warranties of any kind, express or implied. We do not warrant that our website or services will be uninterrupted, secure, or error-free, or that any defects will be corrected.
                                        </p>

                                        <Link to="" class="text-dark h5 text-decoration-none">REFUND POLICY:</Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">
                                            Both the client and we have the right to terminate any services for any reason, including the ending of services that are already underway.
                                            No refunds shall be offered, where a service is deemed to have begun and is, for all intents and purposes, underway. Any monies that have been paid to us which constitute payment in respect of the provision of unused services shall not be refunded.
                                        </p>
                                        <Link to="" class="text-dark h5 text-decoration-none">Limitation of Liability:</Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">
                                            Limitation: We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising out of your use of our website or services, even if we have been advised of the possibility of such damages.
                                        </p>
                                        <Link to="" class="text-dark h5 text-decoration-none">Indemnification:
                                        </Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">
                                            Indemnity: You agree to indemnify and hold us harmless from and against any losses, liabilities, damages, costs, or expenses (including attorneys' fees) arising out of or relating to your use of our website or services, your violation of these Terms, or your violation of any rights of third parties.
                                        </p>
                                        <Link to="" class="text-dark h5 text-decoration-none">Governing Law:</Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">
                                            "Jurisdiction: Any controversy or claim arising out of or relating to this contract the breach thereof, shall be settled by sole arbitrator appointed by us in accordance with Arbitration and Conciliation Act, 1996."
                                            The terms of the agreement are exclusively based on and subject to Indian law.

                                        </p>
                                        <Link to="" class="text-dark h5 text-decoration-none">Changes to Terms:</Link>
                                        <p class="text-muted mb-0 mt-2 mb-3">
                                            Modification: We reserve the right to modify or update these Terms at any time without prior notice. Your continued use of our website or services after any such changes constitutes your acceptance of the revised Terms.
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

export default TermCondation
