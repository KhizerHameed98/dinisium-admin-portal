import React from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import browserRoute from "../../../Constants/browserRoutes";

const SubscriptionDetail = () => {
  const history = useHistory();
  const subscriptionDetail = useSelector((state) => state.ito?.subscription);

  const toCreateIto = (e) => {
    e.preventDefault();
    history.push(
      browserRoute.CREATE_ITO_FOR_SUBSCIRPTION_BTN + subscriptionDetail?.id
    );
  };

  return (
    <div className="row mt-2">
      <div className="col-sm-12">
        <h3>Subscription</h3>
        <div className="card p-5">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {/* <span className="pro-heading-b mb-2 mr-3">
                  ITO Seriess Name
                </span>{" "} */}
            <div className="mr-4">
              <b>ITO name</b>
              <p className="pro-heading-b">{subscriptionDetail?.ito_name}</p>
            </div>
            <div className="mr-4">
              <b>Token name</b>
              <p className="pro-heading-b">{subscriptionDetail?.ito_token}</p>
            </div>
            <div className="mr-4">
              <b>Series name</b>
              <p className="pro-heading-b">{subscriptionDetail?.ito_series}</p>
            </div>
          </div>
          <p>
            <span className="pro-date mb-0">
              <i className="far fa-calendar"></i>
              <Moment format="D MMM YYYY" withTitle>
                {subscriptionDetail?.start_date}
              </Moment>{" "}
              -{" "}
              <Moment format="D MMM YYYY" withTitle>
                {subscriptionDetail?.end_date}
              </Moment>
            </span>
          </p>
          <div className="card mb-4">
            <div className="card-body bg-lit-gr">
              <h4 className="font-18">Description</h4>
              <p className="font-14 text-justify">
                {subscriptionDetail?.description}
              </p>
            </div>
          </div>
          <ul className="row profile-detail">
            <li className="col-12 col-md-6" style={{ border: "0px" }}>
              <span>Threshold Type</span>
              <span>{subscriptionDetail?.threshold_type}</span>
            </li>
            <li className="col-12 col-md-6" style={{ border: "0px" }}>
              <span>Threshold</span>
              <span>$ {subscriptionDetail?.threshold}</span>
            </li>
            <li className="col-12 col-md-6" style={{ border: "0px" }}>
              <span>Threshold reached</span>
              <span>$ {subscriptionDetail?.current}</span>
            </li>
          </ul>

          {subscriptionDetail?.current >= subscriptionDetail?.threshold &&
            new Date(subscriptionDetail?.end_date) <= new Date() && (
              <>
                {subscriptionDetail?.ito_series_id &&
                subscriptionDetail?.is_launched ? (
                  <div className="mt-3 text-center">
                    <h2>Successful</h2>
                  </div>
                ) : (
                  <div className="mt-3">
                    <button
                      type="button"
                      className="btn btn-primary w-100 btn-lg mr-3"
                      onClick={toCreateIto}
                      //   disabled={seriesDetail?.status !== "pending"}
                    >
                      Launch Subscription
                    </button>
                  </div>
                )}
              </>
            )}
          {subscriptionDetail?.current < subscriptionDetail?.threshold &&
            new Date(subscriptionDetail?.end_date) <= new Date() && (
              <div className="mt-3 text-center">
                <h2>Unsuccessful</h2>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDetail;
