import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import browserRoute from "../../../../Constants/browserRoutes";
import EditAssetModal from "../EditAssetModal";
import VerifyUpdateModal from "../VerifyUpdateModal";
import Moment from "react-moment";
import { useHistory } from "react-router";
import { assetManagement } from "../../../../Routes/serverRoutes";
import { getAssetDetail } from "../../../../Redux/actions/actions";
import AllDetails from "./AllDetails";
import { useParams } from "react-router-dom";

const AssetDetail = ({ match }) => {
  const state = useSelector((state) => console.log("statee", state));
  const check = useSelector(
    (state) => state?.assetManagement?.assetDetail?.data
  );

  const details = useSelector((state) => {
    return console.log("state", state);
  });

  const iD = useSelector((state) => {
    return state?.auth?.userDetails?.id;
  });

  console.log("userid", iD);
  const assets = check && check[Object.keys(check)[0]];

  console.log("ascx", assets);
  // console.log("aaa", user1_approve);
  console.log("check is", check);
  // const assets = check && Object.fromEntries(check);
  // console.log("assa", assets);
  // const {asset_type} = assets;
  // console.log('assets type'  , asset_type);

  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [verifyAsset, setVerifyAsset] = useState(false);

  const { id } = useParams();
  console.log("idd", id);
  // const [showDetails, setShowDetails] = useState(false);
  // const [buttonText, setButtonText] = useState("Show Details");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisable] = useState(false);

  const handleClose = () => setShow(false);
  const openEditModal = () => setShow(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAssetDetail(id));
  }, []);

  const asset = useSelector(
    (state) => state?.assetManagement?.assetDetail?.data
  );
  console.log("ASSETITITITIT========>", asset?.user1_approve);

  const userID = useSelector((state) => state?.auth?.userDetails.id);

  console.log("USER DETAILS =======================>", userID);
  // console.log("USerOneApprovedID", assets.user1_approve);
  const checkk = useSelector((state) => {
    return state?.assetManagement?.assetDetail?.data;
  });

  useEffect(() => {
    dispatch(getAssetDetail(id));
  }, [refresh]);

  console.log("check", checkk);

  // console.log('assetssw' , asset);
  // const onShowDetails = (e) => {
  //   e.preventDefault();
  //   setShowDetails(!showDetails);
  //   showDetails ? setButtonText("Show Details") : setButtonText("Hide Details");
  // };

  const handleVerifyUpdateAsset = () => {
    setShow(true);
  };

  return (
    <Fragment>
      <div className="col-12 col-md-8 offset-md-2">
        <div className="row">
          <div className="col-sm-12">
            <div className="card p-5">
              <div>
                <p>
                  <span className="pro-heading-b">{assets?.asset_name}</span>
                </p>

                <ul className="row profile-detail">
                  <li className="col-12 col-md-6" style={{ border: "0px" }}>
                    <span>Asset Type</span>
                    <span>{assets?.asset_type}</span>
                  </li>
                  <li className="col-12 col-md-6" style={{ border: "0px" }}>
                    <span>Asset Price</span>
                    <span>$ {assets?.asset_price}</span>
                  </li>
                  <li className="col-12 col-md-6" style={{ border: "0px" }}>
                    <span>Unit</span>
                    <span>{assets?.asset_unit}</span>
                  </li>
                  <li className="col-12 col-md-6" style={{ border: "0px" }}>
                    <span>Total Supply</span>
                    <span>{assets?.asset_total_supply}</span>
                  </li>
                  <li className="col-12 col-md-6" style={{ border: "0px" }}>
                    <span>Remaining Supply</span>
                    <span>{assets?.asset_remaining_supply}</span>
                  </li>
                  <li className="col-12 col-md-6" style={{ border: "0px" }}>
                    <span>Created at</span>
                    <span> <Moment format="DD-MM-YYYY hh:mm:ss">{assets?.asset_created_at}</Moment></span>
                  </li>
                </ul>
              </div>

              <div>
                {/* <p
                  style={{
                    marginLeft: "1rem",
                    color: "#007bff",
                    fontSize: "13px",
                    cursor: "pointer",
                    width: "7rem",
                  }}
                  onClick={onShowDetails}
                >
                  {buttonText}
                </p> */}
                {<AllDetails allDetails={check} />}
              </div>
              {/* <button
                className="btn btn-primary w-100 btn-mg mr-3"
                // onClick={showUpdateSeriesModal}
                // disabled={seriesDetail?.status !== "approved"}
              >
                Update Series
              </button> */}
              <div>
                {/* {assets?.user1_approve ||
                (assets?.user1_approve && assets.user2_approve) ? (
                  <button
                    type="button"
                    className="btn btn-primary w-25 btn-lg mr-3"
                    onClick={openEditModal}
                    disabled={disabled}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    Update
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary w-25 btn-lg mr-3"
                    onClick={openEditModal}
                    disabled={disabled}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    Verify Update Request
                  </button>
                )} */}
                {console.log("%c assets isss", "font-size: 2rem", assets)}
                {assets?.update_statuss === "pending" ? (
                  <button
                    className="btn btn-primary w-25 btn-lg mb-5"
                    disabled={assets?.user1_approve === userID ? true : false}
                    style={{ marginLeft: "40px" }}
                    // disabled={
                    //   ito?.closed || ito?.status !== "approved"
                    //   token?.update_request_userid === userDetails.id
                    // }
                    // onClick={(e) => {
                    // showVerifyUpdateBackAssetModal(e, back_asset);
                    // }}
                    onClick={handleVerifyUpdateAsset}
                  >
                    Verify asset update
                  </button>
                ) : assets?.update_statuss === "approved" ||
                  assets?.update_statuss === "rejected" ||
                  assets?.update_statuss === null ? (
                  <button
                    type="button"
                    className="btn btn-primary w-25 btn-lg mr-3"
                    onClick={openEditModal}
                    disabled={disabled}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    Update
                  </button>
                ) : null}
              </div>
              {!assets?.user1_approve ||
              (assets?.user1_approve && assets.user2_approve)
                ? show && (
                    <EditAssetModal
                      {...{
                        id,
                        show,
                        handleClose,
                        loading,
                        assets,
                        setLoading,
                        disabled,
                        setDisable,
                        refresh,
                        setRefresh,
                      }}
                    />
                  )
                : show && (
                    <VerifyUpdateModal
                      {...{
                        id,
                        show,
                        handleClose,
                        loading,
                        assets,
                        setLoading,
                        refresh,
                        setRefresh,
                      }}
                    />
                  )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default AssetDetail;
