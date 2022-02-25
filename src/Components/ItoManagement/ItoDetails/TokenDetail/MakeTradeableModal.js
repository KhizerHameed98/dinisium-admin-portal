import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { makeTokenTradeable } from "../../../../Redux/actions/actions";

const MakeTradableModal = ({ showTradeableModal, setShowTradeableModal }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.ito?.token);

  const handleClose = () => setShowTradeableModal(false);
  const handleShow = () => setShowTradeableModal(true);

  const makeTokenTradeableHandler = (e) => {
    e.preventDefault();
    dispatch(makeTokenTradeable(token?.id, { is_tradeable: true }));
    setShowTradeableModal(false);
  };

  return (
    <Modal
      size="sm"
      show={showTradeableModal}
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
        <p>Are you sure you want to make token tradeable?</p>
        <button
          type="button"
          className="btn btn-primary w-30 btn-md mr-2"
          onClick={makeTokenTradeableHandler}
        >
          Yes sure!
        </button>
        <button
          type="button"
          className="btn btn-secondary w-30 btn-md"
          onClick={() => {
            setShowTradeableModal(false);
          }}
        >
          No, Not now!
        </button>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default MakeTradableModal;
