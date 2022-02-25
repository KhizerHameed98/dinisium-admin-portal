import React from "react";
import { useState } from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import MakeTradableModal from "./MakeTradeableModal";
import UpdateBackAssetModal from "./UpdateBackAssetModal";
import UpdateTokenModal from "./UpdateTokenModal";
import VerifyBackAssetUpdationModal from "./VerifyBackAssetUpdationModal";
import VerifyTokenUpdationModal from "./VerifyTokenUpdationModal";

const TokenDetail = () => {
  const token = useSelector((state) => state.ito?.token);
  const ito = useSelector((state) => state.ito?.ito);
  const backedAssets = useSelector((state) => state.ito?.backedAssets);
  const status = backedAssets[0]?.updateasset_status;

  const [showTradeableModal, setShowTradeableModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showUpdateVerifyModal, setShowUpdateVerifyModal] = useState(false);
  const [showUpdateAssetModal, setShowUpdateAssetModal] = useState(false);
  const [showUpdateVerifyAssetModal, setShowUpdateVerifyAssetModal] =
    useState(false);
  const [backAssetName, setBackeAssetName] = useState("");
  const [backAsset, setBackAsset] = useState({});

  const showMakeTradeableModal = (e) => {
    e.preventDefault();
    setShowTradeableModal(true);
  };

  const showUpdateTokenModal = (e) => {
    e.preventDefault();
    setShowUpdateModal(true);
  };

  const showVerifyUpdateTokenModal = (e) => {
    e.preventDefault();
    setShowUpdateVerifyModal(true);
  };

  const showUpdateBackAssetModal = (e, back_asset) => {
    e.preventDefault();
    setBackAsset(back_asset);
    setShowUpdateAssetModal(true);
  };

  const showVerifyUpdateBackAssetModal = (e, back_asset) => {
    e.preventDefault();
    setBackAsset(back_asset);
    setShowUpdateVerifyAssetModal(true);
  };

  return (
    <div className="row mb-3">
      <div className="col-sm-12">
        <h3>Token</h3>
        <div className="card p-5">
          <ul className="row profile-detail">
            <li className="col-12 col-md-6">
              <span>Token name</span>
              <span>{token?.token_name}</span>
            </li>
            <li className="col-12 col-md-6">
              <span>Token symbol</span>
              <span>{token?.token_symbol}</span>
            </li>
            <li className="col-12 col-md-6">
              <span>Target value</span>
              <span>{`${token?.target_value}$`}</span>
            </li>
            <li className="col-12 col-md-6">
              <span>Price</span>
              <span>{`${token?.price}$`}</span>
            </li>
            <li className="col-12 col-md-6">
              <span>Supply</span>
              <span>{token?.supply}</span>
            </li>
            <li className="col-12 col-md-6">
              <span>Remaining supply</span>
              <span>{token?.remaining_supply}</span>
            </li>
            <li className="col-12 col-md-6">
              <span>Buying spread</span>
              <span>{token?.buying_spread}</span>
            </li>
            <li className="col-12 col-md-6">
              <span>Selling spread</span>
              <span>{token?.selling_spread}</span>
            </li>
            <li className="col-12 col-md-6">
              <span>Is tradeable</span>
              <span>{`${token?.is_tradeable}`}</span>
            </li>
          </ul>
          <b>Backed Assets</b>
          {backedAssets?.map((back_asset, index) => (
            <>
              <ul className="row profile-detail" key={index}>
                <li className="col-12 col-md-6">
                  <span>Asset name</span>
                  <span>{back_asset?.name || backAssetName}</span>
                </li>
                <li className="col-12 col-md-6">
                  <span>Asset weightage</span>
                  <span>{back_asset?.weightage}%</span>
                </li>
                <li className="col-12 col-md-6">
                  <span>Asset value</span>
                  <span>{back_asset?.asset_value}</span>
                </li>
                <li className="col-12 col-md-6">
                  <span>Asset quantity</span>
                  <span>{back_asset?.asset_quantity}</span>
                </li>
              </ul>
              {/* {status !== "approved" || status !== "rejected" ? (
                <button
                  className="btn btn-primary w-25 btn-lg mb-5"
                  style={{ marginLeft: "40px" }}
                  disabled={
                    ito?.closed || ito?.status !== "approved"
                    // token?.update_request_userid === userDetails.id
                  }
                  onClick={(e) => {
                    showVerifyUpdateBackAssetModal(e, back_asset);
                  }}
                >
                  Verify asset update
                </button>
              ) : (
                <button
                  className="btn btn-primary w-25 btn-lg mb-5"
                  style={{ marginLeft: "40px" }}
                  disabled={ito?.closed || ito?.status !== "approved"}
                  onClick={(e) => {
                    setBackeAssetName(back_asset?.name);
                    showUpdateBackAssetModal(e, back_asset);
                  }}
                >
                  Update asset
                </button>
              )} */}
              {status === "approved" || status === "rejected" ? (
                <button
                  className="btn btn-primary w-25 btn-lg mb-5"
                  style={{ marginLeft: "40px" }}
                  disabled={ito?.closed || ito?.status !== "approved"}
                  onClick={(e) => {
                    setBackeAssetName(back_asset?.name);
                    showUpdateBackAssetModal(e, back_asset);
                  }}
                >
                  Update asset
                </button>
              ) : 
              ""
              // (
              //   <button
              //     className="btn btn-primary w-25 btn-lg mb-5"
              //     style={{ marginLeft: "40px" }}
              //     disabled={
              //       ito?.closed || ito?.status !== "approved"
              //       // token?.update_request_userid === userDetails.id
              //     }
              //     onClick={(e) => {
              //       showVerifyUpdateBackAssetModal(e, back_asset);
              //     }}
              //   >
              //     Verify asset update
              //   </button>
              // )
              }
            </>
          ))}
          <div>
            {!token?.is_tradeable && (
              <button
                className="btn btn-primary w-25 btn-lg mb-2"
                style={{ marginLeft: "40px" }}
                disabled={ito?.closed || ito?.status !== "approved"}
                onClick={showMakeTradeableModal}
              >
                Make tradeable
              </button>
            )}
            {token?.update_request_userid ? (
              <button
                className="btn btn-primary w-25 btn-lg mb-2"
                style={{ marginLeft: "40px" }}
                disabled={
                  ito?.closed || ito?.status !== "approved"
                  // token?.update_request_userid === userDetails.id
                }
                onClick={showVerifyUpdateTokenModal}
              >
                Verify token update
              </button>
            ) : (
              <button
                className="btn btn-primary w-25 btn-lg mb-2"
                style={{ marginLeft: "40px" }}
                disabled={ito?.closed || ito?.status !== "approved"}
                onClick={showUpdateTokenModal}
              >
                Update token
              </button>
            )}
          </div>
        </div>
      </div>
      {showTradeableModal && (
        <MakeTradableModal {...{ showTradeableModal, setShowTradeableModal }} />
      )}
      {showUpdateModal && (
        <UpdateTokenModal {...{ showUpdateModal, setShowUpdateModal }} />
      )}
      {showUpdateVerifyModal && (
        <VerifyTokenUpdationModal
          {...{ showUpdateVerifyModal, setShowUpdateVerifyModal }}
        />
      )}
      {showUpdateAssetModal && (
        <UpdateBackAssetModal
          {...{ showUpdateAssetModal, setShowUpdateAssetModal, backAsset }}
        />
      )}
      {showUpdateVerifyAssetModal && (
        <VerifyBackAssetUpdationModal
          {...{
            showUpdateVerifyAssetModal,
            setShowUpdateVerifyAssetModal,
            backAsset,
          }}
        />
      )}
    </div>
  );
};

export default TokenDetail;
