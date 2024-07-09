import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { IoCloudDownload, IoCloudUpload } from 'react-icons/io5';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getToken } from '../../utils/common';
import Cookies from "js-cookie";

const DocumentShowModal = ({ show, handleClose, permanentDataDetails, yearlyDataDetails, isYear, selectedUser }) => {
    const role = Cookies.get('role');
console.log('permanentDataDetails',yearlyDataDetails,permanentDataDetails,isYear);
    const [documents, setDocuments] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState({});
    const token = getToken();

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await axios.get('https://api.toratax.com/toratax/rest/v1.0/documenttypes');
                const data = response.data;
                const documentsArray = Object.values(data);
                setDocuments(documentsArray);
            } catch (error) {
                console.error('Error fetching documents:', error);
            }
        };

        if (show) {
            fetchDocuments();
        }
    }, [show]);

    const handleDownload = async (documentTypeId, documentId, documentName, documentPath) => {
        try {
            const response = await axios.post(
                process.env.REACT_APP_API_BASE + 'downloadfile',
                {
                    documentTypeId: documentTypeId,
                    documentId: documentId,
                    documentName: documentName,
                    documentPath: documentPath
                },
                {
                    headers: {
                        'Authorization': token,
                    },
                    responseType: 'blob'  // Ensure response type is blob to handle file download
                }
            );
            console.log('response',response);
            const file = new Blob([response.data], { type: response.headers['content-type'] });
            const fileURL = window.URL.createObjectURL(file);
            const link = document.createElement('a');
            link.href = fileURL;
            link.setAttribute('download', documentName);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error downloading document:', error);
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async (docTypeId) => {
        if (!selectedFile) {
            alert("No file selected");
            return;
        }

        const formData = new FormData();
        formData.append('document', selectedFile);
        formData.append('info', JSON.stringify({ typeId: docTypeId, year: isYear 
        }));

        let uploadUrl = process.env.REACT_APP_API_BASE + "fileupload";

        if (docTypeId === 7 || docTypeId === 8) {
            uploadUrl = process.env.REACT_APP_API_BASE + `upload/${selectedUser}`;
        }

        try {
            setUploadStatus((prevStatus) => ({ ...prevStatus, [docTypeId]: 'Uploading...' }));
            const response = await axios.post(uploadUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': token,
                },
            });

            setUploadStatus((prevStatus) => ({ ...prevStatus, [docTypeId]: 'Upload Complete' }));
        } catch (error) {
            console.error("Error uploading file:", error);
            setUploadStatus((prevStatus) => ({ ...prevStatus, [docTypeId]: 'Upload Failed' }));
        }
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Download
        </Tooltip>
    );

    const rowStyle = {
        transition: 'background-color 0.3s ease',
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.backgroundColor = '#f0f0f0';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.backgroundColor = '';
    };

    const getDocumentDetails = (docTypeId) => {
        let details = null;
        if (permanentDataDetails) {
            details = permanentDataDetails.permanentDocuments.find(permDoc => permDoc.documentTypeId === docTypeId);
        }
        if (!details && yearlyDataDetails) {
            yearlyDataDetails.forEach(yearlyData => {
                if (!details) {
                    details = yearlyData.documentDetails.find(yearlyDoc => yearlyDoc.documentTypeId === docTypeId);
                }
            });
        }
        return details;
    };

    const filteredDocuments = documents.filter(doc => {
        if (role !== 'ADMIN' && (doc.documentName === 'Acknowledgement' || doc.documentName === 'ITR FORM')) {
            return false;
        }
        return true;
    });

    return (
        <Modal
            size="md"
            show={show}
            onHide={handleClose}
            aria-labelledby="example-modal-sizes-title-lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    <span className='text-primary'>Your Documents</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='px-4'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Document Name</th>
                            <th scope="col" className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDocuments.map((doc) => {
                            const matchedDocument = getDocumentDetails(doc.documentTypeId);
                           // console.log('matchedDocument',matchedDocument);
                            if (matchedDocument) {
                                return (
                                    <tr
                                        key={matchedDocument.documentTypeId}
                                        style={rowStyle}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <td className='text-capitalize'>{doc.documentName}</td>
                                        <td>
                                            <div className='text-center gap-2 text-white bg-success px-1 py-1 rounded-pill' role='button' onClick={() => handleDownload(matchedDocument.documentTypeId, matchedDocument.documentId, matchedDocument.documentName, matchedDocument.documentPath)}>
                                                Download &nbsp;
                                                <OverlayTrigger placement="top" overlay={renderTooltip}>
                                                    <IoCloudDownload
                                                        role='button'
                                                        size={24}
                                                        className='text-white cursor-pointer'
                                                    />
                                                </OverlayTrigger>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            } else {
                                return (
                                    <tr key={doc.documentTypeId} style={rowStyle}>
                                        
                                        <td className='text-capitalize fw-normal'>{doc.documentName}</td>
                                        <td>
                                            {role === 'ADMIN' ? (
                                                (doc.documentName === "Acknowledgement" || doc.documentName === "ITR FORM") ? (
                                                    <div>
                                                        
                                                        <div className='d-flex flex-column '>
                                                        <input type="file" onChange={handleFileChange} />
                                                        <button className='btn btn-primary btn-sm mt-2' onClick={() => handleUpload(doc.documentTypeId)}>
                                                            Upload &nbsp;
                                                            <IoCloudUpload size={24} />
                                                        </button>
                                                        {uploadStatus[doc.documentTypeId] && (
                                                            <div className="mt-2">
                                                                {uploadStatus[doc.documentTypeId] === 'Uploading...' && (
                                                                    <div className="alert alert-warning" role="alert">
                                                                        Uploading...
                                                                    </div>
                                                                )}
                                                                {uploadStatus[doc.documentTypeId] === 'Upload Complete' && (
                                                                    <div className="alert alert-success" role="alert">
                                                                        Upload Complete
                                                                    </div>
                                                                )}
                                                                {uploadStatus[doc.documentTypeId] === 'Upload Failed' && (
                                                                    <div className="alert alert-danger" role="alert">
                                                                        Upload Failed
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="text-center gap-2 text-white px-3 py-1 rounded-pill bg-danger"
                                                        role="button"
                                                        onClick={() => handleUpload(doc.documentTypeId)}
                                                    >
                                                        Not Uploaded &nbsp;
                                                        <IoCloudUpload
                                                            role="button"
                                                            size={24}
                                                            className="text-white"
                                                        />
                                                    </div>
                                                )
                                            ) : (
                                                <div className='d-flex flex-column '>
                                                    <input type="file" onChange={handleFileChange} />
                                                    <button className='btn btn-primary btn-sm mt-2' onClick={() => handleUpload(doc.documentTypeId)}>
                                                        Upload &nbsp;
                                                        <IoCloudUpload size={24} />
                                                    </button>
                                                    {uploadStatus[doc.documentTypeId] && (
                                                        <div className="mt-2">
                                                            {uploadStatus[doc.documentTypeId] === 'Uploading...' && (
                                                                <div className="alert alert-warning" role="alert">
                                                                    Uploading...
                                                                </div>
                                                            )}
                                                            {uploadStatus[doc.documentTypeId] === 'Upload Complete' && (
                                                                <div className="alert alert-success" role="alert">
                                                                    Upload Complete
                                                                </div>
                                                            )}
                                                            {uploadStatus[doc.documentTypeId] === 'Upload Failed' && (
                                                                <div className="alert alert-danger" role="alert">
                                                                    Upload Failed
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </table>
            </Modal.Body>
        </Modal>
    );
}

export default DocumentShowModal;
