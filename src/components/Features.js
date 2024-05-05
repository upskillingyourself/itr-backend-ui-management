import React from 'react'
 
const Features = () => {
    return (
        <>
         <section id='features' className="py-5 bg-white ftco-faqs">
            <div className="container"style={{marginTop:"80px",marginBottom:"80px"}}>
                <div className='mx-auto w-75 mb-5'>
                    <h1 className='text-center '>Simple solution for assisted E-Filing of ITR </h1>
                    <p className=' text-center mt-3 '>These Terms & Conditions govern your use of TORATAX website and services.
                        By accessing or using our website or services, you agree to abide by the listed policy and terms & conditions
                    </p>
                </div>
                <div className="d-flex justify-content-between flex-wrap align-items-center ">
                    <div className=' d-flex flex-column   align-items-center'>
                        <div class="our-team " style={{ width: "150px" }}>
                            <img src="images/expert.jpg" alt="" />
                            {/* <div class="team-content">
                                <h3 class="title">Expert Assistance</h3>
                            </div> */}
                        </div>
                        <h3 class="title mt-4">Expert Assistance</h3>
                    </div>
                    <div className=' d-flex flex-column  align-items-center'>
                        <div class="our-team " style={{ width: "150px" }}>
                            <img src="images/expert.jpg" alt="" />
                            {/* <div class="team-content">
                                <h3 class="title ">Save Time & Cost</h3>
                            </div> */}
                        </div>
                        <h3 class="title mt-4">Save Time & Cost</h3>
                    </div>
                    <div className=' d-flex flex-column  align-items-center'>
                        <div class="our-team " style={{ width: "150px" }}>
                            <img src="images/expert.jpg" alt="" />
                            {/* <div class="team-content">
                                <h3 class="title">User Friendly</h3>
                            </div> */}
                        </div>
                        <h3 class="title mt-4">User Friendly</h3>
                    </div>
                    <div className=' d-flex flex-column  align-items-center'>
                        <div class="our-team " style={{ width: "150px" }}>
                            <img src="images/expert.jpg" alt="" />
                            {/* <div class="team-content">
                                <h3 class="title">Secure & Reliable</h3>
                            </div> */}
                        </div>
                        <h3 class="title mt-4">Secure & Reliable</h3>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Features
