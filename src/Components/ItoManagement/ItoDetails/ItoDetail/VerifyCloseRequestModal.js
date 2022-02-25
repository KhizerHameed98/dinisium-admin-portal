import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { verifyItoClosedRequest } from "../../../../Redux/actions/actions";

const VerifyCloseRequestModal = ({ showVerify, setShowVerify }) => {
  const dispatch = useDispatch();
  const ito = useSelector((state) => state.ito?.ito);

  const handleClose = () => setShowVerify(false);
  const handleShow = () => setShowVerify(true);

  const verifyRequestHandler = (e, closed) => {
    e.preventDefault();
    dispatch(verifyItoClosedRequest(ito?.id, { closed }));
    setShowVerify(false);
  };

  return (
    <Modal
      size="sm"
      show={showVerify}
      onHide={handleClose}
      style={{ opacity: 1 }}
      centered
    >
      <div className="modal-header border-0">
        <button type="button" className="close" onClick={handleClose}>
          <span className="font-18">&times;</span>
        </button>
      </div>
      <Modal.Body className="text-center">
        <p>Are you sure you want to verify close request?</p>
        <button
          type="button"
          className="btn btn-primary w-25 btn-md mr-2"
          onClick={(e) => verifyRequestHandler(e, true)}
        >
          Approve
        </button>
        <button
          type="button"
          className="btn btn-danger w-25 btn-md"
          onClick={(e) => verifyRequestHandler(e, false)}
        >
          Reject
        </button>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default VerifyCloseRequestModal;
