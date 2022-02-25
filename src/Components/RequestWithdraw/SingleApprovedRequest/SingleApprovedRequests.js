import React, { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { data } from "../Withdraw dummyData";
import config from "../../../Constants/config";
import { toast } from "react-toastify";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { columns } from "./ColumnData";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { singleApproved } from "../../../Services/singleapproved";
import { approveWithdraw } from "../../../Services/approveWithdraw";
import { rejectWithdraw } from "../../../Services/rejectWithdraw";
import { useHistory } from "react-router";
import Route from "../../../Constants/browserRoutes";

const SingleApprovedRequests = ({ show, setShow }) => {
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen

  const [Message, setMessage] = useState("");

  //showModal Field
  const [showModal, setShowModal] = useState(false);
  const [showid, setShowid] = useState();

  const handleChangee = (e) => {
    setMessage(e.target.value);
  };

  const countData = data && data.length;

  const handleChange = (event, value) => {
    setScreen(value);
  };

  const singleApprovedRequests = useSelector(
    (state) => state.singleapproved.result.data
  );
  console.log(singleApprovedRequests);

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
    dispatch(singleApproved());
  }, [show]);

  const approveRequest = (id) => {
    toast.success("Request Approved");
    const data = {
      status: "approved",
    };

    dispatch(approveWithdraw(data, id));
    setTimeout(() => {
      setShow(true);
    }, 5000);
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
    };
    dispatch(rejectWithdraw(dataa, id));
    toast.error("Request Rejected");
    setTimeout(() => {
      setShow(true);
    }, 5000);
  };

  const history = useHistory();

  const ViewDetail = (e, obj) => {
    e.preventDefault();
    history.push({
      pathname: Route.SINGLE_APPROVE_REQUEST_VIEWDETAIL,
      state: obj,
    });
  };
  return (
    <>
      <div className="card mb-4">
        <div className="card-body  p-0">
          <div className="table-responsive">
            <TableWithDetailButton
              data={singleApprovedRequests}
              columns={columns(
                approveRequest,
                rejectRequest,
                showModal,
                handleClose,
                Message,
                handleChangee,
                RejectRequest,
                ViewDetail
              )}
              // isViewDetailBtn={true}
              title={"SINGLE APPROVED REQUESTS"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleApprovedRequests;
