import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateAsset } from "../../../Redux/actions/actions";

const EditAssetModal = ({
  id,
  show,
  handleClose,
  loading,
  assets,
  setLoading,
  setDisable,
  refresh,
  setRefresh,
}) => {
  const dispatch = useDispatch();
  // console.log("%c assets is", "font-size: 2rem", assets);

  console.log("assets", assets);
  const { asset_price, asset_total_supply, asset_remaining_supply, unit } =
    assets;
  // console.log('price' , price);
  // console.log('asset id is ' , asset_id);

  // console.log('price' , price);

  const defaultValues = {
    updated_price: asset_price,
    newSupply: 0,
    updated_total_supply: asset_total_supply,
    updated_remaining_supply: asset_remaining_supply,
  };

  const [oldState, setOldState] = useState({
    updated_price: asset_price,
    newSupply: 0,
    updated_total_supply: asset_total_supply,
    updated_remaining_supply: asset_remaining_supply,
  });

  const [formData, setFormData] = useState(defaultValues);
  const [unitt, setUnit] = useState(unit);

  console.log("assetsqwda", assets);
  const {
    updated_price,
    newSupply,
    updated_total_supply,
    updated_remaining_supply,
  } = formData;

  const obj = {
    update_pricee: oldState.updated_price,
    newSupply: oldState.newSupply,
    updated_total_supply: oldState.updated_total_supply,
    updated_remaining_supply: oldState.updated_remaining_supply,
  };

  const onChange = (e) => {
    if (e.target.name === "newSupply") {
      setFormData({
        ...formData,
        updated_total_supply:
          Number(updated_total_supply) + Number(e.target.value),
        updated_remaining_supply:
          Number(defaultValues.updated_remaining_supply) +
          Number(e.target.value),
        [e.target.name]: e.target.value,
      });
    }
    // else if (e.target.name === "unit") {
    //   const name = e.target.name;
    //   const value = e.target.value;
    // setFormData({ ...formData, [name]: value });
    // }
    else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  console.log("val", obj.update_pricee);
  console.log("valnow", updated_price);

  const onSubmit = (e) => {
    e.preventDefault();

    if (updated_total_supply < 0 || updated_remaining_supply < 0) {
      toast.error("Updated Supply or remaining supply cannot be negative");
    } else if (newSupply < 0) {
      toast.error("New Supply cannot be negative");
    } else if (
      obj.update_pricee === updated_price &&
      obj.newSupply === newSupply &&
      obj.updated_total_supply === updated_total_supply &&
      obj.updated_remaining_supply === updated_remaining_supply
    ) {
      toast.error("No changes made, please update at least one field");
    } else if (formData.updated_price == 0) {
      toast.error("Asset price must be greater than 0");
    } else if (updated_total_supply < 0 || updated_remaining_supply < 0) {
      toast.error("Updated Supply or remaining supply cannot be negative");
    } else {
      delete formData.newSupply;
      dispatch(
        updateAsset({
          formData,
          id,
          setFormData,
          defaultValues,
          setLoading,
          handleClose,
          setDisable,
        })
      );
    }

    // else if (formData.updated_price == 0) {
    //   toast.error("Asset price must be greater than 0");
    // }
    // if (updated_total_supply < 0 || updated_remaining_supply < 0) {
    //   return toast.error(
    //     "Updated Supply or remaining supply cannot be negative"
    //   );
    // }

    // delete formData.newSupply;

    // if (formData.updated_price == 0) {
    //   toast.error("Asset price must be greater than 0");
    // }
    // else {
    // //   dispatch(
    // //     updateAsset({
    // //       formData,
    // //       id,
    // //       setFormData,
    // //       defaultValues,
    // //       setLoading,
    // //       handleClose,
    // //       setDisable,
    // //     })
    // //   );
    // // }
  };

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
            <strong>Update Asset</strong>
          </p>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <label className="">Asset Price</label>
            <input
              id="exampleInputEmail1"
              type="text"
              placeholder="Enter Asset Price*"
              className="form-control"
              name="updated_price"
              value={updated_price}
              onChange={onChange}
              min={1}
              required
            />
          </div>
          <div className="form-group">
            <label className="">New Supply</label>
            <div className="input-group mb-2">
              <input
                id="exampleInputEmail1"
                type="number"
                placeholder="Enter New Supply*"
                className="form-control"
                name="newSupply"
                value={newSupply}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <label className="">Unit</label>
            <div className="input-group mb-2">
              <input
                id="exampleInputEmail1"
                type="text"
                placeholder="e.g; XAU"
                className="form-control"
                name="unitt"
                value={unitt}
                required
                disabled
              />
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="">Updated Supply</label>
                  <input
                    id="exampleInputEmail1"
                    type="number"
                    className="form-control"
                    name="updated_total_supply"
                    value={updated_total_supply}
                    required
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="">Remaining Supply</label>
                  <input
                    id="exampleInputEmail1"
                    type="number"
                    className="form-control"
                    name="updated_remaining_supply"
                    value={updated_remaining_supply}
                    required
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary w-25 btn-md"
              disabled={loading}
              // onClick={updateAsset}
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}{" "}
              Update
            </button>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default EditAssetModal;
