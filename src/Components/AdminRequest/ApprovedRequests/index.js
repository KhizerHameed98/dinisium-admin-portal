import React, { useState, useEffect } from "react";
import TableWithDefaultButton from "../../CommonComponents/TableWithDetailButton";
// import { data } from "../../Wallet/dummyData";
import config from "../../../Constants/config";
import RequestsItem from "./requestsItem";

import { connect } from "react-redux";
import { getAllDepositesList } from "../../../Redux/actions/actions";
import { columns } from "./ColumnData";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import browserRoute from "../../../Constants/browserRoutes";

const ApprovedRequests = ({ getAllDepositesList, adminRequest }) => {
  const { allDepositesList } = adminRequest;

  useEffect(() => {
    getAllDepositesList("approved");
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

  const countData = allDepositesList && allDepositesList.length;

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
        <TableWithDetailButton
          data={allDepositesList}
          columns={columns}
          isViewDetailBtn={true}
          RouteBtn={browserRoute.ADMIN_REQUESTS_DETAILS_BTN}
          title={"Approved REQUESTS"}
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
  getAllDepositesList,
})(ApprovedRequests);
