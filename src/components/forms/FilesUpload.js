import toast, { Toaster } from "react-hot-toast";
import React, { useState } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import { getToken } from "../../utils/common";
import { json } from "react-router-dom";

const FileUpload = ({ setShowForm,handleClose }) => {
    const [uploadStatus, setUploadStatus] = useState({});
    const { register, formState: { errors } } = useForm();
    const token = getToken();

    
    const documentMapping = {
        aadharDocument: { documentTypeId: 1, documentName: "Aadhar" },
        panDocument: { documentTypeId: 2, documentName: "PAN" },
        drivingLicence: { documentTypeId: 3, documentName: "Driving Licence" },
        otherDocument: { documentTypeId: 4, documentName: "Other Document" },
        passport: { documentTypeId: 5, documentName: "Passport" },
        form16Document: { documentTypeId: 6, documentName: "Form-16" },
    };

    // Function to handle file uploads
    const handleUpload = async (fieldName) => {
        const selectedFile = document.getElementById(fieldName).files[0];
        if (!selectedFile) {
            toast.error("No File Selected");
            return;
        }

        const documentInfo = documentMapping[fieldName];
        var info = JSON.stringify({ typeId: documentInfo.documentTypeId })
        const allData = {
         
          document:selectedFile,
          info
      }

      console.log("formData",allData);
       
        try {
            setUploadStatus((prevStatus) => ({ ...prevStatus, [fieldName]: 'Uploading...' }));
            const response = await axios.post(`${process.env.REACT_APP_API_BASE}fileupload`, allData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': token,
                },
            });
            console.log('fileupload', response);
            setUploadStatus((prevStatus) => ({ ...prevStatus, [fieldName]: 'Upload Complete' }));
            toast.success("File uploaded successfully!");
        } catch (error) {
            setUploadStatus((prevStatus) => ({ ...prevStatus, [fieldName]: 'Upload Failed' }));
            toast.error("File upload failed. Please try again.");
        }
    };

    
    const handleBack = () => {
        setShowForm(true);
    };

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            {Object.keys(documentMapping).map((fieldName) => (
                <div className="col-sm-6 mb-3" key={fieldName}>
                    <div className="form-group">
                        <label className="form-label mb-2" htmlFor={fieldName}>{documentMapping[fieldName].documentName}</label>
                        <input type="file" className="file" id={fieldName} {...register(fieldName)} />
                        <button type="button" className="btn btn-secondary mt-2" onClick={() => handleUpload(fieldName)}>Upload</button>
                        {uploadStatus[fieldName] && <small className="form-text text-muted">{uploadStatus[fieldName]}</small>}
                    </div>
                </div>
            ))}
            <div className="col-sm-12 mb-3 d-flex justify-content-end gap-3">
                <button type="button" onClick={handleBack} className="btn btn-outline-primary">Back</button>
                <button type="button" className="btn btn-primary" onClick={handleClose}>Submit</button>
            </div>
        </>
    );
};

export default FileUpload;
