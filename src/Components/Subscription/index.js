import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import browserRoute from "../../Constants/browserRoutes";
import SubscriptionDraft from "./SubscriptionDrafts/SubscriptionDraft";
import SubscriptionList from "./SubscriptionList/SubscriptionList";

const Subscription = () => {



  return (
    <div className="col-12 col-md-10 offset-md-1">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <SubscriptionDraft />
        </div>
        <div className="col-md-12 mb-2">
          <Link
            className="exp-mr-link text-dr-green"
            to={browserRoute.CREATE_SUBSCRIPTION}
          >
            ADD NEW SUBSCRIPTION{" "}
            <i className="fa fa-plus-circle ml-1 font-24"></i>
          </Link>
        </div>

        <div className="col-md-12">
          <SubscriptionList />
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

export default Subscription;
