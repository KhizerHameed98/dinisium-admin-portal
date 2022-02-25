import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import config from "./../../../Constants/config";

import { data } from "../dummyData";
import InvestmentDetailsItem from "./investmentDetailsItem";
import { getInvestmentDetailByUserId } from "../../../Redux/actions/actions";
import { connect, useDispatch, useSelector } from "react-redux";

const InvestmentDetails = ({
  match,
  userManagement: {
    investmentDetail: { data },
  },
  getInvestmentDetailByUserId,
}) => {
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen

  const handleChange = (event, value) => {
    setScreen(value);
  };
  const countData = data && data.length;
  console.log("Investmnt Details Items===========", data);
  //noOfScreens
  useEffect(() => {
    if (countData % config.userPerScreen === 0) {
      setCount(Math.floor(countData / config.userPerScreen));
    } else {
      setCount(Math.floor(countData / config.userPerScreen) + 1);
    }
  }, [countData]);

  const dispatch = useDispatch();

  console.log(match.params.id);
  useEffect(() => {
    // getInvestmentDetailByUserId(match.params.id);
    // dispatch(getInvestmentDetailByUserId(match.params.id));
  }, []);

  return (
    <>
      <div className="col-12 col-md-10 offset-md-1">
        {/* <!-- inner row --> */}
        <div className="row">
          <div className="col-sm-12">
            <div className="sec-heading py-3">
              <h4 className="tbl-small-heading mb-0">Investment Details</h4>
            </div>

            <div className="card">
              <div className="table-responsive">
                <table
                  className="table hover dils-table fn-500"
                  style={{
                    marginTop: "0",
                    width: "100%",
                    cellspacing: "0",
                  }}
                >
                  {/* <thead className="bg-cr-1 text-white">
                    <tr>
                      <th>Token Name</th>
                      <th>Token Symbol</th>
                      <th>amount</th>
                    </tr>
                  </thead> */}

                  <tbody>
                    {data &&
                      data.length > 0 &&
                      data
                        .slice(
                          screen * config.userPerScreen - config.userPerScreen,
                          config.userPerScreen * screen
                        )
                        .filter((items) => items.balance != "0")
                        .map((item, index) => (
                          <tr key={index}>
                            <InvestmentDetailsItem
                              investmentDetailsData={item}
                            />
                          </tr>
                        ))}
                  </tbody>
                </table>
                {!data ||
                  (data && data.length === 0 && (
                    <h2 className="text-center">No Record Found</h2>
                  ))}
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
        </div>
        {/* <!-- end inner row --> */}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  userManagement: state.userManagement,
});

export default connect(mapStateToProps, { getInvestmentDetailByUserId })(
  InvestmentDetails
);
