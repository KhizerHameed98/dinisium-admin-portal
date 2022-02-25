import React, { useEffect, useState } from "react";
import config from "../../../Constants/config";
import { columns } from "./ColumnData";
// import { data } from "../dummyData";
import browserRoute from "../../../Constants/browserRoutes";

import { getOngoingItoSeries } from "../../../Redux/actions/actions";
import { connect } from "react-redux";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { useHistory } from "react-router-dom";

const Ongoing = ({
  auth: {
    userDetails: { ito },
  },
  ito: {
    ongoingData: { data },
  },
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

  // data?.sort((a, b) => {
  //   return a?.name - b?.name;
  // });

  // data?.sort((a, b) => {
  //   return a?.ito_name - b?.itoname;
  // });
  // data?.sort((a, b) => {
  // return a?.name?.toLowerCase() - b?.name?.toLowerCase();
  // if (a?.name?.toUpperCase() < b?.name?.toUpperCase()) {
  //   return -1;
  // }
  // if (a?.name > b?.name) {
  //   return 1;
  // }
  // return 0;
  // return a.status === "pending" ? -1 : 1;
  // });
  // data?.sort((a, b) => {
  //   // return b?.status - a?.status;

  //   if (a?.status.toLowerCase() < b.status.toLowerCase()) {
  //     return -1;
  //   }
  //   if (a?.status.toLowerCase() > b?.status.toLowerCase()) {
  //     return 1;
  //   }
  //   return 0;
  // });
  // data?.sort((a, b) => {
  //   return a?.start_date - b?.start_date;
  // });

  // data?.sort((a, b) => {
  //   return a?.end_date - b?.end_date;
  // });

  useEffect(() => {
    getOngoingItoSeries(ito ? ito.id : 0);
  }, []);

  const history = useHistory();
  const clickIto = (id) => {
    history.push(`${browserRoute.ITO_MANAGEMENT_DETAILS_BTN}` + id);
  };

  return (
    <>
      <div className="card mb-2">
        <div className="card-body p-0">
          <div className="table-responsive">
            <TableWithDetailButton
              title={"ONGOING ITO SERIES"}
              columns={columns(clickIto)}
              data={data}
              RouteBtn={browserRoute.SERIES_DETAILS_BTN}
              isViewDetailBtn={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  ito: state.ito,
  auth: state.auth,
});

export default connect(mapStateToProps, { getOngoingItoSeries })(Ongoing);
