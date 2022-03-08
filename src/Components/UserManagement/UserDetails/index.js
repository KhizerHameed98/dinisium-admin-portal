import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import config from "./../../../Constants/config";

import InvestmentDetailsItem from "../InvestmentDetails/investmentDetailsItem";
// import { data } from "../dummyData";
import { Link } from "react-router-dom";
import Route from "./../../../Constants/browserRoutes";
import UserProfileInfo from "./userProfileInfo";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { columns } from "./ColumnData";

import { getInvestmentDetailByUserId } from "../../../Redux/actions/actions";
import { connect, useDispatch, useSelector } from "react-redux";

const UserDetails = ({ match, getInvestmentDetailByUserId, ...otherprops }) => {
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);

  const data = useSelector(
    (state) => state?.userManagement?.investmentDetail?.data
  );

  const filtered = data?.filter((items) => items?.balance !== "0");
  // console.log("filtered :", filtered);

  const datas = useSelector((state) => console.log("aa", state));

  // console.log(otherprops);

  //No. of Items Per Screen

  const handleChange = (event, value) => {
    setScreen(value);
  };
  const countData = data && data.length;
  // console.log("Investment Details============>", data);
  const dispatch = useDispatch();

  //noOfScreens
  useEffect(() => {
    if (countData % config.userPerScreen === 0) {
      setCount(Math.floor(countData / config.userPerScreen));
    } else {
      setCount(Math.floor(countData / config.userPerScreen) + 1);
    }
  }, [countData]);

  useEffect(() => {
    getInvestmentDetailByUserId(match.params.id);
    //  dispatch(getInvestmentDetailByUserId)
  }, []);

  // useEffect(() => {
  //   console.log("fil", filtered);
  // });

  return (
    <>
      <div className="col-12 col-md-10 offset-md-1">
        {/* <!-- inner row --> */}
        <div className="row">
          <div className="col-sm-12">
            <UserProfileInfo id={match.params.id} />
          </div>

          <div className="col-sm-12">
            <div className="card">
              <div className="table-responsive">
                <TableWithDetailButton
                  title={" Investment Details"}
                  data={filtered}
                  columns={columns()}
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

export default connect(mapStateToProps, {
  getInvestmentDetailByUserId,
})(UserDetails);
