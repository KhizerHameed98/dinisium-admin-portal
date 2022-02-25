import React from "react";
import { Link } from "react-router-dom";
import Route from "../../../Constants/browserRoutes";
import Moment from "react-moment";

const OngoingItem = ({ OngoingData }) => {
  return (
    <>
      <td>{OngoingData.name}</td>
      <td>{OngoingData?.ito_name}</td>
      <td>{OngoingData?.status}</td>
      <td>
        <Moment format="YYYY/MM/DD">{OngoingData.start_date}</Moment>
      </td>
      <td>
        <Moment format="YYYY/MM/DD">{OngoingData.end_date}</Moment>
      </td>
      <td>
        <Link
          className="dls-btn bg-semi-black text-white"
          //   href="voting-ongoing.html"
          // to={Route.ITO_MANAGEMENT_DETAILS_BTN + `${OngoingData.id}`}
          to={{
            pathname: Route.SERIES_DETAILS_BTN + `${OngoingData.id}`,
            state: { status: "ongoingIto" },
          }}
        >
          View Details
        </Link>
      </td>
    </>
  );
};

export default OngoingItem;
