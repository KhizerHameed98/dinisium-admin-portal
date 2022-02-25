import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Route from "../../Constants/browserRoutes";
import BuyRequests from "./BuyRequests/index";
import SellRequests from "./SellRequsets";

const Exchange = () => {
  //Refresing the table on click
  const [refresh, setrefresh] = useState(false);
  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="d-block">
            <Link
              className="btn btn-success float-right btn btn-sm mb-2 "
              to={Route.COMPLETED_ORDERS}
            >
              VIEW COMPLETED ORDERS
            </Link>
          </div>
        </div>
        <div className="col-md-12">
          <BuyRequests refresh={refresh} setrefresh={setrefresh} />

          <SellRequests refresh={refresh} setrefresh={setrefresh} />
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

export default Exchange;
