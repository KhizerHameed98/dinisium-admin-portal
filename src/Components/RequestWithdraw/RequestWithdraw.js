import React, { useState } from "react";
import { PendingRequest } from "./PendingRequest/PendingRequest";
import SingleApprovedRequests from "./SingleApprovedRequest/SingleApprovedRequests";
import ApprovedRequests from "./ApprovedRequest/ApprovedRequests";
import StatusModal from "./StatusModal";
import RejectedRequests from "./Rejected Request/RejectedRequests";

const RequestWithdraw = React.memo(() => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="col-12 col-md-8 offset-md-2">
        <PendingRequest show={show} setShow={setShow} />
      </div>

      <div className="col-12 col-md-8 offset-md-2">
        <SingleApprovedRequests show={show} setShow={setShow} />
      </div>

      <div className="col-12 col-md-8 offset-md-2">
        <ApprovedRequests show={show} />
      </div>
      <div className="col-12 col-md-8 offset-md-2">
        <RejectedRequests show={show} />
      </div>
      {/* {show && <StatusModal show={show} setShow={setShow} />} */}
    </>
  );
});

export default RequestWithdraw;
