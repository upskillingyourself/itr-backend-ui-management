import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SalariedForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showForm, setShowForm] = useState(true);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  const handleUpload = async (fieldName) => {
    const selectedFile = document.getElementById(fieldName).files[0];
    if (!selectedFile) {
      setMsg("No File Selected");
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('https://your-upload-endpoint', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress({ started: true, pc: percentage });
        },
      });

      console.log('File uploaded successfully:', response.data);
      setMsg('Upload successful');
    } catch (error) {
      console.error('Error uploading file:', error);
      setMsg('Upload failed');
    }
  };

  const handleBack = () => {
    setShowForm(true);
  };

  const changeForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="row">
          {showForm ? (
            <>
              {/* First part of the form */}
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="Name">Name</label>
                  <input type="text" className="input" id="Name" {...register("Name", { required: true })} placeholder="Enter your name" />
                  {errors.Name && <span>This field is required</span>}
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="email">Email</label>
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
              {/* Other fields */}
              <div className="col-sm-12 mb-3 d-flex justify-content-end">
                <button  type="button" onClick={changeForm} className="btn btn-primary  ">Next</button>
              </div>
            </>
          ) : (
            <>
              {/* Second part of the form */}
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2">PAN Document</label>
                  <input type="file" className="input" id="panDocument" {...register("panDocument")} />
                  <button type='button' onClick={() => handleUpload("panDocument")}>Upload</button>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="aadharDocument">Aadhar Document</label>
                  <input type="file" className="input form-control-file" id="aadharDocument" {...register("aadharDocument")} />
                  <button type='button' onClick={() => handleUpload("aadharDocument")}>Upload</button>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="bankStatement">Bank Statement</label>
                  <input type="file" className="input" id="bankStatement" {...register("bankStatement")} />
                  <button type='button' onClick={() => handleUpload("bankStatement")}>Upload</button>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="form16Document">Form-16 Document</label>
                  <input type="file" className="input" id="form16Document" {...register("form16Document")} />
                  <button type='button' onClick={() => handleUpload("form16Document")}>Upload</button>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2" htmlFor="otherDocument">Other Document</label>
                  <input type="file" className="input" id="otherDocument" {...register("otherDocument")} />
                  <button type='button' onClick={() => handleUpload("otherDocument")}>Upload</button>
                </div>
              </div>
              <div className="col-sm-12 mb-3 d-flex justify-content-end gap-3">
                <button type="button" onClick={handleBack} className="btn btn-outline-primary  ">Back</button>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default SalariedForm;
