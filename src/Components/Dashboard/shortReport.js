import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  countItoElections,
  countItoRegisteredUsers,
  countItoExchangeOrders,
  countItoSeries,
} from "../../Redux/actions/actions";
import { getCandlestickTablePrice } from "../../Services/exchangeServices";
import { getUserTotalCount } from "../../Services/userManagement";
const ShortReport = ({
  auth: {
    userDetails: { ito },
  },
  dashboard: { countElections, countUsers, countOrders, countSeries },
  countItoElections,
  countItoRegisteredUsers,
  countItoExchangeOrders,
  countItoSeries,
}) => {
  useEffect(() => {
    dispatch(getCandlestickTablePrice());
    dispatch(getUserTotalCount());
    countItoElections(ito ? ito.id : 0);
    countItoRegisteredUsers(ito ? ito.id : 0);
    countItoExchangeOrders(ito ? ito.id : 0);
    countItoSeries(ito ? ito.id : 0);
  }, []);
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => state?.exchange?.candleStickTableHistory
  );
  const userCount = useSelector(
    (state) => state?.userManagement?.totalUserCount?.count
  );
  // console.log(state);
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="card bg-cr-1 text-white mb-4">
          <div className="card-body">
            <div className="d-inline-block">
              <p className="dashboard-cd-amot">{state?.totalMarketCap}</p>
              <span className="dashboard-cd-blc">MARKETCAP</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-cr-2 text-white mb-4">
          <div className="card-body">
            <div className="d-inline-block">
              <p className="dashboard-cd-amot">
                {state?.totalTradingSupplyOfTokens}
              </p>
              <span className="dashboard-cd-blc">TRADING SUPPLY</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-cr-1 text-white mb-4">
          <div className="card-body">
            <div className="d-inline-block">
              <p className="dashboard-cd-amot">
                {state?.totalMintedSupplyOfTokens}
              </p>
              <span className="dashboard-cd-blc">MINTED SUPPLY</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-cr-2 text-white mb-4">
          <div className="card-body">
            <div className="d-inline-block">
              <p className="dashboard-cd-amot">{userCount}</p>
              <span className="dashboard-cd-blc">REGISTERED USERS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  countItoElections,
  countItoRegisteredUsers,
  countItoExchangeOrders,
  countItoSeries,
})(ShortReport);
