import React, { useEffect, useState } from "react";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { Link } from "react-router-dom";
import { approveOrderRequest } from "../../../Redux/actions/actions";

import Pagination from "@material-ui/lab/Pagination";
import { data1 } from "../dummyData";
import config from "../../../Constants/config";
import { toast } from "react-toastify";
import { connect, useDispatch } from "react-redux";
import {
  ApproveOrder,
  getBuyRequestsList,
  RejectOrder,
} from "../../../Services/exchangeServices";
import BuyRequestItem from "./buyRequestItem";
import { columns } from "./ColumnData";
import { getExhangeOrders } from "../../../Services/exchangeServices";
import { useSelector } from "react-redux";

const BuyRequests = ({
  refresh,
  setrefresh,
  auth: {
    userDetails: { ito_token, ito_id },
  },
  getBuyRequestsList,
  data,
}) => {
  const { buyRequestList } = data;
  const user_id = useSelector((state) => state.auth.userDetails.id);

  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen

  const handleChange = (event, value) => {
    setScreen(value);
  };

  const [showModal, setShowModal] = useState(false);

  const filtertedDatas = buyRequestList.filter((item) => {
    return item.order_type == "buy_order";
  });

  const filtertedData = filtertedDatas.filter((item) => {
    return item.status === "pending" || item.status === "single_approved";
  });
  console.log("FILTERED DATA", filtertedData);
  const countData = filtertedData && filtertedData.length;

  const dispatch = useDispatch();
  //noOfScreens
  useEffect(() => {
    if (countData % config.itemsPerScreen === 0) {
      setCount(Math.floor(countData / config.itemsPerScreen));
    } else {
      setCount(Math.floor(countData / config.itemsPerScreen) + 1);
    }
  }, [countData]);

  const approveTransaction = (e) => {
    e.preventDefault();
    approveOrderRequest({
      exchangeId: data.id,
      setDisable,
      refresh,
      setrefresh,
    });
  };
  const [disable, setDisable] = useState(false);

  const Orders = useSelector((state) => state.exchange.Orders.data);

  const [Messages, setMessages] = useState("");

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChangee = (e) => {
    setMessages(e.target.value);
  };

  const ModalAppear = () => {
    setShowModal(true);
  };

  const RejectOrders = (id) => {
    const data = {
      id: id,
      status: "rejected",
      rejectionMessage: Messages,
    };
    dispatch(RejectOrder({ data, refresh, setrefresh }));
    setShowModal(false);
    setMessages("");
  };

  const Approve = (approveid) => {
    console.log("approve id ", approveid);
    const data = {
      id: approveid,
      status: "approved",
    };
    dispatch(ApproveOrder({ data, refresh, setrefresh }));
  };

  useEffect(() => {
    const itoId = (ito_id && ito_id) || 0;
    getBuyRequestsList({ itoId });
  }, [refresh]);

  useEffect(() => {
    dispatch(getExhangeOrders());
  }, [refresh]);

  return (
    <div className="card mb-4">
      <div className="card-body srl-bar p-0">
        <div className="table-responsive">
          <TableWithDetailButton
            data={filtertedData}
            columns={columns(
              user_id,
              approveTransaction,
              showModal,
              handleClose,
              handleChangee,
              Messages,
              ModalAppear,
              RejectOrders,
              Approve
            )}
            title={"BUY REQUESTS"}
          />
        </div>
      </div>
    </div>
  );
};

const mpaStateToProps = (state) => {
  return {
    data: state.exchange,
    auth: state.auth,
  };
};

export default connect(mpaStateToProps, {
  getBuyRequestsList,
})(BuyRequests);
