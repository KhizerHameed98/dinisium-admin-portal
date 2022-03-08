import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { verifyUpdateRequest } from "../../../Redux/actions/actions";

const AssetModal = ({
  id,
  show,
  handleClose,
  assets,
  loading,
  setLoading,
  refresh,
  setRefresh,
}) => {
  console.log("assets", assets);
  const dispatch = useDispatch();
  const [showModall, setShowModal] = useState(false);
  const [updaterejectionmessage, setRejectionMessage] = useState(" ");
  console.log("id in verify", id);
  const {
    // asset_id,
    asset_name,
    asset_price,
    updated_price,
    total_supply,
    asset_total_supply,
    updated_total_supply,
    remaining_supply,
    updated_remaining_supply,
  } = assets;

  // console.log('id  xaxa' , asset_id);

  const showModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const verifyUpdation = (
    e,
    assetid,
    update_status,
    update_rejection_message
  ) => {
    // console.log('id is in fun' , assetid);
    const formData = { update_status, update_rejection_message };
    console.log("UPDATED STATUS:", formData.update_status);
    console.log("REJECTION MSG", formData.update_status);
    // dispatch(
    //   verifyUpdateRequest({
    //     formData,
    //     assetid,
    //     setLoading,
    //     handleClose,
    //   }),
    // );
    dispatch(
      verifyUpdateRequest(
        formData,
        id,
        setLoading,
        handleClose,
        refresh,
        setRefresh
      )
    );
  };

  return (
    <>
      <Modal
        size="md"
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
        <Modal.Body>
          <div className="text-center">
            <p>
              Are you sure, you want to <strong>verify an Asset?</strong>
            </p>
          </div>

          <ul className="row data-confirmation">
            <li className="col-12 col-md-6">
              <span>Asset Name : </span>
              <br />
              <p style={{ marginTop: "8px", fontSize: "11px" }}>
                {" "}
                <b> {asset_name} </b>{" "}
              </p>
            </li>
            <li className="col-12 col-md-6">
              <span>Current Price : </span>
              <span>$ {asset_price}</span>
            </li>
            <li className="col-12 col-md-6">
              <span>Updated Price : </span>
              <span>$ {updated_price}</span>
            </li>
            {/* <li className="col-12 col-md-6">
              <span>Total Supply : </span>
              <p style={{ marginTop: "8px", fontSize: "11px" }}>
                {" "}
                <b>{total_supply } </b>{" "}
              </p>
            </li> */}
            <li className="col-12 col-md-6">
              <span>New Supply : </span>
              <p style={{ marginTop: "8px", fontSize: "11px" }}>
                {" "}
                <b>{updated_total_supply} </b>{" "}
              </p>
            </li>
            <li className="col-12 col-md-6">
              <span>Existing supply : </span>
              <span>{asset_total_supply}</span>
            </li>
            <li className="col-12 col-md-6">
              <span>Updated Remaining Supply : </span>
              <span>{updated_remaining_supply}</span>
            </li>
          </ul>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary w-25 btn-md mr-2"
              onClick={(e) => verifyUpdation(e, id, "approved")}
              disabled={loading}
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}{" "}
              Approve
            </button>
            <button
              type="button"
              className="btn btn-secondary w-25 btn-md"
              onClick={showModal}
              disabled={loading}
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}{" "}
              Disapprove
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0"></Modal.Footer>
      </Modal>

      <Modal show={showModall} onHide={closeModal} backdrop="static" centered>
        <div className="modal-header border-0">
          <button type="button" className="close" onClick={handleClose}>
            <span className="font-18">&times;</span>
          </button>
        </div>
        <Modal.Body className="text-center">
          <div>
            <h5>Give a Reason For Rejection</h5>
            <input
              type="text"
              placeholder="Rejection Message*"
              className="form-control"
              name="rejection_message"
              value={updaterejectionmessage}
              onChange={(e) => setRejectionMessage(e.target.value)}
              required
            />
            <br />
            <button
              type="button"
              className="btn btn-seconday w-30 btn-md mr-2"
              onClick={(e) => verifyUpdation(e, id, "rejected")}
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

export default AssetModal;
