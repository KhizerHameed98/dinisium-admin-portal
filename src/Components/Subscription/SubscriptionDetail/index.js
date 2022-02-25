import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptionById } from "../../../Redux/actions/actions";
import Moment from "react-moment";
import VerifySubscriptionCreationModal from "./VerifySubscriptionCreationModal";
import { useHistory } from "react-router";
import browserRoute from "../../../Constants/browserRoutes";
import { subscription } from "../../../Routes/serverRoutes";

const SubscriptionDetail = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const subscriptionDetail = useSelector(
    (state) => state.subscription?.subscriptionDetail
  );

  const stateId = useSelector((state) => {
    return state?.auth?.userDetails?.id;
  });
  // console.log('detail' , subscriptionDetail?.user_id);
  const { user_id } = subscriptionDetail;
  console.log("id", user_id, stateId);

  const admins = useSelector((state) => state.subscription?.admins);

  const [showModal, setShowModal] = useState(false);

  const toCreateIto = (e) => {
    history.push(
      browserRoute.CREATE_ITO_FOR_SUBSCIRPTION_BTN + subscriptionDetail?.id
    );
  };

  const toItoDetail = (e) => {
    history.push(
      browserRoute.ITO_MANAGEMENT_DETAILS_BTN + subscriptionDetail?.ito_id
    );
  };

  const showVerifySubscriptionModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(getSubscriptionById(match.params.id));
  }, []);

  return (
    <>
      <div className="col-12 col-md-8 offset-md-2">
        <div className="row">
          <div className="col-sm-12">
            <div className="card p-5">
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {/* <span className="pro-heading-b mb-2 mr-3">
                  ITO Seriess Name
                </span>{" "} */}
                <div className="mr-4">
                  <b>ITO name</b>
                  <p className="pro-heading-b">
                    {subscriptionDetail?.ito_name}
                  </p>
                </div>
                <div className="mr-4">
                  <b>Token name</b>
                  <p className="pro-heading-b">
                    {subscriptionDetail?.ito_token}
                  </p>
                </div>
                <div className="mr-4">
                  <b>Series name</b>
                  <p className="pro-heading-b">
                    {subscriptionDetail?.ito_series}
                  </p>
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
              <div className="col-md-6 mb-2">
                <b>Alloted Admins</b>
                <ul>
                  {admins?.map((admin) => (
                    <li key={admin.id}>{`${admin.fname} ${admin.lname}`}</li>
                  ))}
                </ul>
              </div>

              {subscriptionDetail?.current >= subscriptionDetail?.threshold &&
                (new Date(subscriptionDetail?.end_date) <= new Date() ||
                  subscriptionDetail?.threshold_type === "limited") && (
                  <>
                    {subscriptionDetail?.ito_id &&
                    subscriptionDetail?.is_launched ? (
                      <div className="mt-3 text-center">
                        <h2>Successful</h2>
                        <button
                          type="button"
                          className="btn btn-primary btn-lg mr-3"
                          onClick={toItoDetail}
                        >
                          View Detail
                        </button>
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
                  <div className="mt-3 text-center" style={{ color: "red" }}>
                    <h2>Unsuccessful</h2>
                  </div>
                )}
            </div>

            <div className="mt-3">
              {subscriptionDetail?.user_id === stateId ? null : (
                <button
                  type="button"
                  className="btn btn-primary w-100 btn-lg mr-3"
                  onClick={showVerifySubscriptionModal}
                  disabled={
                    subscriptionDetail?.status !== "pending" ||
                    subscriptionDetail?.status !== "pending" ||
                    subscriptionDetail?.status !== "pending" ||
                    subscriptionDetail?.status !== "pending" ||
                    subscriptionDetail?.status !== "pending" ||
                    subscriptionDetail?.status !== "pending" ||
                    subscriptionDetail?.status !== "pending" ||
                    new Date(subscriptionDetail?.end_date) <= new Date()
                  }
                >
                  {subscriptionDetail?.status === "pending"
                    ? "Verify"
                    : subscriptionDetail?.status?.replace(
                        subscriptionDetail?.status?.charAt(0),
                        subscriptionDetail?.status?.charAt(0).toUpperCase()
                      )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <VerifySubscriptionCreationModal
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default SubscriptionDetail;
