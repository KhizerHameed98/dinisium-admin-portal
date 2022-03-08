import React, { useContext, useEffect, useState } from "react";
import { YearData } from "./ChartData";

import { useSelector } from "react-redux";
import moment from "moment";

function CandleChart({ checkDates }) {
  const [preciseData, setPreciseData] = React.useState([]);

  const candleData = useSelector(
    (state) => state?.exchange?.tokenHistory?.data
  );

  function createData2(date, arr) {
    return { x: date, y: arr };
  }
  const dateFun = (d) => {
    const obj1 = {};
    let data2 = [];
    let subStringEnd = d === 7 ? 11 : d === 30 ? 11 : 7;
    candleData?.forEach((a) => {
      obj1[
        d === 24
          ? moment(a.key).format("DD-MM-YYYY hh:a")
          : d === 12
          ? moment(a.key).format("MMM YY")
          : new Date(a.key).toDateString().substring(4, subStringEnd)
      ] = [
        Number(a.C).toFixed(3),
        Number(a.H).toFixed(3),
        Number(a.L).toFixed(3),
        Number(a.O).toFixed(3),
      ];
    });
    console.log("obj1", obj1);
    if (d === 24) {
      let dateCheck = new Date();
      for (let i = 0; i < 24; i++) {
        let hoursCheck = dateCheck.setHours(dateCheck.getHours() - 1);
        data2 = [
          createData2(
            moment(hoursCheck).format("dd hh:mma"),
            obj1[moment(hoursCheck).format("DD-MM-YYYY hh:a")]
              ? obj1[moment(hoursCheck).format("DD-MM-YYYY hh:a")]
              : [0, 0, 0, 0]
          ),
          ...data2,
        ];
      }
    } else {
      for (let i = 0; i < d; i++) {
        let start = new Date();
        start.setDate(start.getDate() - (d === 12 ? i * 31 : i));
        start.setHours(0, 0, 0, 0);
        let date1 =
          d === 12
            ? moment(start).format("MMM YY")
            : start.toDateString().substring(4, subStringEnd);
        data2 = [
          createData2(date1, obj1[date1] ? obj1[date1] : [0, 0, 0, 0]),
          ...data2,
        ];
      }
    }
    let check = data2?.some((res) => res.y[0] > 0);
    setPreciseData(check ? data2 : []);
  };

  //---------------------------------------------------

  useEffect(() => {
    switch (checkDates) {
      case "Year":
        return dateFun(12);
      case "Month":
        return dateFun(30);
      case "Week":
        return dateFun(7);
      case "Day":
        return dateFun(24);
      default:
        return;
    }
  }, [candleData]);

  //----------------------------------------------------------

  return (
    <>
      <div>
        <div>
          <YearData data={preciseData} />
        </div>
      </div>
    </>
  );
}

export default CandleChart;
