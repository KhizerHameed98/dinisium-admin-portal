import React from "react";
import { useHistory } from "react-router";
import browserRoute from "../../../Constants/browserRoutes";

const Button = ({ assignedItosData }) => {
  const history = useHistory();
  const toItoDetail = (e) => {
    e.preventDefault();
    history.push(
      `${browserRoute.ITO_MANAGEMENT_DETAILS_BTN}${assignedItosData.id}`
    );
  };
  return (
    <div>
      {/* <button
        className="dls-btn bg-semi-black text-white"
        onClick={toItoDetail}
      >
        View Details
      </button> */}
      {toItoDetail}
    </div>
  );
};

export default Button;
