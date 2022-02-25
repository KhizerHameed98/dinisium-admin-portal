import React from "react";
import { Link, useHistory } from "react-router-dom";
import Route from "../../../Constants/browserRoutes";
import Moment from "react-moment";
import browserRoute from "../../../Constants/browserRoutes";
import { red } from "@material-ui/core/colors";

const AuthorizedItem = ({ assignedItosData }) => {
  // const history = useHistory();
  // const toItoDetail = (e) => {
  //   e.preventDefault();
  //   history.push(
  //     `${browserRoute.ITO_MANAGEMENT_DETAILS_BTN}${assignedItosData.id}`
  //   );
  // };
  // console.log(assignedItosData);
  return (
    <>
      <td>{assignedItosData?.name}</td>
      <td>{assignedItosData?.token_name}</td>
      <td>
        <Moment format="YYYY/MM/DD">{assignedItosData?.start_date}</Moment>
      </td>
      <td>{assignedItosData?.supply}</td>
      <td>
        {assignedItosData?.onhold ? (
          <p
            style={{
              color: "red",
            }}
          >
            True
          </p>
        ) : (
          <p>False</p>
        )}
      </td>
      <td>
        {assignedItosData?.closed ? (
          <p
            style={{
              color: "red",
            }}
          >
            Closed
          </p>
        ) : (
          assignedItosData?.status
        )}
      </td>
      <td
        style={{
          color: "blue",
        }}
      >
        {assignedItosData?.token_address}
      </td>
      <td>
        {/* <button
          className="dls-btn bg-semi-black text-white"
          onClick={toItoDetail}
        >
          View Details
        </button> */}
      </td>
    </>
  );
};

export default AuthorizedItem;
