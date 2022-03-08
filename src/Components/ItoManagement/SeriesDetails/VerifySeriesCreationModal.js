import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { verifySeriesCreation } from "../../../Redux/actions/actions";

const VerifySeriesCreationModal = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const seriesDetail = useSelector((state) => state.ito?.seriesDetail);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const verifyRequestHandler = (e, status) => {
    e.preventDefault();
    dispatch(verifySeriesCreation(seriesDetail?.id, { status }));
    setShowModal(false);
  };

  return (
    <Modal
      size="sm"
      show={showModal}
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
        <p>Are you sure you want to verify Series create request?</p>
        <button
          type="button"
          className="btn btn-primary w-30 btn-md mr-2"
          onClick={(e) => verifyRequestHandler(e, "approved")}
        >
          Approve
        </button>
        <button
          type="button"
          className="btn btn-seconday w-25 btn-md"
          onClick={(e) => verifyRequestHandler(e, "rejected")}
        >
          Reject
        </button>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default VerifySeriesCreationModal;
