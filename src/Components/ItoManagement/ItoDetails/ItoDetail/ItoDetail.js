import { red } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import browserRoute from "../../../../Constants/browserRoutes";
import {
  updateOnholdStatusIto,
  makeItoCloseRequest,
} from "../../../../Redux/actions/actions";
import VerifyCloseRequestModal from "./VerifyCloseRequestModal";
import { getAssignedItoById } from "../../../../Services/itoServices";

const ItoDetail = ({ match }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const ito = useSelector((state) => state.ito?.ito);
  const onHold = useSelector((state) => state?.ito?.ito?.onhold);
  console.log('onHold' , onHold);
  const newState = useSelector((state) => console.log("state is ", state.ito));
  const admins = useSelector((state) => state.ito?.admins);
  const userDetails = useSelector((state) => state.auth?.userDetails);

  const [showVerify, setShowVerify] = useState(false);
  const [update, setUpdate] = useState(false);

  const blockUnblockIto = (e) => {
    e.preventDefault();
    dispatch(updateOnholdStatusIto(ito?.id, !ito?.onhold, setUpdate));
  };

  const itoCloseRequest = (e) => {
    e.preventDefault();
    dispatch(makeItoCloseRequest(ito?.id, { updated_closed: true }));
  };

  const showVerifyModal = (e) => {
    e.preventDefault();
    setShowVerify(true);
  };

  useEffect(() => {
    if (ito?.description) {
      document.getElementById("#description").innerHTML = ito?.description;
    }
  }, [ito?.description]);
  console.log(ito);

  useEffect(() => {
    dispatch(getAssignedItoById({ itoId: id }));
  }, [update]);

  return (
    <div className="row mb-3">
      <div className="col-sm-12">
        <h3>ITO</h3>
        <div className="card p-5">
          <div className="row">
            <div className="col-md-6 mb-2">
              <p>
                <span className="pro-heading-b">{ito?.name}</span>
              </p>
              <p>
                <span className="pro-date mb-0">
                  <i  className="far fa-calendar"></i>
                  <Moment
                    format="D MMM YYYY"
                    withTitle
                    style={{
                      marginLeft: "20px",
                    }}
                  >
                    {ito?.start_date}
                  </Moment>
                </span>
              </p>
            </div>
            <div className="col-md-6 mb-2">
              <p></p>
              {ito?.closed && <h3 style={{ color: "red" }}>Closed</h3>}
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body bg-lit-gr">
              <h4 className="font-18">Description</h4>
              <div className="font-14 text-justify" id="#description">
                {ito?.description}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-3">
              <b>Transaction hash</b>
              <div>{ito?.token_address}</div>
            </div>
            <div className="col-md-6 mb-2">
              <b>Termsheets</b>
              <ul>
                {ito?.term_sheets?.map((term_sheet, index) => (
                  <a
                    href={`${browserRoute.HOST}/${term_sheet}`}
                    target="_blank"
                    key={index}
                  >
                    <li>Termsheet {index + 1}</li>
                  </a>
                ))}
              </ul>
            </div>
            <div className="col-md-6 mb-2">
              <b>Alloted Admins</b>
              <ul>
                {admins?.map((admin) => (
                  <li key={admin.id}>{`${admin.fname} ${admin.lname}`}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <button
              className="btn btn-primary w-25 btn-lg mr-3"
              onClick={blockUnblockIto}
              disabled={ito?.closed || ito?.status !== "approved"}
            >
              {onHold ? "Unblock" : "Block"}
            </button>

            {ito?.updated_closed ? (
              <button
                className="btn btn-primary w-25 btn-lg mr-3"
                onClick={showVerifyModal}
                disabled={
                  ito?.closed_request_user === userDetails?.id || ito?.closed
                }
              >
                ITO Closed
              </button>
            ) : (
              <button
                className="btn btn-danger w-25 btn-lg mr-3"
                onClick={itoCloseRequest}
                disabled={ito?.status !== "approved"}
              >
                Generate Close Request
              </button>
            )}
          </div>
        </div>
      </div>
      {showVerify && (
        <VerifyCloseRequestModal {...{ showVerify, setShowVerify }} />
      )}
    </div>
  );
};

export default ItoDetail;
