import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { toast } from "react-toastify";
import browserRoute from "../../../../Constants/browserRoutes";
import AddAssets from "./AddAssets";

const CreateToken = ({
  rest: { match },
  formData,
  setFormData,
  isSubscription,
  isRequired,
  setIsRequired,
  saveAsDraft,
  setSaveAsDraft,
  location,
  updatedrafts,
  updatedData,

  tokenName,
  tokenSymbol,
  tokenSupply,
  tokenTargetValue,
  tokenPriceDollar,
  tokenBuyingSpread,
  tokenSymboll,
  sellingSpread,
  assetType,
  assetName,
  weightage,
  Value,
  Quantity,
  // draftUpdatedData,
  // setDraftUpdatedData,
}) => {
  const {
    token,
    token: {
      token_symbol,
      token_name,
      supply,
      price,
      target_value,
      buying_spread,
      selling_spread,
    },
  } = formData;

  const threshold = useSelector(
    (state) => state.subscription?.subscriptionDetail?.threshold || ""
  );
  console.log("THRESHOLDsds =============>", threshold);
  console.log("IS SUBSCRIPTION:", isSubscription);
  const onChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setFormData({
        ...formData,
        token: {
          ...token,
          [e.target.name]: e.target.value,
        },
      });
      setDraftUpdatedData({
        ...draftUpdatedData,
        [e.target.name]: e.target.value,
      });

      if (isSubscription) {
        setFormData({
          ...formData,
          token: {
            ...token,
            price: threshold / parseInt(e.target.value),
            [e.target.name]: e.target.value,
          },
        });
        setDraftUpdatedData({
          ...draftUpdatedData,
          pricee: threshold / parseInt(e.target.value),
          [e.target.name]: e.target.value,
        });
      }
    }
  };

  const onTextChange = (e) => {
    setFormData({
      ...formData,
      token: {
        ...token,
        [e.target.name]: e.target.value,
      },
    });
  };

  // find token price
  useEffect(() => {
    if (supply && target_value) {
      setFormData({
        ...formData,
        token: { ...token, price: target_value / supply },
      });
    }
  }, [supply, target_value]);

  // const onSubmit = (e) => {
  //   e.preventDefault();
  // };

  const all = Object.assign({}, ...updatedrafts);

  //  const [draftUpdatedData , setDraftUpdatedData] = useState(defaultValues)
  //  const { token_namee , start_dateee , token_symboll , supplyy, target_valuee , pricee , buying_spreadd , selling_spreadd} = draftUpdatedData

  const defaultValues = {
    token_namee: updatedData?.ito_name,
    start_dateee: updatedData?.start_date,
    token_symboll: updatedData?.start_date,
    token_supplyy: updatedData?.token_supply,
    target_valuee: updatedData?.token_target_value,
    pricee: updatedData?.token_price,
    buying_spreadd: updatedData?.buying_spread,
    selling_spreadd: updatedData?.selling_spread,
  };

  const [draftUpdatedData, setDraftUpdatedData] = useState(defaultValues);

  return (
    <div className="col-md-12">
      <div className="card mb-4">
        <div className="card-header token-card-header">ITO Token</div>
        <div className="card-body p-5">
          {/* <form className="form"> */}
          <div className="form-group row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>Enter Token Name</label>
                <input
                  type="text"
                  placeholder="Enter Token Name *"
                  className="form-control"
                  // name="token_name"
                  name={
                    location.pathname === "/admin/ito-management/create-new-ito"
                      ? "token_name"
                      : "token_namee"
                  }
                  value={
                    location.pathname === "/admin/ito-management/create-new-ito"
                      ? token_name
                      : draftUpdatedData.token_namee
                  }
                  // value={token_name}
                  disabled={isSubscription}
                  onChange={(e) => onTextChange(e)}
                  ref={tokenName}
                  required={isRequired}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Enter Token Symbol</label>
                <input
                  type="text"
                  placeholder="Enter Token Symbol *"
                  className="form-control"
                  // name="token_symbol"
                  name={
                    location.pathname === "/admin/ito-management/create-new-ito"
                      ? "token_symbol"
                      : "token_symboll"
                  }
                  value={
                    location.pathname === "/admin/ito-management/create-new-ito"
                      ? token_symbol
                      : draftUpdatedData.token_symboll
                  }
                  // value={token_symbol}
                  onChange={(e) => onTextChange(e)}
                  ref={tokenSymbol}
                  required={isRequired}
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <label>Enter Supply</label>
                <input
                  type="number"
                  // min={0}
                  // pattern="[0-9]*"
                  placeholder="Enter Supply *"
                  className="form-control"
                  // name="supply"
                  name={
                    location.pathname === "/admin/ito-management/create-new-ito"
                      ? "supply"
                      : " supplyy"
                  }
                  value={
                    location.pathname === "/admin/ito-management/create-new-ito"
                      ? supply
                      : draftUpdatedData.token_supplyy
                  }
                  // value={supply}
                  onChange={(e) => {
                    if (+e.target.value <= -1) {
                      toast.error("Value should not be negitive", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    } else {
                      onChange(e);
                    }
                  }}
                  ref={tokenSupply}
                  required={isRequired}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Enter Target Value</label>
                <div className="input-icon">
                  <input
                    type="text"
                    placeholder="Enter value in dollars"
                    className="form-control"
                    // name="target_value"
                    name={
                      location.pathname ===
                      "/admin/ito-management/create-new-ito"
                        ? "target_value"
                        : " target_valuee"
                    }
                    value={
                      isSubscription
                        ? threshold
                        : target_value
                        ? isSubscription
                          ? threshold
                          : target_value
                        : draftUpdatedData.target_valuee
                    }
                    // value={isSubscription ? threshold : target_value}
                    onChange={(e) => onChange(e)}
                    required={isRequired}
                    ref={tokenTargetValue}
                    disabled={isSubscription}
                  />
                  <i>$</i>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Token Price in dollars</label>
                <div className="input-icon">
                  <i>$</i>
                  <input
                    type="text"
                    placeholder="Price"
                    className="form-control"
                    // name="price"
                    name={
                      location.pathname ===
                      "/admin/ito-management/create-new-ito"
                        ? "price"
                        : " pricee"
                    }
                    value={
                      location.pathname ===
                      "/admin/ito-management/create-new-ito"
                        ? price
                        : draftUpdatedData.pricee
                    }
                    // value={price}
                    ref={tokenPriceDollar}
                    disabled
                    required={isRequired}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Enter Buying Spread</label>
                <div className="input-icon">
                  <i>%</i>
                  <input
                    type="number"
                    placeholder="Enter spread in percentage"
                    className="form-control"
                    // name="buying_spread"
                    name={
                      location.pathname ===
                      "/admin/ito-management/create-new-ito"
                        ? "buying_spread"
                        : " buying_spreadd"
                    }
                    // value={buying_spread}
                    value={
                      location.pathname ===
                      "/admin/ito-management/create-new-ito"
                        ? buying_spread
                        : draftUpdatedData.buying_spreadd
                    }
                    // onChange={(e) => onChange(e)}
                    onChange={(e) => {
                      if (+e.target.value <= -1) {
                        toast.error("Value should not be negitive", {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        });
                      } else {
                        onChange(e);
                      }
                    }}
                    ref={tokenBuyingSpread}
                    required={isRequired}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Enter Selling Spread</label>
                <div className="input-icon">
                  <i>%</i>
                  <input
                    type="number"
                    placeholder="Enter spread in percentage"
                    className="form-control"
                    // min={0}
                    // name="selling_spread"
                    name={
                      location.pathname ===
                      "/admin/ito-management/create-new-ito"
                        ? "selling_spread"
                        : " selling_spreadd"
                    }
                    // value={selling_spread}
                    value={
                      location.pathname ===
                      "/admin/ito-management/create-new-ito"
                        ? selling_spread
                        : draftUpdatedData.selling_spreadd
                    }
                    // onChange={(e) => onChange(e)}
                    onChange={(e) => {
                      if (+e.target.value <= -1) {
                        toast.error("Value should not be negitive", {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        });
                      } else {
                        onChange(e);
                      }
                    }}
                    ref={sellingSpread}
                    required={isRequired}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6"></div>
            <AddAssets {...{ formData, threshold, setFormData }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null)(CreateToken);
