import React, { useState, useEffect } from "react";
import Route from "../../Constants/browserRoutes";
import TableWithDetailButton from "../CommonComponents/TableWithDetailButton";
import Pagination from "@material-ui/lab/Pagination";
import config from "../../Constants/config";
import { useHistory } from "react-router";
import { data } from "../Wallet/dummyData";
import AgentItem from "./agentItem";
import { Link } from "react-router-dom";
import { getAllAgents } from "../../Redux/actions/actions";
import { connect } from "react-redux";
import { columns } from "./ColumnData";
import browserRoute from "../../Constants/browserRoutes";

const AgentManagement = ({ agentManagement: { agentsList }, getAllAgents }) => {
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen
  const history = useHistory();
  const handleChange = (event, value) => {
    setScreen(value);
  };
  const countData = agentsList && agentsList.length;
  const addInvestorBtn = (data) => {
    history.push(`${Route.ADD_INVESTOR_BTN}${data?.id}`);
  };
  //noOfScreens
  useEffect(() => {
    if (countData % config.itemsPerScreen === 0) {
      setCount(Math.floor(countData / config.itemsPerScreen));
    } else {
      setCount(Math.floor(countData / config.itemsPerScreen) + 1);
    }
  }, [countData]);

  useEffect(() => {
    getAllAgents();
  }, []);

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-12">
          <Link className="exp-mr-link text-dr-green" to={Route.ADD_NEW_AGENT}>
            ADD NEW AGENT <i className="fa fa-plus-circle ml-1 font-24"></i>
          </Link>
        </div>

        <div className="col-md-12">
          <div className="card">
            <div className="table-responsive">
              <TableWithDetailButton
                data={agentsList}
                columns={columns(addInvestorBtn)}
                isViewDetailBtn={true}
                RouteBtn={browserRoute.AGENT_DETAILS_BTN}
                title={"AGENTS"}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  agentManagement: state.agentManagement,
});

export default connect(mapStateToProps, { getAllAgents })(AgentManagement);
