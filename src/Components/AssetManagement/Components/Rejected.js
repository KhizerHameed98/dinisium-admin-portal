import React, { useEffect } from "react";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";

import browserRoute from "../../../Constants/browserRoutes";
import { useDispatch, useSelector } from "react-redux";
import { getRejectedList } from "../../../Services/assetManagementServices";
import { rejectedColumns } from "./rejectedColumn";

const Rejected = () => {
  const rejected = useSelector(
    (state) => state?.assetManagement?.rejected?.data
  );
  
  rejected?.sort((a, b) => {
    return a?.price - b?.price;
  });

  rejected?.sort((a, b) => {
    return a?.name - b?.name;
  });


  rejected?.sort((a, b) => {
    return a?.type - b?.type;
  });

  rejected?.sort((a, b) => {
    return a?.total_supply - b?.total_supply;
  });

  rejected?.sort((a, b) => {
    return a?.remaining_supply - b?.remaining_supply
  });

  rejected?.sort((a, b) => {
    return a?.created_at - b?.created_at;
  });
  rejected?.sort((a, b) => {
    return a?.unit - b?.unit;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRejectedList());
  }, []);
  return (
    <>
      <div className="card mb-2">
        <div className="card-body p-0">
          <div className="table-responsive">
            <TableWithDetailButton
              columns={rejectedColumns}
              title={"REJECTED"}
              data={rejected}
              isViewDetailBtn={true}
              RouteBtn={browserRoute.ASSET_MANAGEMENT_DETAILS_BTN}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rejected;
