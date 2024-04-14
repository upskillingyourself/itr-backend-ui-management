import React from 'react'
import Modal from 'react-bootstrap/Modal';
import SalariedForm from '../forms/SalariedForm';

const HeroModal = ({ show, handleClose,cardType }) => {
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
            <SalariedForm/>
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
