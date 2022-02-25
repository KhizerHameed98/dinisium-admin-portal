import React from "react";
import { Link } from "react-router-dom";
import Route from "../../../Constants/browserRoutes";
import Moment from "react-moment";

const PastItem = ({ PastData }) => {
  return (
    <>
      <td className="text-dr-blu">{PastData.name}</td>
      <td>{PastData?.ito_name}</td>
      <td>{PastData?.status}</td>
      <td>
        <Moment format="YYYY/MM/DD">{PastData.start_date}</Moment>
      </td>
      <td>
        <Moment format="YYYY/MM/DD">{PastData.end_date}</Moment>
      </td>
      <td>
        <Link
          className="dls-btn bg-semi-black text-white"
          // to={Route.ITO_MANAGEMENT_DETAILS_BTN + `${PastData.id}`}
          to={{
            pathname: Route.SERIES_DETAILS_BTN + `${PastData.id}`,
            state: { status: "pastIto" },
          }}
        >
          View Details
        </Link>
      </td>
    </>
  );
};

export default PastItem;
