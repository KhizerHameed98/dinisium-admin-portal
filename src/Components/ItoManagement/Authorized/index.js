import React, { useEffect, useState } from "react";
import config from "../../../Constants/config";
// import { data } from "../dummyData";
import AuthorizedItem from "./AuthorizedItem";
import {
  getOngoingItoSeries,
  getAssignedItos,
} from "../../../Redux/actions/actions";
import { connect } from "react-redux";

import browserRoute from "../../../Constants/browserRoutes";
import { columns } from "./ColumnData";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";

const Authorized = ({
  auth: {
    userDetails: { ito },
  },
  ito: {
    assignedItosData: { data },
  },
  getAssignedItos,
  getOngoingItoSeries,
}) => {
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen

  const handleChange = (event, value) => {
    setScreen(value);
  };
  const countData = data && data.length;
  //noOfScreens
  useEffect(() => {
    if (countData % config.itemsPerScreen === 0) {
      setCount(Math.floor(countData / config.itemsPerScreen));
    } else {
      setCount(Math.floor(countData / config.itemsPerScreen) + 1);
    }
  }, [countData]);

  console.log("data", data);

  // data?.sort((a, b) => {
  // return a?.name?.toLowerCase() - b?.name?.toLowerCase();
  // if (a?.name?.toUpperCase() < b?.name?.toUpperCase()) {
  //   return -1;
  // }
  // if (a?.name > b?.name) {
  //   return 1;
  // }
  // return 0;
  //   return a.status === "pending" ? -1 : 1;
  // });

  // data?.sort((a, b) => {
  //   return a?.token_name - b?.token_name;
  // });

  // data?.sort((a, b) => {
  //   return a?.start_date - b?.start_date;
  // });

  // data?.sort((a, b) => {
  //   return a?.supply - b?.supply;
  // });

  // data?.sort((a, b) => {
  //   return b?.onhold - a?.onhold;
  // });

  // data?.sort((a, b) => {
  //   return a?.status?.toLowerCase() - b?.status?.toLowerCase();
  // });

  useEffect(() => {
    getAssignedItos();
  }, []);

  return (
    <>
      <div className="card mb-2">
        <div className="card-body p-0">
          <TableWithDetailButton
            title={"AUTHORIZED ITO"}
            columns={columns}
            data={data}
            RouteBtn={browserRoute.ITO_MANAGEMENT_DETAILS_BTN}
            isViewDetailBtn={true}
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  ito: state.ito,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getOngoingItoSeries,
  getAssignedItos,
})(Authorized);
