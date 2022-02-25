import React, { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { data } from "../Withdraw dummyData";
import config from "./../../../Constants/config";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { columns } from "./ColumnData";
import { useSelector, useDispatch } from "react-redux";
import { approveWithdraw } from "../../../Services/approveWithdraw";
import { getWithdrawRequest } from "../../../Services/getWithdrawRequest";
import { rejectWithdraw } from "../../../Services/rejectWithdraw";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import Route from "../../../Constants/browserRoutes";
import browserRoute from "../../../Constants/browserRoutes";
import ViewDetails from "./ViewDetails/ViewDetail";
import { getKycbyId, getKycById } from "../../../Services/kycServices";
import ViewDetail from "./ViewDetails/ViewDetail";

export const PendingRequest = ({ show, setShow }) => {
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);

  //Reject Input Field
  const [Message, setMessage] = useState("");

  //showModal Field
  const [showModal, setShowModal] = useState(false);

  const [showid, setShowid] = useState();

  const handleChangee = (e) => {
    setMessage(e.target.value);
  };

  const WithdrawList = useSelector(
    (state) => state.getWithdrawRequest.result.data
  );

  const state = useSelector((state) => console.log("state is ", state));

  const dispatch = useDispatch();

  const history = useHistory();
  console.log("history is ", history);

  const countData = data && data.length;

  const handleChange = (event, value) => {
    setScreen(value);
  };

  //noOfScreens
  useEffect(() => {
    if (countData % config.itemsPerScreen === 0) {
      setCount(Math.floor(countData / config.itemsPerScreen));
    } else {
      setCount(Math.floor(countData / config.itemsPerScreen) + 1);
    }
  }, [countData, config.itemsPerScreen]);

  //Geting Withdraw Request Response
  useEffect(() => {
    dispatch(getWithdrawRequest());
    // dispatch(getExhangeOrders());
  }, [show]);

  const approveRequest = (id) => {
    //toast.success("Request Approved");
    const data = {
      status: "approved",
      setShow,
    };
    dispatch(approveWithdraw(data, id));
  };

  const rejectRequest = (id) => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const RejectRequest = (id) => {
    const dataa = {
      status: "rejected",
      rejectionMessage: Message,
      setShow,
    };
    dispatch(rejectWithdraw(dataa, id, setShow));
    // toast.error("Request Rejected");
  };

  const statess = useSelector((state) => state.getWithdrawRequest.result.data);
  console.log("..", statess);

  const OpenViewDetail = (e, obj) => {
    e.preventDefault();
    console.log("id hit");
    // dispatch(getKycbyId(id));
    history.push({
      pathname: Route.WITHDRAW_REQUEST_VIEWDETAIL,
      state: obj,
    });
  };

  return (
    <>
      <div className="card mb-4">
        <div className="card-body p-0">
          <div className="table-responsive">
            <TableWithDetailButton
              data={WithdrawList}
              columns={columns(
                approveRequest,
                rejectRequest,
                showModal,
                handleClose,
                Message,
                handleChangee,
                RejectRequest,
                OpenViewDetail
              )}
              title={"PENDING REQUESTS"}
              // isViewDetailBtn={true}
              // RouteBtn={browserRoute.WITHDRAW_REQUEST_VIEWDETAIL}
            />
          </div>
        </div>
      </div>
    </>
  );
};
