import Chart from "react-apexcharts";

export const YearData = ({ data }) => {
  const state = {
    series: [
      {
        data: [...data,{x:"2022-01-01",y:['9.028','9.028','0.028','0.028']},{x:"2023-01-01",y:['9.028','9.028','0.028','0.028']},{x:"2024-01-01",y:['9.028','9.028','0.028','0.028']}],
      },
    ],
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "",
        align: "left",
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val?.toFixed(3);
          },
        },
      },
      tooltip: {
        // labels: {
        //   formatter: function (val) {
        //     return val?.toFixed(3);
        //   },
        // },
        // y: {
        //   formatter: function (val) {
        //     return val?.toFixed(3);
        //   },
        // },
        // x: {
        //   formatter: function (val) {
        //     return val?.toFixed(3);
        //   },
        // },
        // custom: function (val) {
        //   console.log("val is", val);
        //   return "<ul>" + "<li><b>Prsxzczice</b>: " + val.y + "</ul>";
        // },
        enabled: true,
      },
    },
  };
  return (
    <Chart
      options={state.options}
      series={state.series}
      type="candlestick"
      height={350}
    />
  );
};
