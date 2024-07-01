import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { IoCloudDownload, IoCloudUpload } from 'react-icons/io5';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getToken } from '../../utils/common';

const DocumentShowModal = ({ show, handleClose, permanentDataDetails, yearlyDataDetails }) => {
    const [documents, setDocuments] = useState([]);
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
                'https://api.toratax.com/toratax/rest/v1.0/downloadfile',
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
            console.log(response, 'response');
            // Create a blob object from response data
            const file = new Blob([response.data], { type: response.headers['content-type'] });

            // Create a URL for the blob object and create a link element to trigger download
            const fileURL = window.URL.createObjectURL(file);
            const link = document.createElement('a');
            link.href = fileURL;
            link.setAttribute('download', documentName); // Set the download attribute with the file name
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error downloading document:', error);
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

    const handleUpload = () => {
        // handleClose()
    }

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
    }

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
                        {documents.map((doc) => {
                            const matchedDocument = getDocumentDetails(doc.documentTypeId);
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
                                            <div className='text-center gap-2 text-white px-3 py-1 rounded-pill bg-danger' role='button' onClick={handleUpload}>
                                                Not Uploaded &nbsp;
                                                <IoCloudUpload
                                                    role='button'
                                                    size={24}
                                                    className='text-white'
                                                />
                                            </div>
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
