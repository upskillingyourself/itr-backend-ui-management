import React from 'react'
import Modal from 'react-bootstrap/Modal';
import SalariedForm from '../forms/SalariedForm';
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const HeroModal = ({ show, handleClose, cardType }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [panFile, setPanFile] = useState();

  const [showForm, setShowForm] = useState(true);
  const onSubmit = (data) => {
    // Handle the submission of file data
    console.log(data);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    console.log(data, config);
    // axios
    //   .post("https://example.com/upload", data, config)

    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };




  function changeForm() {
    console.log("run");
    setShowForm(!showForm);
  }
  return (
    <Modal
      size="lg" show={show} onHide={handleClose}
      aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <span className='text-primary'>
            {cardType}
          </span>

        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SalariedForm cardType={cardType}/>



        {/* <form onSubmit={handleSubmit(onSubmit)}>
          {showForm === true ? (
            <>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                {...register("name", { required: true })}
              />
              <br />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", { required: true })}
              />
              <br />

              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                {...register("phone", { required: true })}
              />
              <br />

              <label htmlFor="address">Address:</label>
              <textarea
                id="addresetShowFormss"
                name="address"
                rows="4"
                cols="40"
                {...register("address", { required: true })}
              ></textarea>

              <br />

              <button type="button" onClick={changeForm}>
                Continue
              </button>
            </>
          ) : (
            <>
              <label htmlFor="pan">PAN Card:</label>
              <input
                type="file"
                id="pan"
                name="pan"
                onChange={(e) => setValue("filePan", e.target.files[0])}
              />
              <br />

              <label htmlFor="aadhar">Aadhar Card:</label>
              <br />
              <input
                type="file"
                id="aadhar"
                name="aadhar"
                onChange={(e) => setValue("fileAdhar", e.target.files[0])}
              />
              <br />
            </>
          )}
          <button type="submit">Submit</button>
        </form> */}



      </Modal.Body>
      {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
    </Modal>
  );
}

export default HeroModal
