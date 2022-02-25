import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { getItoSeriesById, verifyGoogle } from "../../../Redux/actions/actions";
import Moment from "react-moment";
import VerifySeriesCreationModal from "./VerifySeriesCreationModal";
import UpdateSeriesModal from "./UpdateSeriesModal";
import VerifySeriesUpdationModal from "./VerifySeriesUpdationModal";

const SeriesDetail = ({ match, getItoSeriesById, location }) => {
  const seriesDetail = useSelector((state) => state.ito?.seriesDetail);
  const userDetails = useSelector((state) => state.auth?.userDetails);

  console.log("series", seriesDetail,userDetails);

  const [showBtn, setShowBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showUpdateVerifyModal, setShowUpdateVerifyModal] = useState(false);

  useEffect(() => {
    getItoSeriesById({ seriesId: match.params.id });

    if (location?.state?.status !== "pastIto") {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }, []);

  const showVerifySeriesModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const showUpdateSeriesModal = (e) => {
    e.preventDefault();
    setShowUpdateModal(true);
  };

  const showVerifySeriesUpdationModal = (e) => {
    e.preventDefault();
    setShowUpdateVerifyModal(true);
  };

  const date = new Date().toISOString();

  return (
    <>
      <div className="col-12 col-md-8 offset-md-2">
        <div className="row">
          <div className="col-sm-12">
            <div className="card p-5">
              {/* <span className="pro-heading-b mb-2 mr-3">
                  ITO Seriess Name
                </span>{" "} */}
              <div className="d-flex justify-content-lg-between">
                <p style={{ fontSize: "12px" }}>
                  <span style={{ fontWeight: "bold", marginRight: "0.5rem" }}>
                    Series Name:
                  </span>
                  {seriesDetail && seriesDetail.name}
                </p>
                <p style={{ fontSize: "12px" }}>
                  <span style={{ fontWeight: "bold", marginRight: "0.5rem" }}>
                    ITO Name:
                  </span>
                  {seriesDetail && seriesDetail.ito_name}
                </p>
              </div>
              <p>
                <span className="pro-date mb-0">
                  <i className="far fa-calendar"></i>
                  <Moment format="D MMM YYYY" withTitle>
                    {seriesDetail && seriesDetail.start_date}
                  </Moment>
                  -{" "}
                  <Moment format="D MMM YYYY" withTitle>
                    {seriesDetail && seriesDetail.end_date}
                  </Moment>
                </span>
              </p>
              <div className="card mb-4">
                <div className="card-body bg-lit-gr">
                  <h4 className="font-18">Description</h4>
                  <p className="font-14 text-justify">
                    {seriesDetail && seriesDetail.description}
                  </p>
                </div>
              </div>
              <ul className="row profile-detail">
                <li className="col-12 col-md-6" style={{ border: "0px" }}>
                  <span>Supply</span>
                  <span>{seriesDetail?.supply}</span>
                </li>
                <li className="col-12 col-md-6" style={{ border: "0px" }}>
                  <span>Remaining Supply</span>
                  <span>{seriesDetail?.remaining_supply}</span>
                </li>
                {seriesDetail?.update_request_userid && (
                  <>
                    <li className="col-12 col-md-6" style={{ border: "0px" }}>
                      <span>Requested new supply</span>
                      <span>{seriesDetail?.new_supply}</span>
                    </li>
                    <li
                      className="col-12 col-md-6"
                      style={{ border: "0px" }}
                    ></li>
                    <li className="col-12 col-md-6" style={{ border: "0px" }}>
                      <span>Updated total supply</span>
                      <span>
                        {seriesDetail?.supply + seriesDetail?.new_supply}
                      </span>
                    </li>
                    <li className="col-12 col-md-6" style={{ border: "0px" }}>
                      <span>Updated remaining Supply</span>
                      <span>
                        {seriesDetail?.remaining_supply +
                          seriesDetail?.new_supply}
                      </span>
                    </li>
                  </>
                )}
              </ul>
              {showBtn && (
                <div>
                  {seriesDetail?.update_request_userid ? (
                    <button
                      className="btn btn-primary w-25 btn-lg mr-3"
                      onClick={showVerifySeriesUpdationModal}
                      disabled={
                        seriesDetail?.status !== "approved"
                        // seriesDetail?.update_request_userid === userDetails.id
                      }
                    >
                      Verify Updation
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary w-25 btn-lg mr-3"
                      onClick={showUpdateSeriesModal}
                      disabled={
                        seriesDetail?.status !== "approved" ||
                        date > seriesDetail?.end_date
                      }
                    >
                      Update Series
                    </button>
                  )}
                </div>
              )}
            </div>
            {showBtn &&seriesDetail?.user_id!==userDetails?.id &&(
              <div className="mt-3">
                <button
                  type="button"
                  className="btn btn-primary w-100 btn-lg mr-3"
                  onClick={showVerifySeriesModal}
                  disabled={seriesDetail?.status !== "pending"}
                >
                  {seriesDetail?.status === "pending"
                    ? "Verify"
                    : seriesDetail?.status?.replace(
                        seriesDetail?.status?.charAt(0),
                        seriesDetail?.status?.charAt(0).toUpperCase()
                      )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {showModal && (
        <VerifySeriesCreationModal
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      {showUpdateModal && (
        <UpdateSeriesModal
          showUpdateModal={showUpdateModal}
          setShowUpdateModal={setShowUpdateModal}
        />
      )}
      {showUpdateVerifyModal && (
        <VerifySeriesUpdationModal
          showUpdateVerifyModal={showUpdateVerifyModal}
          setShowUpdateVerifyModal={setShowUpdateVerifyModal}
        />
      )}
    </>
  );
};

export default connect(null, { getItoSeriesById })(SeriesDetail);
