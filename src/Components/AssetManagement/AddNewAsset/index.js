import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AssetModal from "./AssetModal";
import { addNewAsset } from "../../../Redux/actions/actions";
import { Alert } from "react-bootstrap";

const AddNewAsset = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // console.log(type.replace(type.charAt(0), type.charAt(0).toUpperCase()));

  const defaultValues = {
    name: "",
    price: "",
    unit: "",
    type: "Static",
    total_supply: "",
  };

  const [formData, setFormData] = useState(defaultValues);

  const { name, price, unit, total_supply } = formData;

  if (typeof formData === "object") {
    console.log("object");
  } else {
    console.log("not object");
  }

  const onChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onNameChange = (e) => {
    let value = e.target.value;

    value = value.replace(/[^A-Za-z]/gi, "");
    setFormData({ ...formData, [e.target.name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const addNewAssetHandler = () => {
    setLoading(true);
    dispatch(addNewAsset({ formData, setFormData, defaultValues, setLoading }));
    setShow(false);
  };

  const handleAssetDraft = () => {};

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body p-5">
              <form className="form" onSubmit={onSubmit}>
                <div className="form-group row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Asset Name</label>
                      <input
                        type="text"
                        style={{ fontSize: "12px", padding: "18px" }}
                        placeholder="Enter Asset Name"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={(e) => onNameChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Asset Type</label>
                      <input
                        type="number"
                        placeholder="Static"
                        name="type"
                        className="form-control"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Asset Price</label>
                      <div className="input-icon">
                        <i>$</i>
                        <input
                          style={{ fontSize: "12px", padding: "18px" }}
                          type="text"
                          placeholder="Enter Price in dollars"
                          className="form-control"
                          name="price"
                          value={price}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Unit</label>
                      <input
                        style={{ fontSize: "12px", padding: "18px" }}
                        type="text"
                        placeholder="e.g; XAU"
                        className="form-control"
                        name="unit"
                        value={unit}
                        onChange={(e) => onNameChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Total Supply</label>
                      <input
                        style={{ fontSize: "12px", padding: "18px" }}
                        type="text"
                        placeholder="Enter Total Supply"
                        className="form-control"
                        name="total_supply"
                        value={total_supply}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}{" "}
                  CREATE NEW ASSET
                </button>
              </form>
              <button
                type="submit"
                className="btn btn-primary btn-lg assetDraft"
                onClick={handleAssetDraft}
              >
                {/* <span className="spinner-border spinner-border-sm"></span> */}
                SAVE AS DRAFT
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end inner row --> */}
      {show && (
        <AssetModal
          {...{ show, handleClose, formData, loading, addNewAssetHandler }}
        />
      )}
    </div>
  );
};

export default AddNewAsset;
