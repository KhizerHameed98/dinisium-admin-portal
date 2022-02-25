import React from "react";
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
import { useState, useEffect } from "react";
import { getUserCount } from "../../../../Services/userManagement";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

export default function Chart() {
  const [text, setText] = useState("Month");
  const dispatch = useDispatch();
  const [maxNum, setMaxNum] = useState(0);

  useEffect(() => {
    dispatch(getUserCount("Month"));
  }, []);

  const chartData = useSelector((state) => state?.userCount?.count?.data);
  // console.log(chartData);

  /*Sets the range for the y-axis according to the max value in */
  for (var i = 0; i < chartData?.length; i++) {
    if (parseInt(chartData[i].count) > maxNum) {
      setMaxNum(parseInt(chartData[i].count));
    }
  }

  /* Setting the format for the registered-users */
  // let registeredAt = []
  // chartData?.map((e) => registeredAt.push((moment(e.registered_at).format('DD MM YYYY'))))
  // console.log(registeredAt)
  function formatXAxis(tickItem) {
    // If using moment.js
    console.log(tickItem);
    if (text === "Year") {
      return moment(tickItem).format("MMM/DD/YY");
    } else {
      if (text === "Month") return moment(tickItem).format("MMM/DD/YY");
      else {
        return moment(tickItem).format("MM/DD");
      }
    }
  }

  const handleClick = (e, obj) => {
    e.preventDefault();
    dispatch(getUserCount(obj.name));
    setText(obj.name);
  };

  return (
    <div className="user-graph">
      <div className="row graph-intro flex justify-content-between pl-3 pr-3">
        <div>
          <h5>New Registered Users per {text}</h5>
        </div>
        <div>
          <ul class="nav nav-tabs flex">
            <li class="nav-item mr-1">
              <button
                onClick={(e) =>
                  handleClick(e, {
                    name: "Year",
                  })
                }
                className={`btn btn-primary ${text === "Year" ? "default-filter-select" : ""
                  }`}
              >
                Year
              </button>
            </li>
            <li class="nav-item mr-1">
              <button
                onClick={(e) =>
                  handleClick(e, {
                    name: "Month",
                  })
                }
                className={`btn btn-primary ${text === "Month" ? "default-filter-select" : ""
                  }`}
              >
                Month
              </button>
            </li>
            <li class="nav-item mr-1">
              <button
                onClick={(e) =>
                  handleClick(e, {
                    name: "Week",
                  })
                }
                className={`btn btn-primary ${text === "Week" ? "default-filter-select" : ""
                  }`}
              >
                Week
              </button>
            </li>
            <li class="nav-item mr-1">
              <button
                onClick={(e) =>
                  handleClick(e, {
                    name: "Day",
                  })
                }
                className={`btn btn-primary ${text === "Day" ? "default-filter-select" : ""
                  }`}
              >
                Day
              </button>
            </li>
          </ul>
        </div>
      </div>
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
            <XAxis dataKey={"registered_at"} tickFormatter={formatXAxis} />
            <YAxis type="number" domain={[0, maxNum]} />
            <Tooltip />
            <Line dataKey={"count"} stroke="#8884d8" activeDot={{ r: 6 }} />
          </LineChart>
        </CSSTransition>
      </ResponsiveContainer>
    </div>
  );
}
