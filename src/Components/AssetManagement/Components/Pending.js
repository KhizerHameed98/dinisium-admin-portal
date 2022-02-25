import React, { useEffect } from "react";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import browserRoute from "../../../Constants/browserRoutes";
import { useDispatch, useSelector } from "react-redux";
import { getPendingList } from "../../../Services/assetManagementServices";
import { pendingColumns } from "./pendingColumn";

const Pending = () => {
  const data = useSelector((state) => state?.assetManagement?.pending?.data);
  
  data?.sort((a, b) => {
    return a?.price - b?.price;
  });

  data?.sort((a, b) => {
    return a?.name - b?.name;
  });


  data?.sort((a, b) => {
    return a?.type - b?.type;
  });

  data?.sort((a, b) => {
    return a?.total_supply - b?.total_supply;
  });

  data?.sort((a, b) => {
    return a?.remaining_supply - b?.remaining_supply
  });

  data?.sort((a, b) => {
    return a?.created_at - b?.created_at;
  });
  data?.sort((a, b) => {
    return a?.unit - b?.unit;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPendingList());
  }, []);
  return (
    <>
      <div className="card mb-2">
        <div className="card-body p-0">
          <div className="table-responsive">
            <TableWithDetailButton
              columns={pendingColumns}
              title={"PENDING"}
              data={data}
              isViewDetailBtn={true}
              RouteBtn={browserRoute.ASSET_MANAGEMENT_DETAILS_BTN}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pending;
