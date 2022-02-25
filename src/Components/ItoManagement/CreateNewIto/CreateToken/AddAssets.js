import React, { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getAssetsByStatus } from "../../../../Redux/actions/actions";

const AddAssets = ({ formData, threshold, setFormData }) => {
  const {
    token,
    token: { back_assets, target_value },
  } = formData;
  console.log("BACK ASSETS==================> :", back_assets);
  const dispatch = useDispatch();
  const assetsList = useSelector((state) => state.ito.assetsList);

  const [countFields, setCountFields] = useState([
    { count: 0, value: "static" },
  ]);
  const [lastCount, setLastCount] = useState(0);

  const onSelect = (e, assetFieldNumber) => {
    // It will work for only end select
    // if (value === lastCount) {
    countFields[assetFieldNumber].value = e.target.value;
    setCountFields([...countFields]);
    // }
  };
  //  value={back_assets[item.count]?.asset_value}
  console.log("%c backASSETS", "font-size: 2rem", back_assets);

  const onChangeWeightage = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      let value = e.target.value;
      let newValue = [];

      newValue = back_assets;
      newValue[lastCount] = {
        ...back_assets[lastCount],
        [e.target.name]: value,
        asset_value: (threshold * value) / 100,
      };

      setFormData({
        ...formData,
        token: { ...token, back_assets: [...newValue] },
      });
    }
  };

  const onSelectAsset = (e) => {
    let value = e;
    let newValue = [];
    newValue = back_assets;
    newValue[lastCount] = {
      ...back_assets[lastCount],
      asset_id: value.id,
      asset_price: value.price,
    };
    setFormData({
      ...formData,
      token: { ...token, back_assets: [...newValue] },
    });
  };

  const onAdd = (e) => {
    e.preventDefault();
    const lastFieldCount = countFields[countFields.length - 1].count; // last Field Count Value
    setCountFields([
      ...countFields,
      { count: lastFieldCount + 1, value: "static" },
    ]);
    setFormData({
      ...formData,
      token: {
        ...token,
        back_assets: [
          ...back_assets,
          {
            weightage: "",
            asset_price: "",
            asset_value: "",
            asset_quantity: "",
            asset_id: "",
          },
        ],
      },
    });
    setLastCount(lastFieldCount + 1);
  };

  const onSubtract = (e) => {
    e.preventDefault();
    const allFields = countFields;
    allFields.pop(); // delete last value
    setCountFields([...allFields]);
    formData.token.back_assets.pop();
    setFormData({ ...formData });

    const lastFieldCount = countFields[countFields.length - 1].count; // last Field Value
    setLastCount(lastFieldCount);
  };

  useEffect(() => {
    dispatch(getAssetsByStatus(countFields[lastCount].value));
  }, [countFields[lastCount].value]);

  // Find asset value
  useEffect(() => {
    if (
      back_assets[lastCount].weightage === "0" ||
      !back_assets[lastCount].weightage
    ) {
      let newValue = [];

      newValue = back_assets;
      newValue[lastCount] = {
        ...back_assets[lastCount],
        asset_value: (back_assets[lastCount].weightage / 100) * target_value,
      };

      setFormData({
        ...formData,
        back_assets: [...newValue],
      });
    } else {
      if (back_assets[lastCount].weightage && target_value) {
        let newValue = [];

        newValue = back_assets;
        newValue[lastCount] = {
          ...back_assets[lastCount],
          asset_value: (back_assets[lastCount].weightage / 100) * target_value,
        };

        setFormData({
          ...formData,
          back_assets: [...newValue],
        });
      }
    }
  }, [back_assets[lastCount].weightage, target_value]);

  // Find asset quantity
  useEffect(() => {
    if (
      back_assets[lastCount].asset_value !== "0" ||
      !back_assets[lastCount].asset_value
    ) {
      let newValue = [];

      newValue = back_assets;
      newValue[lastCount] = {
        ...back_assets[lastCount],
        asset_quantity:
          back_assets[lastCount].asset_value /
          back_assets[lastCount].asset_price,
      };

      setFormData({
        ...formData,
        token: { ...token, back_assets: [...newValue] },
      });
    }
    if (
      back_assets[lastCount].asset_value &&
      back_assets[lastCount].asset_price
    ) {
      let newValue = [];

      newValue = back_assets;
      newValue[lastCount] = {
        ...back_assets[lastCount],
        asset_quantity:
          back_assets[lastCount].asset_value /
          back_assets[lastCount].asset_price,
      };

      setFormData({
        ...formData,
        token: { ...token, back_assets: [...newValue] },
      });
    }
  }, [back_assets[lastCount].asset_value, back_assets[lastCount].asset_price]);
  const customStyles = {
    option: (provided) => ({
      ...provided,
      backgroundColor: "white",
      color: "black",
      "&:hover": { backgroundColor: "#c5e3ed" },
    }),
    control: (base, state) => ({
      ...base,
      width: "auto !important",
      boxShadow: state.isFocused ? "0 0 0 3px #c5e3ed" : 0,
      borderColor: state.isFocused ? " #c5e3ed" : "#8080809c",
      "&:hover": { borderColor: state.isFocused ? 0 : 0 },
    }),
  };

  return (
    <>
      {countFields.map((item, index) => (
        <Fragment key={item.count}>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Select Asset Type</label>
              <select
                name="type"
                // onChange={(e) => onChange(e)}
                className="form-control"
                onChange={(e) => onSelect(e, item.count)}
                disabled={item.count !== lastCount}
              >
                <option value="static">Static</option>
                <option value="liquid">Liquid</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group check">
              <label>Select Asset Name</label>
              <Select
                className="css-container"
                styles={customStyles}
                style={{ "--width": "auto" }}
                defaultValue={[]}
                name="asset_id"
                options={assetsList?.length > 0 ? assetsList : []}
                classNamePrefix="select"
                isDisabled={item.count !== lastCount ? true : false}
                onChange={(e) => onSelectAsset(e)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Enter Weightage</label>
              <div className="input-icon">
                <i>%</i>
                <input
                  type="text"
                  placeholder="Enter value in percentage"
                  className="form-control"
                  name="weightage"
                  value={back_assets[item.count]?.weightage}
                  onChange={(e) => onChangeWeightage(e, "weightage")}
                  required
                  disabled={item.count !== lastCount}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Asset Value</label>
              <div className="input-icon">
                <i>$</i>
                <input
                  type="text"
                  placeholder="Asset worth in dollars"
                  className="form-control"
                  name="asset_value"
                  // value={newValue[lastCount]}
                  value={back_assets[item.count]?.asset_value}
                  // onChange={(e) => onChange(e)}
                  required
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Asset Quantity</label>
              <input
                type="text"
                placeholder="no of asset units"
                className="form-control"
                name="asset_quantity"
                value={
                  back_assets[item.count]?.asset_quantity
                    ? back_assets[item.count]?.asset_quantity
                    : ""
                }
                // onChange={(e) => onChange(e)}
                required
                disabled
              />
            </div>
          </div>
          <div className="col-sm-6"></div>
          {item.count === lastCount && (
            <div className="col-12" style={{ textAlign: "center" }}>
              <button className="btn btn-primary mr-2" onClick={onAdd}>
                Add Field
              </button>
              {item.count !== 0 && (
                <button className="btn btn-danger" onClick={onSubtract}>
                  Delete Field{" "}
                </button>
              )}
            </div>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default AddAssets;
