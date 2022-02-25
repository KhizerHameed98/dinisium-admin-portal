import moment from "moment";
// export const columns = [

// ];

export const columns = (clickIto) => {
  return [
    { title: "ITO Series Name", field: "name" },

    {
      title: "ITO Name",
      render: (rowData) => {
        // return `${rowData.ito_name}`;
        return (
          <div
            className="hoverEffectClass"
            onClick={() => clickIto(rowData.ito_id)}
          >
            {" "}
            {rowData.ito_name}{" "}
          </div>
        );
      },
    },

    // {
    //   title: "ITO Name",
    //   field: "ito_name",
    // },
    {
      title: "Status",
      field: "status",
    },
    // {
    //   title: "Start Date",
    //   field: "start_date",
    // },
    {
      title: "Start Date",
      render: (rowData) => {
        return `${moment(rowData.start_date).format("DD-MM-YYYY")}`;
      },
    },
    // {
    //   title: "End Date",
    //   field: "end_date",
    // },
    {
      title: "End Date",
      render: (rowData) => {
        return `${moment(rowData.end_date).format("DD-MM-YYYY")}`;
      },
    },
  ];
};
