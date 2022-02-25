import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import config from "../../../Constants/config";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import SellRequestItem from "./sellRequestItem";
import { columns } from "./ColumnData";
import { approveOrderRequest } from "../../../Redux/actions/actions";
import { toast } from "react-toastify";
import { connect, useDispatch } from "react-redux";
import {
  ApproveOrder,
  getExhangeOrders,
  getSellRequestsList,
  RejectOrder,
} from "../../../Services/exchangeServices";
import { useSelector } from "react-redux";

const SellRequests = ({
  refresh,
  setrefresh,
  getSellRequestsList,
  data,
  auth: {
    userDetails: { ito_id },
  },
}) => {
  const { sellRequestList } = data;
  const user_id = useSelector((state) => state.auth.userDetails.id);

  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen

  const handleChange = (event, value) => {
    setScreen(value);
  };

  const filtertedDatas = sellRequestList.filter((item) => {
    return item.order_type == "sell_order";
  });

  const filtertedData = filtertedDatas.filter((item) => {
    return item.status === "pending" || item.status === "single_approved";
  });

  const countData = filtertedData && filtertedData.length;

  //noOfScreens
  useEffect(() => {
    if (countData % config.itemsPerScreen === 0) {
      setCount(Math.floor(countData / config.itemsPerScreen));
    } else {
      setCount(Math.floor(countData / config.itemsPerScreen) + 1);
    }
  }, [countData]);

  useEffect(() => {
    const itoId = (ito_id && ito_id) || 0;

    getSellRequestsList({ itoId });
  }, [refresh]);

  const dispatch = useDispatch();

  // const Orders = useSelector((state) => console.log(state));

  useEffect(() => {
    dispatch(getExhangeOrders());
  }, [refresh]);

  const Orderss = useSelector((state) => state.exchange.Orders.data);

  const approveTransaction = (e) => {
    e.preventDefault();
    approveOrderRequest({
      exchangeId: data.id,
      setDisable,
      refresh,
      setrefresh,
    });
    // console.log("I was clicked");
  };
  const [disable, setDisable] = useState(false);

  const [showModal, setShowModal] = useState(false);

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
    console.log("Reject id", id);
    const data = {
      id: id,
      status: "rejected",
      rejectionMessage: Messages,
    };
    // toast.warning("Request Rejected");
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

  return (
    <div className="card mb-4">
      <div className="card-body  srl-bar p-0">
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
            title={"SELL REQUESTS"}
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
  getSellRequestsList,
})(SellRequests);
