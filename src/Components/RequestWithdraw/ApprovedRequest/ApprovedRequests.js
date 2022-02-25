import React, { useState, useEffect } from "react";
import config from "./../../../Constants/config";
import Pagination from "@material-ui/lab/Pagination";
import { data } from "../Withdraw dummyData";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { columns } from "./ColumnData";
import { useDispatch, useSelector } from "react-redux";
import { approvedRequests } from "../../../Services/approvedRequests";
import approvedRequestss from "../../../Redux/reducers/approvedRequestss";

const ApprovedRequests = ({ show }) => {
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen

  const handleChange = (event, value) => {
    setScreen(value);
  };

  const countData = data && data.length;

  // const Result = useSelector((state) => {
  //   approvedRequestss.approvedRequests.data;
  // });

  const Result = useSelector(
    (state) => state.approvedRequestss?.approvedRequests.data
  );

  // const state = useSelector((state) => console.log("state", state));
  const dispatch = useDispatch();

  //noOfScreens
  useEffect(() => {
    if (countData % config.itemsPerScreen === 0) {
      setCount(Math.floor(countData / config.itemsPerScreen));
    } else {
      setCount(Math.floor(countData / config.itemsPerScreen) + 1);
    }
  }, [countData, config.itemsPerScreen]);

  useEffect(() => {
    dispatch(approvedRequests());
  }, [show]);

  return (
    <>
      <div className=""></div>
      <div className="card mb-4">
        <div className="card-body  p-0">
          <div className="table-responsive">
            <TableWithDetailButton
              data={Result}
              columns={columns}
              title={"APPROVED REQUESTS"}
              // isViewDetailBtn={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApprovedRequests;
