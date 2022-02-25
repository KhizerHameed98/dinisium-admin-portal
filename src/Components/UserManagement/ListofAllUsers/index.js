import React, { useEffect, useState } from "react";
import config from "./../../../Constants/config";
import UserDataItem from "./userDataItem";
import { getUsersList, userBlockUnBlock } from "../../../Redux/actions/actions";
import { connect } from "react-redux";
import Chart from "./Charts/Chart";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { columns } from "./ColumnData";
import browserRoute from "../../../Constants/browserRoutes";

const UserManagement = ({
  userManagement: { usersList },
  getUsersList,
  userBlockUnBlock,
}) => {
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen

  const handleChange = (event, value) => {
    setScreen(value);
  };
  const countData = usersList && usersList.length;
  console.log("usersList============>", usersList);
  //noOfScreens
  useEffect(() => {
    if (countData % config.userPerScreen === 0) {
      setCount(Math.floor(countData / config.userPerScreen));
    } else {
      setCount(Math.floor(countData / config.userPerScreen) + 1);
    }
  }, [countData, config.userPerScreen]);

  useEffect(() => {
    getUsersList();
  }, []);

  const handleBlockUnBlock = (id, value) => {
    userBlockUnBlock({ id, value });
  };

  //SHOW GRAPH HOOKS AND FUNCTIONALITY
  const [graph, showGraph] = useState(false);
  const [buttonText, setButtonText] = useState("Show graph");
  const handleClick = (e) => {
    e.preventDefault();
    showGraph(!graph);
    graph ? setButtonText("Show graph") : setButtonText("Hide graph");
  };

  return (
    <>
      <div className="col-12 col-md-8 offset-md-2">
        {/* <!-- inner row --> */}
        <div className="row">
          <div className="col-md-12">
            <div className="row flex justify-content-end mr-1 ml-1">
              <div className="">
                <button
                  onClick={handleClick}
                  className="btn btn-primary graph-btn"
                >
                  {buttonText}
                </button>
              </div>
            </div>

            {/* Chart starts here */}
            {graph ? (
              <div className="col-12 col-md-12 mb-4 graph-card">
                <Chart />
              </div>
            ) : (
              <></>
            )}
            {/* Chart ends here */}
            <div className="card">
              <div className="table-responsive">
                <TableWithDetailButton
                  columns={columns(handleBlockUnBlock)}
                  data={usersList}
                  isViewDetailBtn={true}
                  title={"LIST OF ALL USERS"}
                  RouteBtn={browserRoute.USER_DETAIL_BTN}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end inner row --> */}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  userManagement: state.userManagement,
});

export default connect(mapStateToProps, { getUsersList, userBlockUnBlock })(
  UserManagement
);
