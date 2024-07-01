import React from 'react'
import { Modal } from 'react-bootstrap'

const UploadDocumentModal = ({showUploadModal, handleCloseUploadModal}) => {
  return (
    <Modal
      size="lg" show={showUploadModal} onHide={handleCloseUploadModal}
      aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <span className='text-primary'>
            title
          </span>

        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       body

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
  )
}

export default UploadDocumentModal
