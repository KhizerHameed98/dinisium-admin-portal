import React from "react";
import { withRouter } from "react-router-dom";
import TokenDetail from "./TokensDetail";
import WalletCards from "./WalletCards";

const Wallet = ({ history }) => {
  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <WalletCards />
          </div>
        </div>
        <div className="col-md-12">
          <div className="sec-heading"></div>

          <TokenDetail />
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

export default withRouter(Wallet);
