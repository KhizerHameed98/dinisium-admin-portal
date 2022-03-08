import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { verifyBackAssetUpdationRequest } from "../../../../Redux/actions/actions";

const VerifyBackAssetUpdationModal = ({
  showUpdateVerifyAssetModal: showModal,
  setShowUpdateVerifyAssetModal: setShowModal,
  backAsset,
}) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.ito?.token);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const verifyRequestHandler = (e, updateasset_status) => {
    e.preventDefault();
    dispatch(
      verifyBackAssetUpdationRequest(backAsset?.id, { updateasset_status })
    );
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
        <p>
          Are you sure you want to verify <b>{backAsset?.name}</b> updation
          request?
        </p>
        <ul className="row profile-detail">
          <li className="col-12 col-md-6" style={{ border: "0px" }}>
            <span>Updated asset quantity</span>
            <span>
              {Number(backAsset?.asset_quantity) +
                Number(backAsset?.new_asset_quantity)}
            </span>
          </li>
          <li className="col-12 col-md-6" style={{ border: "0px" }}>
            <span>Previous asset quantity</span>
            <span>{backAsset?.asset_quantity}</span>
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

export default VerifyBackAssetUpdationModal;
