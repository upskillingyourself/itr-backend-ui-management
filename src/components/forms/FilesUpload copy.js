import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { getToken } from "../../utils/common";

const FileUpload = ({ setShowForm }) => {
  const [loading, setLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const token = getToken();
  const handleUpload = async (fieldName) => {
    const selectedFile = document.getElementById(fieldName).files[0];
    if (!selectedFile) {
      toast.error("No File Selected");
      return;
    }

    const allData = {
      documentTypeId: 1,
      documentName: "aadhar",
    };
    const formData = new FormData();
    formData.append("file", selectedFile);

    // console.log("formData",selectedFile);

    // try {
    //   setUploadStatus((prevStatus) => ({ ...prevStatus, [fieldName]: 'Uploading...' }));
    //   const response = await axios.post(process.env.REACT_APP_API_BASE + "fileupload", formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //       'Authorization': token,
    //     },
    //   });
    //   console.log('fileupload',response);
    //   setUploadStatus((prevStatus) => ({ ...prevStatus, [fieldName]: 'Upload Complete' }));
    //   toast.success("File uploaded successfully!");
    // } catch (error) {
    //   setUploadStatus((prevStatus) => ({ ...prevStatus, [fieldName]: 'Upload Failed' }));
    //   toast.error("File upload failed. Please try again.");
    // }
  };

  const handleBack = () => {
    setShowForm(true);
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="col-sm-6 mb-3">
        <div className="form-group">
          <label className="form-label mb-2">PAN Document</label>
          <input
            type="file"
            className="file"
            id="panDocument"
            {...register("panDocument")}
          />
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={() => handleUpload("panDocument")}
          >
            Upload
          </button>
          {uploadStatus.panDocument && (
            <small className="form-text text-muted ms-3">
              {uploadStatus.panDocument}
            </small>
          )}
        </div>
      </div>
      <div className="col-sm-6 mb-3">
        <div className="form-group">
          <label className="form-label mb-2" htmlFor="aadharDocument">
            Aadhar Document
          </label>
          <input
            type="file"
            className="file"
            id="aadharDocument"
            {...register("aadharDocument")}
          />
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={() => handleUpload("aadharDocument")}
          >
            Upload
          </button>
          {uploadStatus.aadharDocument && (
            <small className="form-text text-muted">
              {uploadStatus.aadharDocument}
            </small>
          )}
        </div>
      </div>
      <div className="col-sm-6 mb-3">
        <div className="form-group">
          <label className="form-label mb-2" htmlFor="bankStatement">
            Bank Statement
          </label>
          <input
            type="file"
            className="file"
            id="bankStatement"
            {...register("bankStatement")}
          />
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={() => handleUpload("bankStatement")}
          >
            Upload
          </button>
          {uploadStatus.bankStatement && (
            <small className="form-text text-muted">
              {uploadStatus.bankStatement}
            </small>
          )}
        </div>
      </div>
      <div className="col-sm-6 mb-3">
        <div className="form-group">
          <label className="form-label mb-2" htmlFor="form16Document">
            Form-16 Document
          </label>
          <input
            type="file"
            className="file"
            id="form16Document"
            {...register("form16Document")}
          />
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={() => handleUpload("form16Document")}
          >
            Upload
          </button>
          {uploadStatus.form16Document && (
            <small className="form-text text-muted">
              {uploadStatus.form16Document}
            </small>
          )}
        </div>
      </div>
      <div className="col-sm-6 mb-3">
        <div className="form-group">
          <label className="form-label mb-2" htmlFor="otherDocument">
            Other Document
          </label>
          <input
            type="file"
            className="file"
            id="otherDocument"
            {...register("otherDocument")}
          />
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={() => handleUpload("otherDocument")}
          >
            Upload
          </button>
          {uploadStatus.otherDocument && (
            <small className="form-text text-muted">
              {uploadStatus.otherDocument}
            </small>
          )}
        </div>
      </div>
      <div className="col-sm-12 mb-3 d-flex justify-content-end gap-3">
        <button
          type="button"
          onClick={handleBack}
          className="btn btn-outline-primary"
        >
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </>
  );
};
export default FileUpload;
