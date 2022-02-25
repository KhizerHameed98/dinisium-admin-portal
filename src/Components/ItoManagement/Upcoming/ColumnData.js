import moment from "moment";
// export const columns = [
//   { title: "ITO Series Name", field: "name" },
//   {
//     title: "ITO Name",
//     field: "ito_name",
//   },
//   // {
//   //   title: "ITO Name",
//   //   render: (rowData) => {
//   //     // return `${rowData.ito_name}`;
//   //     return <div onClick={() =>clickIto(rowData.id)}> {rowData.ito_name} </div>
//   //   },
//   // },
//   {
//     title: "Status",
//     field: "status",
//   },
//   /* {
//      title: "Start Date",
//      field: "start_date",
//    }, */
//   {
//     title: "Start Date",
//     render: (rowData) => {
//       return `${moment(rowData.start_date).format("DD-MM-YYYY")}`;
//     },
//   },
//   /*{
//     title: "End Date",
//     field: "end_date",
//   }, */
//   {
//     title: "End Date",
//     render: (rowData) => {
//       return `${moment(rowData.end_date).format("DD-MM-YYYY")}`;
//     },
//   },
// ];

export const columns = (clickIto) => {
  return [
    {
      title: "ITO Series Name",
      field: "name",
      customSort: (a, b) => {
        let x = a.name.toUpperCase();
        let y = b.name.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },

    {
      title: "ITO Name",
      field: "ito_name",
      customSort: (a, b) => {
        let x = a.ito_name.toUpperCase();
        let y = b.ito_name.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      },
      render: (rowData) => {
        console.log("rowdata", rowData);
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
      customSort: (a, b) => {
        let x = a.status.toUpperCase();
        let y = b.status.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },
    // {
    //   title: "Start Date",
    //   field: "start_date",
    // },
    {
      title: "Start Date",
      field: "start_date",
      customSort: (a, b) =>
        new Date(a.start_date) > new Date(b.start_date) ? 1 : -1,
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
      field: "end_date",
      customSort: (a, b) =>
        new Date(a.end_date) > new Date(b.end_date) ? 1 : -1,
      render: (rowData) => {
        return `${moment(rowData.end_date).format("DD-MM-YYYY")}`;
      },
    },
  ];
};
