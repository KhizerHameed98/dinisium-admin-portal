import React, { useState } from "react";

const UpdateAssetDrafts = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    unit: "",
    total_supply: "",
  });

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

  const handleUpdateDraft = () => {
    console.log(
      "data to be send to the backend",
      formData.name,
      formData.price,
      formData.unit,
      formData.total_supply
    );
  };

  return (
    <>
      {/* <h1 className="updateAssetHeading"> Update Asset </h1> */}
      <div className="col-12 col-md-8 offset-md-2 mt-5">
        {/* <!-- inner row --> */}
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-body p-5">
                <form className="form">
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
                          value={formData.name}
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
                            value={formData.price}
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
                          value={formData.unit}
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
                          value={formData.total_supply}
                          onChange={(e) => onChange(e)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={loading}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}{" "}
                    CREATE NEW ASSET
                  </button> */}
                </form>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg updateAsset"
                  onClick={handleUpdateDraft}
                >
                  {/* <span className="spinner-border spinner-border-sm"></span> */}
                  UPDATE DRAFT
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end inner row --> */}
      </div>
    </>
  );
};

export default UpdateAssetDrafts;
