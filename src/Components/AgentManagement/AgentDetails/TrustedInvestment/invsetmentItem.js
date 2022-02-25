import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const InvestmentItem = ({ item: { token_name, series_name, investment } }) => {
  return (
    <Fragment>
      <td className="fn-600">{token_name}</td>
      <td>{series_name}</td>
      <td className="text-dr-blu">{investment}</td>

      {/* <td>
        <Link className="dls-btn bg-semi-black text-white" to="#">
          View Details
        </Link>
      </td> */}
    </Fragment>
  );
};

export default InvestmentItem;
