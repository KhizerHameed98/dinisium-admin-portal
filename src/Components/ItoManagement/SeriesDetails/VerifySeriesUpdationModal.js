import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { verifySeriesSupplyUpdation } from "../../../Redux/actions/actions";

const VerifySeriesUpdationModal = ({
  showUpdateVerifyModal: showModal,
  setShowUpdateVerifyModal: setShowModal,
}) => {
  const dispatch = useDispatch();
  const seriesDetail = useSelector((state) => state.ito?.seriesDetail);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const verifyRequestHandler = (e, update_status) => {
    e.preventDefault();
    dispatch(verifySeriesSupplyUpdation(seriesDetail?.id, { update_status }));
    setShowModal(false);
  };

  return (
    <Modal
      size="md"
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
        <p>Are you sure you want to verify Series updation request?</p>
        <ul className="row profile-detail">
          <li className="col-12 col-md-6" style={{ border: "0px" }}>
            <span>Previous total supply</span>
            <span>{seriesDetail?.supply}</span>
          </li>
          <li className="col-12 col-md-6" style={{ border: "0px" }}>
            <span>Previous remaining Supply</span>
            <span>{seriesDetail?.remaining_supply}</span>
          </li>
          <li className="col-12 col-md-6" style={{ border: "0px" }}>
            <span>Updated total supply</span>
            <span>{seriesDetail?.supply + seriesDetail?.new_supply}</span>
          </li>
          <li className="col-12 col-md-6" style={{ border: "0px" }}></li>
          <li className="col-12 col-md-6" style={{ border: "0px" }}>
            <span>Updated total supply</span>
            <span>{seriesDetail?.supply + seriesDetail?.new_supply}</span>
          </li>
          <li className="col-12 col-md-6" style={{ border: "0px" }}>
            <span>Updated remaining Supply</span>
            <span>
              {seriesDetail?.remaining_supply + seriesDetail?.new_supply}
            </span>
          </li>
        </ul>
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

export default VerifySeriesUpdationModal;
