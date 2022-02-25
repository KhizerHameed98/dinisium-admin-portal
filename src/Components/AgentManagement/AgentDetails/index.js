import React, { useState, useEffect } from "react";
import TrustedInvestment from "./TrustedInvestment/index";

import { connect } from "react-redux";
import { getSingleAgent } from "../../../Redux/actions/actions";
import { useParams } from "react-router-dom";

const AgentDetails = ({ getSingleAgent, agentManagement: { agentDetail } }) => {
  const { id } = useParams();

  useEffect(() => {
    getSingleAgent({ id });
  }, []);

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-sm-12">
          <div className="card pu-rel text-dark p-5 mb-3">
            <h2 className="page-title-heading mb-4 font-30 text-center">
              Details
            </h2>

            <div className="row">
              <div className="col-12 col-md-12">
                <ul className="row profile-detail">
                  <li className="col-12 col-md-6">
                    <span>Name</span>
                    <span>
                      {(agentDetail &&
                        agentDetail.fname &&
                        agentDetail.fname + " " + agentDetail.lname) ||
                        ""}
                    </span>
                  </li>

                  <li className="col-12 col-md-6">
                    <span>Email</span>
                    <span>{agentDetail.email || ""}</span>
                  </li>
                  <li className="col-12 col-md-6">
                    <span>Contact No</span>
                    <span>{agentDetail.contact_no || ""}</span>
                  </li>
                  <li className="col-12 col-md-6">
                    <span>Address</span>
                    <span>{agentDetail.address || ""}</span>
                  </li>
                  <li className="col-12 col-md-6">
                    <span>Country</span>
                    <span>{agentDetail.country || ""}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrustedInvestment />
      {/* <!-- end inner row --> */}
    </div>
  );
};



const mpaStateToProps = (state) => {
  return {
    agentManagement: state.agentManagement,
  };
};

export default connect(mpaStateToProps, {
  getSingleAgent,
})(AgentDetails);
