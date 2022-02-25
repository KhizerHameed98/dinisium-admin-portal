import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { verifyItoCreation } from "../../../Redux/actions/actions";

const VerifyItoCreationModal = ({ show, setShow }) => {
  console.log(show, setShow);
  const [openModal, setOpenModal] = useState(false);
  const [rejectionMessage, setRejetionMessage] = useState("");
  const dispatch = useDispatch();
  const ito = useSelector((state) => state.ito?.ito);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const ModalOpens = () => {
    setOpenModal(true);
  };

  const ModalClose = () => {
    setOpenModal(false);
  };

  const verifyRequestHandler = (e, status, rejection_message) => {
    e.preventDefault();
    handleClose();
    dispatch(verifyItoCreation(ito?.id, { status, rejection_message }));
  };

  return (
    <>
      <Modal
        size="sm"
        show={show}
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
          <p>Are you sure you want to verify ITO create request?</p>
          <button
            type="button"
            className="btn btn-primary w-30 btn-md mr-2"
            onClick={(e) => verifyRequestHandler(e, "approved")}
          >
            Approve
          </button>
          <button
            type="button"
            className="btn btn-danger w-25 btn-md"
            // onClick={(e) => verifyRequestHandler(e, "rejected")}
            onClick={ModalOpens}
          >
            Reject
          </button>
        </Modal.Body>
        <Modal.Footer className="border-0"></Modal.Footer>
      </Modal>
      {/*  Rejection Modal */}
      <Modal
        show={openModal}
        backdrop="static"
        onHide={ModalClose}
        size="md"
        centered
      >
        <div className="modal-header border-0">
          <button type="button" className="close" onClick={handleClose}>
            <span className="font-18">&times;</span>
          </button>
        </div>
        <Modal.Body className="text-center">
          <div>
            <p>Give a Reason For Rejection</p>
            <input
              type="text"
              placeholder="Rejection Message*"
              className="form-control"
              name="rejection_message"
              value={rejectionMessage}
              onChange={(e) => setRejetionMessage(e.target.value)}
              required
            />
            <br />
            <button
              type="button"
              className="btn btn-danger w-30 btn-md mr-2"
              onClick={(e) =>
                verifyRequestHandler(e, "rejected", rejectionMessage)
              }
            >
              Reject
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0"></Modal.Footer>
      </Modal>
    </>
  );
};

export default VerifyItoCreationModal;
