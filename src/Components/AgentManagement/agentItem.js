import React, { Fragment, useState, useEffect } from "react";
import Route from "../../Constants/browserRoutes";

import { Link } from "react-router-dom";

const AgentItem = ({ item }) => {
  return (
    <Fragment>
      <td className="fn-600">{item && item.fname + " " + item.lname}</td>
      <td className="fn-600">{item && item.email}</td>
      <td className="text-dr-blu">{item && item.contact_no}</td>
      <td>{item && item.country}</td>
      <td>
        <Link
          className="dls-btn btn-info text-white"
          to={Route.ADD_INVESTOR_BTN + `${item.id}`}
        >
          Add Investor
        </Link>
      </td>
      <td>
        <Link
          className="dls-btn bg-semi-black text-white"
          to={Route.AGENT_DETAILS_BTN + `${item.id}`}
        >
          View Details
        </Link>
      </td>
    </Fragment>
  );
};

export default AgentItem;
