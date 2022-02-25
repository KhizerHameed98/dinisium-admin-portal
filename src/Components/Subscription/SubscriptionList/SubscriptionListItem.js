import React from "react";
import { useHistory } from "react-router-dom";
import Moment from "react-moment";
import browserRoute from "../../../Constants/browserRoutes";

const SubscriptionListItem = ({ subscription }) => {
  const history = useHistory();
  const toSubscriptionDetail = (e) => {
    e.preventDefault();
    history.push(`${browserRoute.SUBSCRIPTION_DETAIL_BTN}${subscription.id}`);
  };

  return (
    <>
      <td>{subscription?.ito_name}</td>
      <td>{subscription?.ito_token}</td>
      <td>
        <Moment format="YYYY/MM/DD">{subscription?.start_date}</Moment>
      </td>
      <td>$ {subscription?.threshold}</td>
      <td>
        <button
          className="dls-btn bg-semi-black text-white"
          onClick={toSubscriptionDetail}
        >
          View Details
        </button>
      </td>
    </>
  );
};

export default SubscriptionListItem;
