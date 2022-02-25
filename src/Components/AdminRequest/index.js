import React, { useState, useEffect } from "react";
import { data } from "../../Components/Wallet/dummyData";
import Pagination from "@material-ui/lab/Pagination";
import config from "../../Constants/config";
import ConfirmRequestItem from "./confirmRequesetItem";
import { connect } from "react-redux";
import ApprovedRequests from "./ApprovedRequests/index";
import RejectedRequests from "./RejectedRequests";
import TableWithDetailButton from "../CommonComponents/TableWithDetailButton";
import {
  getDepositesList,
  confrimDeposite,
} from "../../../src/Services/adminRequest";

import SingleApproved from "./SingleApproved/index";
import { columns } from "./ColumnData";
import browserRoute from "../../Constants/browserRoutes";

const AdminRequest = ({ adminRequest, getDepositesList }) => {
  const { pendingDepositeList } = adminRequest;

  useEffect(() => {
    getDepositesList();
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

  const countData = pendingDepositeList && pendingDepositeList.length;

  //noOfScreens
  useEffect(() => {
    if (countData % itemsPerScreen === 0) {
      setCount(Math.floor(countData / itemsPerScreen));
    } else {
      setCount(Math.floor(countData / itemsPerScreen) + 1);
    }
  }, [countData, itemsPerScreen]);
  console.log(pendingDepositeList);
  return (
    <div className="col-12 col-md-8 offset-md-2">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="table-responsive">
              <TableWithDetailButton
                data={pendingDepositeList}
                columns={columns}
                isViewDetailBtn={true}
                RouteBtn={browserRoute.ADMIN_REQUESTS_DETAILS_BTN}
                title={"PENDING DEPOSIT LIST"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12  mt-5">
        <div className="card-body  p-0">
          <SingleApproved />
        </div>
      </div>

      <div className="col-md-12 mb-5 mt-5">
        <div className="card-body  p-0">
          <ApprovedRequests />
        </div>
      </div>
      <div className="col-md-12 mb-5 mt-5">
        <div className="card-body  p-0">
          <RejectedRequests />
        </div>
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
  getDepositesList,
})(AdminRequest);
