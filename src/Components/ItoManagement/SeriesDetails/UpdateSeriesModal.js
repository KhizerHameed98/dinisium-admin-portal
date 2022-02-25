import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateSeriesSupplyRequest } from "../../../Redux/actions/actions";

const UpdateSeriesModal = ({ showUpdateModal, setShowUpdateModal }) => {
  const dispatch = useDispatch();
  const seriesDetail = useSelector((state) => state.ito?.seriesDetail);

  const [formData, setFormData] = useState({
    new_supply: "",
  });
  const { new_supply } = formData;
  console.log("new supply", new_supply);

  const onChange = (e) => {
    // if (new_supply < 0) {
    //   toast.error("Supply should be greater than 0");
    // } else {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // }
  };

  const handleClose = () => setShowUpdateModal(false);
  const handleShow = () => setShowUpdateModal(true);

  const updateSeriesSupplyHandler = (e) => {
    e.preventDefault();
    if (formData.new_supply < 0) {
      toast.error("New Supply should be greater than 0");
    } else {
      dispatch(updateSeriesSupplyRequest(seriesDetail?.id, formData));
      setShowUpdateModal(false);
    }
  };

  return (
    <Modal
      size="sm"
      show={showUpdateModal}
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
        <p>Are you sure you want to update Series?</p>
        <div className="form-group text-left">
          <label className="">New Supply</label>
          <input
            id="exampleInputEmail1"
            type="number"
            placeholder="Enter new Supply*"
            className="form-control"
            name="new_supply"
            value={new_supply}
            min={0}
            onChange={onChange}
            required
          />
        </div>
        <button
          type="button"
          className="btn btn-primary w-30 btn-md mr-2"
          onClick={updateSeriesSupplyHandler}
        >
          Update
        </button>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default UpdateSeriesModal;
