import React from "react";
import { useForm } from "react-hook-form";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //console.log(data);
    // You can handle form submission here, such as sending data to a server
  };

  return (
    <>
      <section className="py-5" id="contact">
        <div
          className="container"
          //</section>style={{ marginTop: "80px", marginBottom: "80px" }}
        >
          <div className="mx-auto w-75 mb-5">
            <h1 className="text-center ">
              {" "}
              <span className="active">Contact Us</span>{" "}
            </h1>
          </div>
          <div
            className="contact__wrapper shadow-sm mt-n9"
            style={{ marginTop: "50px" }}
          >
            <div className="row no-gutters">
              <div className="col-lg-5  text-white p-5 order-lg-2 bg-primary">
                <h3 className="mb-5">Get in Touch</h3>
                <ul className="contact-info__list list-style--none position-relative z-index-101">
                  <li className="mb-4 pl-4">
                    <span className="position-absolute">
                      <FaEnvelope />
                    </span>{" "}
                    support@toratax.com
                  </li>
                  <li className="mb-4 pl-4">
                    <span className="position-absolute">
                      <FaPhone />
                    </span>{" "}
                    9990670020
                  </li>
                  <li className="mb-4 pl-4">
                    <span className="position-absolute">
                      <FaLocationDot />
                    </span>{" "}
                    TorTax
                    <br />
                    Near Vivekanand School, Bhagwatiganj, Balrampur,
                    <br /> UP 271201, India
                    <div className="mt-3"></div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="contact-form form-validate"
                  noValidate
                >
                  <div className="row">
                    <div className="col-sm-12 mb-3">
                      <div className="form-group">
                        <label className="form-label" htmlFor="firstName">
                          Name
                        </label>
                        <input
                          type="text"
                          className="input"
                          id="firstName"
                          {...register("name", { required: true })}
                          placeholder="Enter your Name"
                        />
                        {errors.name && <span>This field is required</span>}
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          className="input"
                          id="email"
                          {...register("email", { required: true })}
                          placeholder="demo@gmail.com"
                        />
                        {errors.email && <span>This field is required</span>}
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="input"
                          id="phone"
                          {...register("phone")}
                          placeholder="(021)-454-545"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 mb-3">
                      <div className="form-group">
                        <label className="form-label" htmlFor="message">
                          How can we help?
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          {...register("message")}
                          rows="4"
                          placeholder="Hi there, I would like to....."
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12 mb-3">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
