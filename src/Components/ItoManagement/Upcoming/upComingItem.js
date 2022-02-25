import React from "react";
import { Link } from "react-router-dom";
import Route from "../../../Constants/browserRoutes";
import Moment from "react-moment";

const UpCommingItem = ({ upCommingData }) => {
  return (
    <>
      <td>{upCommingData.name}</td>
      <td>{upCommingData?.ito_name}</td>
      <td>{upCommingData?.status}</td>
      <td>
        <Moment format="YYYY/MM/DD">{upCommingData.start_date}</Moment>
      </td>
      <td>
        <Moment format="YYYY/MM/DD">{upCommingData.end_date}</Moment>
      </td>
      <td>
        <Link
          className="dls-btn bg-semi-black text-white"
          //   href="voting-ongoing.html"
          // to={Route.ITO_MANAGEMENT_DETAILS_BTN + `${upCommingData.id}`}
          to={{
            pathname: Route.SERIES_DETAILS_BTN + `${upCommingData.id}`,
            state: { status: "upcomingIto" },
          }}
        >
          View Details
        </Link>
      </td>
    </>
  );
};

export default UpCommingItem;
