import React, { useState, useEffect } from "react";
import TablewithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { data } from "../../Wallet/dummyData";
import Pagination from "@material-ui/lab/Pagination";
import config from "../../../Constants/config";
import SingleApprovedItem from "./singleApprovedItem";

import { connect } from "react-redux";
import { getSingleApprovedList } from "'../../../src/Services/adminRequest";
import { columns } from "../ColumnData";
import browserRoute from "../../../Constants/browserRoutes";

const SingleApproved = ({
  getSingleApprovedList,
  adminRequest: { singleApprovedList },
}) => {
  useEffect(() => {
    getSingleApprovedList();
  }, []);

  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen
  const itemsPerScreen = config.itemsPerScreen;

  const handleChange = (event, value) => {
    setScreen(value);
  };

  const countData = singleApprovedList && singleApprovedList.length;

  //noOfScreens
  useEffect(() => {
    if (countData % itemsPerScreen === 0) {
      setCount(Math.floor(countData / itemsPerScreen));
    } else {
      setCount(Math.floor(countData / itemsPerScreen) + 1);
    }
  }, [countData, itemsPerScreen]);

  return (
    <div className="card w-100">
      <div className="table-responsive">
        <TablewithDetailButton
          data={singleApprovedList}
          columns={columns}
          isViewDetailBtn={true}
          RouteBtn={browserRoute.ADMIN_REQUESTS_DETAILS_BTN}
          title={"Single Approved Requests"}
        />
      </div>
    </div>
  );
};

const mpaStateToProps = (state) => {
  return {
    adminRequest: state.adminRequest,
  };
};

export default connect(mpaStateToProps, {
  getSingleApprovedList,
})(SingleApproved);
