import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RejectedData } from "../../../Services/rejectWithdraw";

import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { columns } from "./ColumnData";

const RejectedRequests = () => {
  const dispatch = useDispatch();
  const rejectedData = useSelector(
    (state) => state?.rejectedWithdraw?.rejectedrequestdata?.data
  );

  useEffect(() => {
    dispatch(RejectedData());
  }, []);
  return (
    <>
      <div className=""></div>
      <div className="card mb-4">
        <div className="card-body  p-0">
          <div className="table-responsive">
            <TableWithDetailButton
              data={rejectedData}
              columns={columns}
              title={"REJECTED REQUESTS"}
              // isViewDetailBtn={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RejectedRequests;
