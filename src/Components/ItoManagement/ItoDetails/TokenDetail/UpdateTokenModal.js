import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { generateUpdateTokenRequest } from "../../../../Redux/actions/actions";
import { generateUpdateTokenRequest } from "../../../../Services/itoServices";

const UpdateTokenModal = ({ showUpdateModal, setShowUpdateModal }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.ito?.token);
  const { supply } = token;

  const [newSupply, setNewSupply] = useState({
    updated_token_supplyy: supply,
    new_supply: null,
  });

  console.log("supply is ", newSupply.new_supply);

  const [formData, setFormData] = useState({
    new_buying_spread: "",
    new_selling_spread: "",
    // updated_token_supply: supply,
  });
  const {
    new_buying_spread,
    new_selling_spread,
    // updated_token_supply,
  } = formData;

  const { updated_token_supplyy } = newSupply;
  const { new_supply } = newSupply;

  const handleNewSupply = (e) => {
    if (e.target.value == "") {
      setNewSupply({new_supply:null ,  updated_token_supplyy: supply})
      // newSupply.new_supply = null; 
      console.log("val is ", newSupply.new_supply);
    } else {
      const name = e.target.name;
      const value = e.target.value;
      setNewSupply({
        [name]: value,
        updated_token_supplyy: Number(supply) + Number(e.target.value),
        // updated_token_supply:100+3
      });
    }
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      // updated_token_supply: Number(supply) + Number(e.target.value),
    });
  };

  const handleClose = () => setShowUpdateModal(false);
  const handleShow = () => setShowUpdateModal(true);

  const updateTokenHandler = (e) => {
    e.preventDefault();
    const data = {
      new_supply: newSupply.new_supply,
      new_buying_spread: new_buying_spread,
      new_selling_spread: new_selling_spread,
    };
    console.log(data);
    dispatch(generateUpdateTokenRequest({ id: token?.id, info: data }));
    setShowUpdateModal(false);
  };

  useEffect(() => {
    setFormData({
      ...formData,
      new_buying_spread: token.buying_spread,
      new_selling_spread: token.selling_spread,
    });
  }, [token]);

  return (
    <Modal
      size="md"
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
        <b>
          {" "}
          <p>Update your Token</p>{" "}
        </b>
        <div className="form-group text-left">
          <label className="">New Supply</label>
          <input
            id="exampleInputEmail1"
            type="number"
            placeholder="Enter new Supply*"
            className="form-control"
            name="new_supply"
            value={newSupply.new_supply}
            onChange={handleNewSupply}
            required
          />
        </div>
        <div className="form-group text-left">
          <label className="">Buying spread</label>
          <input
            id="exampleInputEmail1"
            type="number"
            placeholder="% Enter new Buying spread"
            className="form-control"
            name="new_buying_spread"
            value={new_buying_spread}
            min={0}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group text-left">
          <label className="">Selling Spread</label>
          <input
            id="exampleInputEmail1"
            type="number"
            placeholder="% Enter new Selling spread"
            className="form-control"
            name="new_selling_spread"
            value={new_selling_spread}
            min={0}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group text-left">
          <label>Updated Supply</label>
          <input
            id="exampleInputEmail1"
            type="number"
            className="form-control"
            name="updated_token_supplyy"
            value={updated_token_supplyy}
            required
            disabled
          />
        </div>
        <button
          type="button"
          className="btn btn-primary w-30 btn-md mr-2"
          onClick={updateTokenHandler}
        >
          Update
        </button>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default UpdateTokenModal;
