import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SalariedForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showForm, setShowForm] = useState(true);
  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);

  };
  function changeForm() {
    console.log("run");
    setShowForm(!showForm);
  }
  function handleBack() {
    setShowForm(true);
  }


  // fafd

  const [file, setFile] = useState()
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null)
  function handleUpload() {
    if (!file) {
      setMsg("No File Sellected");
      return;
    }
    const fd = new FormData();
    fd.append('file', file);
    setMsg("Uploading...")
    setProgress(prevState => {
      return { ...prevState, started: true }
    })
    axios.post('https://upload/post', fd, {
      onUploadProgress: (ProgressEvent) => {
        setProgress(prevState => {
          return { ...prevState, pc: ProgressEvent.progress * 100 }
        }

        )
      },
      headers: {
        "Custom-Header": "value",
      }
    })
      .then(res => {
        setMsg("Upload Successful")
        console.log(res.data);
      })
      .catch(err => {
        setMsg("Upload failed")
        console.error(err);
      })
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="row">
          {showForm ? (
            <>
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
              {/* <hr /> */}
              <div className="col-sm-12 mb-3 d-flex justify-content-end">
                <button type="button" onClick={changeForm} className="btn btn-primary  ">Next </button>
              </div>
            </>

          ) : (
            <>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <label className="form-label mb-2">PAN Document</label>
                  <input type="file" onChange={(e) => {setFile( e.target.files[0]) }} />
                  <button onClick={handleUpload}>Upload</button>
                  {progress.started && <progress max="100" value={progress.pc}></progress>}
                  {msg && <span>{msg}</span>}
                </div>
              </div>



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


              <div className="col-sm-12 mb-3 d-flex justify-content-end gap-3">
                <button type="submit" onClick={handleBack} className="btn btn-outline-primary  ">Back</button>
                <button type="submit" className="btn btn-primary  ">Submit</button>
              </div></>
          )}



          {/* File input fields for document upload */}

        </div>
      </form>
    </>
  )
}

export default SalariedForm;
