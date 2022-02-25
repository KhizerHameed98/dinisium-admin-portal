import React, { useState, useEffect } from "react";
import InvestmentItem from "./invsetmentItem";
import Pagination from "@material-ui/lab/Pagination";
import { connect } from "react-redux";
import { getAgentInvestor } from "../../../../Redux/actions/actions";

import config from "../../../../Constants/config";
import { useParams } from "react-router-dom";

const TrustedInvestment = ({
  getAgentInvestor,
  agentManagement: { agentInvestorList },
}) => {
  const { id } = useParams();
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen
  const handleChange = (event, value) => {
    setScreen(value);
  };

  const countData = agentInvestorList && agentInvestorList.length;
  //noOfScreens
  useEffect(() => {
    if (countData % config.itemsPerScreen === 0) {
      setCount(Math.floor(countData / config.itemsPerScreen));
    } else {
      setCount(Math.floor(countData / config.itemsPerScreen) + 1);
    }
  }, [countData, config.itemsPerScreen]);

  useEffect(() => {
    getAgentInvestor({ id });
  }, []);

  return (
    <div className="col-md-12 mt-4">
      <div className="sec-heading py-3">
        <h4 className="tbl-small-heading mb-0">Trusted Investors</h4>
      </div>

      <div className="card">
        <div className="table-responsive">
          <table
            className="table hover dils-table fn-500"
            // width="100%"
            // cellspacing="0"
            // style="margin-top:0;"
          >
            <thead className="bg-cr-1 text-white">
              <tr>
                <th>Token Name</th>
                <th>ITO Series Name</th>
                <th>Investment</th>

                {/* <th></th> */}
              </tr>
            </thead>

            <tbody>
              {agentInvestorList &&
                agentInvestorList
                  .slice(
                    screen * config.itemsPerScreen - config.itemsPerScreen,
                    config.itemsPerScreen * screen
                  )
                  .map((item, index) => (
                    <tr key={index}>
                      <InvestmentItem item={item} />
                    </tr>
                  ))}
            </tbody>
          </table>
          {(!agentInvestorList ||
            (agentInvestorList && agentInvestorList.length === 0)) && (
            <h4 className="text-center">No Record Found</h4>
          )}
        </div>
        <div style={{ marginBottom: "5px" }}>
          <Pagination
            count={count}
            shape="rounded"
            screen={screen}
            onChange={handleChange}
            showFirstButton
            showLastButton
          />
        </div>
      </div>
    </div>
  );
};


const mpaStateToProps = (state) => {
  return {
    agentManagement: state.agentManagement,
  };
};

export default connect(mpaStateToProps, {
  getAgentInvestor,
})(TrustedInvestment);
