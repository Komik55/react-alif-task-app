import { Button, Modal } from "react-bootstrap";

const ModalBlock = ({ modalPost, onCloseModal, modalShow }) => {
  return (
    <Modal
      show={modalShow}
      onHide={onCloseModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Post {modalPost.id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Enthusiastically evisculate 24/365 vortals without backward-compatible
          meta-services. Dramatically communicate multimedia based e-business
          without go forward e-markets. Objectively procrastinate B2C human
          capital through 24/365 applications.
          {modalPost.title}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onCloseModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBlock;
