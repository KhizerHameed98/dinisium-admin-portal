import moment from "moment";
// export const columns = [
//   { title: "ITO Name", field: "name" },
//   { title: "Token Name", field: "ito_name" },
//   /* {
//     title: "Start Date",
//     field: "start_date",
//   }, */
//   {
//     title: "Start Date",
//     render: (rowData) => {
//       return `${moment(rowData.start_date).format("DD-MM-YYYY")}`;
//     },
//   },
//   {
//     title: "Supply Issued",
//     field: "supply",
//     type: "numeric",
//     align: "left",
//   },
//   {
//     title: "Status",
//     field: "status",
//   },
// ];

export const columns = (clickIto) => {
  return [
    {
      title: "ITO Name",
      field: "ito_name",
      customSort: (a, b) => {
        let x = a.ito_name.toUpperCase();
        let y = b.ito_name.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      },
      render: (rowData) => {
        // return `${rowData.ito_name}`;
        return (
          <div
            className="hoverEffectClass"
            onClick={() => clickIto(rowData?.ito_id)}
          >
            {" "}
            {rowData.ito_name}{" "}
          </div>
        );
      },
    },
    { title: "Token Name", field: "ito_name" },
    {
      title: "Start Date",
      field: "start_date",
      customSort: (a, b) =>
        new Date(a.start_date) > new Date(b.start_date) ? 1 : -1,
      render: (rowData) => {
        return `${moment(rowData.start_date).format("DD-MM-YYYY")}`;
      },
    },

    {
      title: "Supply Issued",
      field: "supply",
      customSort: (a, b) => {
        let x = Number(a.supply),
          y = Number(b.supply);
        return x == y ? 0 : x > y ? 1 : -1;
      },
      type: "numeric",
      align: "left",
    },

    {
      title: "Status",
      field: "status",
      customSort: (a, b) => {
        let x = a.status.toUpperCase();
        let y = b.status.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },
  ];
};
