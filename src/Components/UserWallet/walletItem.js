import React from "react";
import { Link } from "react-router-dom";
import browserRoute from "../../Constants/browserRoutes";

const WalletItem = ({ item }) => {
  return (
    <>
      <td className="fn-600">
        <div className="icon-flex">
          <div className="icon-wrapper">
            <i className="fas fa-user"></i>
          </div>
        </div>

        {item && item.fname + " " + item.lname}
      </td>

      <td className="text-dr-blu">{item && item.email}</td>
      <td>{item && item.country}</td>
      <td>
        <Link
          className="dls-btn bg-semi-black text-white"
          // href="UserDetails.html"
          to={
            browserRoute.USER_WALLET_DETAILS_BTN +
            `${item ? item.id : browserRoute.BLANK_LINK}`
          }
        >
          VIEW DETAILS
        </Link>
      </td>
    </>
  );
};

export default WalletItem;
