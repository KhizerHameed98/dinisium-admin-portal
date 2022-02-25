import React, { useState } from "react";
import Moment from "react-moment";
import { useHistory } from "react-router";
import browserRoute from "../../../Constants/browserRoutes";

const AssetDetailItem = ({ assetItemData }) => {
  // const [show, setShow] = useState(false);
  // const [loading, setLoading] = useState(false);
  const history = useHistory();
  // const handleClose = () => setShow(false);

  // const openEditModal = () => setShow(true);

  const toAssetDetail = (e) => {
    e.preventDefault();
    history.push(`${browserRoute.ASSET_MANAGEMENT_DETAILS}${assetItemData.id}`);
  };

  return (
    <>
      <td>{assetItemData?.name}</td>
      <td>
        {assetItemData?.type.replace(
          assetItemData?.type.charAt(0),
          assetItemData?.type.charAt(0).toUpperCase()
        )}
      </td>
      <td>{assetItemData?.price} $</td>

      <td>{assetItemData?.unit}</td>
      <td>{assetItemData?.total_supply}</td>
      <td>{assetItemData?.remaining_supply}</td>
      <td>
        <Moment format="YYYY/MM/DD">{assetItemData?.created_at}</Moment>
      </td>

      <td>
        <button
          className="dls-btn bg-semi-black text-white"
          onClick={toAssetDetail}
        >
          View Details
        </button>
      </td>
      {/* <td>
        {!assetItemData?.user1_approve ||
        (assetItemData?.user1_approve && assetItemData.user2_approve) ? (
          <button
            className="dls-btn bg-semi-black text-white btn btn-dark"
            onClick={openEditModal}
            disabled={loading}
          >
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}{" "}
            Update
          </button>
        ) : (
          <button
            className="dls-btn bg-semi-black text-white btn btn-dark"
            onClick={openEditModal}
            disabled={loading}
          >
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}{" "}
            Verify Update Request
          </button>
        )}
      </td> */}
      {/* {!assetItemData?.user1_approve ||
      (assetItemData?.user1_approve && assetItemData.user2_approve)
        ? show && (
            <EditAssetModal
              {...{ show, handleClose, loading, assetItemData, setLoading }}
            />
          )
        : show && (
            <VerifyUpdateModal
              {...{ show, handleClose, loading, assetItemData, setLoading }}
            />
          )} */}
    </>
  );
};

export default AssetDetailItem;
