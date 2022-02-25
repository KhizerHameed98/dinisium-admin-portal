import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";
import moment from "moment";

function DefaultChart({ chartData }) {
  const [text, setText] = useState("Month");
  const [maxNum, setMaxNum] = useState(0);
  const data = chartData;
  // console.log("MarketeCap==========>", data.marketcap);
  console.log("%c Default data is", "font-size: 2rem", data);
  const dispatch = useDispatch();

  for (var i = 0; i < data?.length; i++) {
    if (parseInt(data[i].marketcap) > maxNum) {
      setMaxNum(parseInt(data[i].price));
      setMaxNum(parseInt(data[i].marketcap));
    }
  }
  let threeDigitFormatter = (num) => {
    return num?.toFixed(3);
  };
  function tooltipDecimals(num) {
    return Number.parseFloat(num).toFixed(3);
  }
  return (
    <div>
      <ResponsiveContainer
        minWidth={0}
        width="100%"
        height="100%"
        minHeight={400}
      >
        <BarChart width={150} height={40} data={chartData}>
          <Bar barSize={25} dataKey={"price"} fill="#006dc2" />
          <XAxis type="category" dataKey="token_name" reversed={true} />
          <YAxis
            dataKey="price"
            tickFormatter={threeDigitFormatter}
            orientation="right"
          />
          <Legend />
          <Tooltip cursor={{ fill: "none" }} formatter={tooltipDecimals} />
        </BarChart>
      </ResponsiveContainer>
      {/* <ResponsiveContainer
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
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey={"token_name"} />
            <YAxis type="number" domain={[0, maxNum]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey={"marketcap"}
              stroke="#8884d8"
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey={"price"}
              stroke="#82ca9d"
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </CSSTransition>
      </ResponsiveContainer> */}
    </div>
  );
}

export default DefaultChart;
