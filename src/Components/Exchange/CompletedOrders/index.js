import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { data1 } from "../dummyData";
import config from "../../../Constants/config";
import CompletedItem from "./completedItem";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { getCompletedOrdersList } from "../../../Redux/actions/actions";
import { connect } from "react-redux";
import { columns } from "./ColumnData";

const CompletedOrders = ({
  exchange: { data },
  getCompletedOrdersList,
  auth: {
    userDetails: { ito_id },
  },
}) => {
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);

  const [readMore, setReadMore] = useState(false);
  //No. of Items Per Screen

  console.log("data is ", data);

  const handleChange = (event, value) => {
    setScreen(value);
  };

  const filtertedData = data.filter((item) => {
    return item.status === "approved" || item.status === "rejected";
  });
  const countData = filtertedData && filtertedData.length;

  //noOfScreens
  useEffect(() => {
    if (countData % config.userPerScreen === 0) {
      setCount(Math.floor(countData / config.userPerScreen));
    } else {
      setCount(Math.floor(countData / config.userPerScreen) + 1);
    }
  }, [countData]);

  useEffect(() => {
    const itoId = (ito_id && ito_id) || 0;
    getCompletedOrdersList({ itoId });
  }, []);

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="d-block"></div>
        </div>
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body  p-0">
              <div className="table-responsive">
                <TableWithDetailButton
                  title={"COMPLETED ORDER"}
                  data={filtertedData}
                  columns={columns(readMore, setReadMore)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  exchange: state.exchange,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCompletedOrdersList })(
  CompletedOrders
);
