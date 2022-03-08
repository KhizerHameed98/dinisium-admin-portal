import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getWithdrawRequest } from "../../../../Services/getWithdrawRequest";
import Route from "../../../../Constants/browserRoutes";
import { useHistory } from "react-router";
import {
  getKycbyId,
  GetKycStatus,
  getSingleApprovedKyc,
} from "../../../../Services/kycServices";
import { useSelector } from "react-redux";
import { approveWithdraw } from "../../../../Services/approveWithdraw";
import { rejectWithdraw } from "../../../../Services/rejectWithdraw";

const ViewDetails = (props) => {
  const [show, setShow] = useState(false);
  const [rejectionMessage, setRejectionMessage] = useState("");

  const id = props.location.state.id;
  const kyc_id = props.location.state.kycid;
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKycbyId(props.location.state.kycid));
  }, []);

  const KycDataa = useSelector((state) => state?.kyc?.response?.data);

  const admin_id = useSelector((state) => state?.auth?.userDetails?.id);

  const amount = props.location.state.amount;
  const approveRequest = (id) => {
    const data = {
      status: "approved",
    };
    dispatch(approveWithdraw(data, id));
    history.push(Route.REQUEST_WITHDRAW);
  };

  const rejectRequest = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    setRejectionMessage(e.target.value);
  };

  const RejectRequest = () => {
    const dataa = {
      status: "rejected",
      rejectionMessage: rejectionMessage,
    };
    dispatch(rejectWithdraw(dataa, id, setShow));
    setShow(false);
    history.push(Route.REQUEST_WITHDRAW);
  };

  return (
    <>
      <div className="col-12 col-md-10 offset-md-1">
        {/* <Modal
          size="sm"
          show={show}
          onHide={handleClose}
          style={{ opacity: 1 }}
          centered
        > */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <div className="modal-header border-0">
            <button type="button" className="close" onClick={handleClose}>
              <span className="font-18">&times;</span>
            </button>
          </div>
          <Modal.Body className="text-center">
            <div>
              <p>Give a Reason For Rejection</p>
              <input
                type="text"
                placeholder="Rejection Message*"
                className="form-control"
                name="rejection_message"
                value={rejectionMessage}
                onChange={handleChange}
                required
              />
              <br />
              <button
                type="button"
                className="btn btn-secondary w-30 btn-md mr-2"
                onClick={() => RejectRequest(id)}
              >
                Reject
              </button>
            </div>
          </Modal.Body>
          <Modal.Footer className="border-0"></Modal.Footer>
        </Modal>

        <div className="row">
          <div className="col-sm-12">
            <div className="card pu-rel text-dark p-5 mb-3">
              <h2
                className="page-title-heading mb-4 font-30 text-center d-flex justify-content-between"
                style={{ paddingLeft: "35px", paddingRight: "20px" }}
              >
                Details
                {/* <CSVLink
                  data={csvData}
                  headers={headers}
                  filename="KYC_Detail.csv"
                > */}
                {/* <button className="btn btn-primary">Export CSV</button>  */}
                {/* </CSVLink> */}
              </h2>

              <div className="row">
                <div className="col-12 col-md-12">
                  <ul className="row profile-detail">
                    <li className="col-12 col-md-6">
                      <span>Name</span>
                      <span>{KycDataa?.full_name}</span>
                    </li>

                    <li className="col-12 col-md-6">
                      <span>Nationality</span>
                      <span>{KycDataa?.nationality}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Date Of Birth</span>
                      <span>{KycDataa?.dob}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Address</span>
                      <span>{KycDataa?.permanent_address}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>City</span>
                      <span>{KycDataa?.city}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>State or Province</span>
                      <span>{KycDataa?.state_or_province}</span>
                    </li>

                    <li className="col-12 col-md-6">
                      <span>Country</span>
                      <span>{KycDataa?.country}</span>
                    </li>

                    <li className="col-12 col-md-6">
                      <span>Bank Name</span>
                      <span>{KycDataa?.bank_name}</span>
                    </li>

                    <li className="col-12 col-md-6">
                      <span>Swift Code</span>
                      <span>{KycDataa?.swift}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Account Number</span>
                      <span>{KycDataa?.account_number}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Account Title</span>
                      <span>{KycDataa?.account_title}</span>
                    </li>

                    <li className="col-12 col-md-6">
                      <span>KYC</span>
                      <span>{KycDataa?.kyc_status}</span>
                    </li>

                    <li className="col-12 col-md-6">
                      <span>Amount Withdraw</span>
                      <span>{amount?.toFixed(2)}</span>
                    </li>
                  </ul>
                </div>
                {admin_id === props?.location?.state?.approved_by ? (
                  <div>
                    <p
                      style={{
                        marginLeft: "25rem",
                        color: "#2e7d32",
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                      }}
                    >
                      Approved by you
                    </p>
                  </div>
                ) : (
                  <>
                    <button
                      style={{ marginLeft: "5%", width: "150px" }}
                      className="btn btn-primary text-white width-max-content"
                      onClick={() => approveRequest(id)}
                    >
                      Approve
                    </button>

                    <button
                      style={{ marginLeft: "55%", width: "150px" }}
                      className="btn btn-secondary text-white width-max-content"
                      onClick={rejectRequest}
                    >
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end inner row --> */}
      </div>
    </>
  );
};

export default ViewDetails;
