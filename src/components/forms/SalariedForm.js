import React from 'react';
import { useForm } from 'react-hook-form';

const SalariedForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <div className="form-group">
              <label className="form-label mb-2" htmlFor="Name">Name</label>
              <input type="text" className="input" id="Name" {...register("Name", { required: true })} placeholder="Enter your name" />
              {errors.Name && <span>This field is required</span>}
            </div>
          </div>

         

          <div className="col-sm-6 mb-3">
            <div className="form-group">
            <label className="form-label mb-2"  htmlFor="email">Email</label>
              
              <input type="email" className="input" id="email" {...register("email", { required: true })} placeholder="Enter your email" />
              {errors.email && <span>This field is required</span>}
            </div>
          </div>

          <div className="col-sm-6 mb-3">
            <div className="form-group">
              <label className="form-label mb-2">Phone Number</label>
              <input type="tel" className="input" id="phone" {...register("phone")} placeholder="(021)-454-545" />
            </div>
          </div>

          <div className="col-sm-6 mb-3">
            <div className="form-group">
              <label className="form-label mb-2">PAN Number</label>
              <input type="text" className="input" id="pan" {...register("pan")} placeholder="ABCDE1234F" />
            </div>
          </div>
          <hr/>


          {/* File input fields for document upload */}
          <div className="col-sm-6 mb-3">
            <div className="form-group">
              <label className="form-label mb-2">PAN Document</label>
              <input type="file" className="input" id="panDocument" {...register("panDocument")} />
            </div>
          </div>

          <div className="col-sm-6 mb-3">
            <div className="form-group">
              <label className="form-label mb-2" htmlFor="aadharDocument">Aadhar Document</label>
              <input type="file" className="input form-control-file" id="aadharDocument" {...register("aadharDocument")} />
            </div>
          </div>

          <div className="col-sm-6 mb-3">
            <div className="form-group">
              <label className="form-label mb-2" htmlFor="bankStatement">Bank Statement</label>
              <input type="file" className="input" id="bankStatement" {...register("bankStatement")} />
            </div>
          </div>

          <div className="col-sm-6 mb-3">
            <div className="form-group">
              <label className="form-label mb-2" htmlFor="form16Document">Form-16 Document</label>
              <input type="file" className="input" id="form16Document" {...register("form16Document")} />
            </div>
          </div>

          <div className="col-sm-6 mb-3">
            <div className="form-group">
              <label className="form-label mb-2" htmlFor="otherDocument">Other Document</label>
              <input type="file" className="input" id="otherDocument" {...register("otherDocument")} />
            </div>
          </div>

          <div className="col-sm-12 mb-3 d-flex justify-content-end">
            <button type="submit" className="btn btn-primary  ">Submit</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default SalariedForm;
