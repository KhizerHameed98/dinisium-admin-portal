import React, { useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { investmentData } from "../data";
import { countInvestmentPerMonth } from "../../../Redux/actions/actions";
import { connect } from "react-redux";

const InvestmentChart = ({
  auth: {
    userDetails: { ito },
  },
  dashboard: { investmentGraphDetail },
  countInvestmentPerMonth,
}) => {
  useEffect(() => {
    countInvestmentPerMonth(ito ? ito.id : 0);
  }, []);
  return (
    <div className="card">
      <div className="card-header">
        <h3>INVESTMENT</h3>
      </div>
      <div className="card-block">
        <ResponsiveContainer
          minWidth={315}
          width={"100%"}
          minHeight={300}
          height={"100%"}
        >
          <AreaChart
            width={500}
            height={400}
            data={investmentGraphDetail}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="investment_to_month" />
            <YAxis />

            <Area
              type="monotone"
              dataKey="Investment"
              stroke="#56a9f7"
              fill="#56a9f7"
            />
            <Legend verticalAlign="top" height={36} />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
  auth: state.auth,
});

export default connect(mapStateToProps, { countInvestmentPerMonth })(
  InvestmentChart
);
