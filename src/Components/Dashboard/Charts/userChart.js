import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
// import { userData } from "../data";
import { countRegiteredUsersPerMonth } from "../../../Redux/actions/actions";
import { connect } from "react-redux";

const UserChart = ({
  auth: {
    userDetails: { ito },
  },
  dashboard: { usersGraphDetail },
  countRegiteredUsersPerMonth,
}) => {
  useEffect(() => {
    countRegiteredUsersPerMonth(ito ? ito.id : 0);
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h3>USERS</h3>
      </div>
      <div className="card-block">
        <ResponsiveContainer
          minWidth={315}
          width={"100%"}
          minHeight={300}
          height={"100%"}
        >
          <LineChart
            width={500}
            height={400}
            data={usersGraphDetail}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="register_to_month" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />

            <Line type="monotone" dataKey="No_Of_Users" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
  auth: state.auth,
});

export default connect(mapStateToProps, { countRegiteredUsersPerMonth })(
  UserChart
);
