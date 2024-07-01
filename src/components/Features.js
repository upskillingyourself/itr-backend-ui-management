import React from "react";

const Features = () => {
  return (
    <>
      <section id="features" className="py-5 bg-white ftco-faqs">
        <div className="container">
          <div className="mx-auto w-75 mb-5">
            <h1 className="text-center">
              Simple solution for assisted E-Filing of ITR
            </h1>
            <p className="text-center mt-3">
              These Terms & Conditions govern your use of TORATAX website and
              services. By accessing or using our website or services, you agree
              to abide by the listed policy and terms & conditions
            </p>
          </div>
          <div className=" mx-auto" style={{width:"70%"}}>
          <div className="row  ">
            <div className="col-12 col-sm-6 d-flex flex-column align-items-center mb-4">
              <div className="our-team " style={{ width: "150px" }}>
                <img src="images/expert.jpg" alt="Expert Assistance" />
              </div>
              <h3 className="title mt-4">Expert Assistance</h3>
            </div>
            <div className="col-12 col-sm-6  d-flex flex-column align-items-center mb-4">
              <div className="our-team" style={{ width: "150px" }}>
                <img src="images/expert.jpg" alt="Save Time & Cost" />
              </div>
              <h3 className="title mt-4">Save Time & Cost</h3>
            </div>
            <div className="col-12 col-sm-6  d-flex flex-column align-items-center mb-4">
              <div className="our-team" style={{ width: "150px" }}>
                <img src="images/expert.jpg" alt="User Friendly" />
              </div>
              <h3 className="title mt-4">User Friendly</h3>
            </div>
            <div className="col-12 col-sm-6  d-flex flex-column align-items-center mb-4">
              <div className="our-team" style={{ width: "150px" }}>
                <img src="images/expert.jpg" alt="Secure & Reliable" />
              </div>
              <h3 className="title mt-4">Secure & Reliable</h3>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
