import React, { Fragment } from "react";
import { connect } from "react-redux";

const TokensDetailItem = ({ auth }) => {
  const { userDetails } = auth;
  const data = userDetails.ito_token;

  return (
    <Fragment>
      <td className="text-dr-blu">{(data && data.token_name) || ""}</td>
      <td className="fn-600">{(data && data.price) || ""} </td>
      <td>{(data && data.token_symbol) || ""}</td>
      <td>{(data && data.supply) || ""}</td>
    </Fragment>
  );
};

const mpaStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mpaStateToProps, null)(TokensDetailItem);
