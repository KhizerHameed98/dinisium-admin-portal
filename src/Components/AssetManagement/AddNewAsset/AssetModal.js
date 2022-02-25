import React from "react";
import { Modal } from "react-bootstrap";
import Route from "../../../Constants/browserRoutes";

const AssetModal = ({
  show,
  handleClose,
  formData,
  loading,
  addNewAssetHandler,
}) => {
  const { name, type, price, unit, total_supply } = formData;
  type.replace(type.charAt(0), type.charAt(0).toUpperCase());
  return (
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
            Are you sure, you want to <strong>create an Asset?</strong>
          </p>
        </div>

        <ul className="row data-confirmation">
          <li className="col-12 col-md-6">
            <span>Asset Name : </span>
            <span style={{ paddingLeft: "4px" }}>{name}</span>
          </li>
          <li className="col-12 col-md-6">
            <span>Asset Type : </span>
            <span style={{ paddingLeft: "4px" }}>{type}</span>
          </li>
          <li className="col-12 col-md-6">
            <span>Asset Price : </span>
            <span style={{ paddingLeft: "4px" }}>${price}</span>
          </li>
          <li className="col-12 col-md-6">
            <span>Unit : </span>
            <span style={{ paddingLeft: "4px" }}>{unit}</span>
          </li>
          <li className="col-12 col-md-6">
            <span>Total Supply : </span>
            <span style={{ paddingLeft: "4px" }}>{total_supply}</span>
          </li>
        </ul>
        <div className="text-center">
          <button
            to={Route.ADD_NEW_ASSET}
            type="button"
            className="btn btn-primary w-25 btn-md"
            onClick={addNewAssetHandler}
            disabled={loading}
          >
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}{" "}
            Ok
          </button>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default AssetModal;
