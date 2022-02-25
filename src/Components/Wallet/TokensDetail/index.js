import React, { useState, useEffect } from "react";
import TokensDetailItem from "./TokensDetailItem";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { columns } from "./ColumnData";
import { connect } from "react-redux";

const TokenDetail = ({ auth }) => {
  const { userDetails } = auth;
  const data = userDetails.ito_token;
  return (
    <div className="card">
      <div className="table-responsive">
        <TableWithDetailButton
          data={data}
          columns={columns}
          title={"YOUR TOKEN"}
        />
      </div>
    </div>
  );
};
const mpaStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mpaStateToProps, null)(TokenDetail);
