import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { IoCloudDownload } from 'react-icons/io5';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const DocumentShowModal = ({ show, handleClose, permanentDataDetails }) => {
    const [documents, setDocuments] = useState([]);

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

    const handleDownload = (documentName, documentPath) => {
        // Simulate download action
        console.log('Downloading:', documentName, 'from:', documentPath);
        // You can implement actual download logic here
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
                        {documents.map((doc) => (
                            <tr
                                key={doc.documentTypeId}
                                style={rowStyle}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <td>{doc.documentName}</td>
                                <td className='text-center'>
                                    {permanentDataDetails.permanentDocuments.some(
                                        (permDoc) => permDoc.documentTypeId === doc.documentTypeId
                                    ) ? (
                                        <OverlayTrigger placement="top" overlay={renderTooltip}>
                                            <IoCloudDownload
                                                size={24}
                                                className='text-primary cursor-pointer'
                                                onClick={() => handleDownload(doc.documentName, doc.documentPath)}
                                            />
                                        </OverlayTrigger>
                                    ) : (
                                        <span className="text-muted">Not Available</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Modal.Body>
        </Modal>
    );
}

export default DocumentShowModal;
