import React from "react";

import { useState, useEffect } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";
import moment from "moment";

function SoldTokensGraph({ chartData }) {
  const [text, setText] = useState("Month");
  const [maxNum, setMaxNum] = useState(0);
  const data = chartData;
  console.log("Sold Token Data ====================>", data);
  console.log(data);

  const dispatch = useDispatch();

  for (var i = 0; i < data?.length; i++) {
    if (parseInt(data[i].tokens) > maxNum) {
      setMaxNum(parseInt(data[i].tokens));
    }
  }

  function formatXAxis(tickItem) {
    // If using moment.js
    // console.log(tickItem);
    if (text === "Year") {
      return moment(tickItem).format("MMM/DD/YY");
    } else {
      if (text === "Month") return moment(tickItem).format("MMM/DD/YY");
      else {
        return moment(tickItem).format("MM/DD");
      }
    }
  }
  function threeDecimals(num) {
    return num?.toFixed(3);
  }
  function tooltipDecimals(num) {
    return Number.parseFloat(num).toFixed(3);
  }
  return (
    <div>
      <ResponsiveContainer
        minWidth={0}
        width={"100%"}
        minHeight={400}
        height={"100%"}
      >
        <CSSTransition in={true} appear={true} timeout={600} classNames="fade">
          <LineChart
            width={700}
            height={700}
            data={chartData}
            margin={{
              top: 10,
              left: -20,
              right: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={"date"} tickFormatter={formatXAxis} />
            <YAxis
              type="number"
              domain={[0, maxNum]}
              orientation="right"
              tickFormatter={threeDecimals}
            />
            <Tooltip formatter={tooltipDecimals} />
            <Line dataKey={"tokens"} stroke="#8884d8" activeDot={{ r: 6 }} />
          </LineChart>
        </CSSTransition>
      </ResponsiveContainer>
    </div>
  );
}

export default SoldTokensGraph;
