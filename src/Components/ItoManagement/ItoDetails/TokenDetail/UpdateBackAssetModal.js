import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { generateUpdateBackAssetRequest } from "../../../../Redux/actions/actions";

const UpdateBackAssetModal = ({
  showUpdateAssetModal,
  setShowUpdateAssetModal,
  backAsset,
}) => {
  const { asset_quantity } = backAsset;
  const dispatch = useDispatch();
  const token = useSelector((state) => state.ito?.token);

  const defaultValues = {
    updated_asset_quantity: asset_quantity,
    new_asset_quantity: 0,
  };

  const [formData, setFormData] = useState(defaultValues);
  const { new_asset_quantity, updated_asset_quantity } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      updated_asset_quantity: Number(asset_quantity) + Number(e.target.value),
    });
  };

  const handleClose = () => setShowUpdateAssetModal(false);
  const handleShow = () => setShowUpdateAssetModal(true);

  const updateBackAssetHandler = (e) => {
    e.preventDefault();
    dispatch(generateUpdateBackAssetRequest(backAsset?.id, formData));
    setShowUpdateAssetModal(false);
  };

  return (
    <Modal
      size="md"
      show={showUpdateAssetModal}
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
        <p>Are you sure you want to update {backAsset.name}!</p>
        <div className="form-group text-left">
          <label className="">New asset quantity</label>
          <input
            id="exampleInputEmail1"
            type="number"
            placeholder="Enter new asset quantity*"
            className="form-control"
            name="new_asset_quantity"
            value={new_asset_quantity}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group text-left">
          <label>Updated Quanity</label>
          <input
            id="exampleInputEmail1"
            type="number"
            className="form-control"
            name="updated_asset_quantity"
            value={updated_asset_quantity}
            required
            disabled
          />
        </div>

        <button
          type="button"
          className="btn btn-primary w-30 btn-md mr-2"
          onClick={updateBackAssetHandler}
        >
          Update
        </button>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default UpdateBackAssetModal;
