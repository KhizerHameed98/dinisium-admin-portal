import React, { useContext, useEffect, useState } from "react";
import { YearData } from "./ChartData";

import { useSelector } from "react-redux";

function CandleChart() {
  const [preciseData, setPreciseData] = React.useState([]);

  const candleData = useSelector(
    (state) => state?.exchange?.tokenHistory?.data
  );
  //---------------------------------------------------

  useEffect(() => {
    if (candleData) {
      const data = candleData.map((value) => {
        console.log(
          "hey C Value =============",
          Number.parseFloat(value.C).toFixed(3)
        );
        return {
          x: value.key,
          y: [
            Number.parseFloat(value.C).toFixed(3),
            Number.parseFloat(value.H).toFixed(3),
            Number.parseFloat(value.L).toFixed(3),
            Number.parseFloat(value.O).toFixed(3),
          ],
        };
      });
      setPreciseData(data);
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
