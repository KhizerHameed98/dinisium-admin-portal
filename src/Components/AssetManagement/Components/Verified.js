import React, { useEffect } from "react";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { getApprovedList } from "../../../Services/assetManagementServices";
import browserRoute from "../../../Constants/browserRoutes";
import { useDispatch, useSelector } from "react-redux";
import { verifiedColumn } from "./verifiedColumn";
const Verified = () => {
  const approved = useSelector(
    (state) => state?.assetManagement?.approved?.data
  );

  approved?.sort((a, b) => {
    return a?.price - b?.price;
  });

  approved?.sort((a, b) => {
    return a?.name - b?.name;
  });


  approved?.sort((a, b) => {
    return a?.type - b?.type;
  });

  approved?.sort((a, b) => {
    return a?.total_supply - b?.total_supply;
  });

  approved?.sort((a, b) => {
    return a?.remaining_supply - b?.remaining_supply
  });

  approved?.sort((a, b) => {
    return a?.created_at - b?.created_at;
  });
  approved?.sort((a, b) => {
    return a?.unit - b?.unit;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApprovedList());
  }, []);
  return (
    <>
      <div className="card mb-2">
        <div className="card-body p-0">
          <div className="table-responsive">
            <TableWithDetailButton
              columns={verifiedColumn}
              title={"APPROVED"}
              data={approved}
              isViewDetailBtn={true}
              RouteBtn={browserRoute.ASSET_MANAGEMENT_DETAILS_BTN}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Verified;
