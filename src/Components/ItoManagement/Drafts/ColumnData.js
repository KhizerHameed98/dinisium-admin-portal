import browserRoute from "../../../Constants/browserRoutes";

export const columns = (viewDetaill) => {
  return [
    { title: "ITO Name", field: "ito_name" },
    { title: "ITO Series", field: "ito_series" },
    { title: "Start Date", field: "created_at" },
    { title: " Token Supply ", field: "token_supply" },
    { title: "Status", field: "ito_status" },

    {
      title: null,
      field: "button",
      render: (rowData) => (
        <button
          style={{ marginRight: "3%" }}
          className="dls-btn bg-semi-black text-white width-max-content"
          onClick={() => viewDetaill(rowData.id)}
        >
          View Details
        </button>
      ),
    },
    // {title:"Status" , field:""},
    // {
    //   title: "ITO Series Name",
    //   field: "name",
    //   customSort: (a, b) => {
    //     let x = a.name.toUpperCase();
    //     let y = b.name.toUpperCase();
    //     return x == y ? 0 : x > y ? 1 : -1;
    //   },
    // },

    // {
    //   title: "ITO Name",
    //   filed: "ito_name",
    //   customSort: (a, b) => {
    //     let x = a.ito_name.toUpperCase();
    //     let y = b.ito_name.toUpperCase();
    //     return x == y ? 0 : x > y ? 1 : -1;
    //   },
    //   render: (rowData) => {
    //     // return `${rowData.ito_name}`;
    //     return (
    //       <div onClick={() => clickIto(rowData.ito_id)}>
    //         {" "}
    //         {rowData.ito_name}{" "}
    //       </div>
    //     );
    //   },
    // },

    // // {
    // //   title: "ITO Name",
    // //   field: "ito_name",
    // // },
    // {
    //   title: "Status",
    //   field: "status",
    //   customSort: (a, b) => {
    //     let x = a.status.toUpperCase();
    //     let y = b.status.toUpperCase();
    //     return x == y ? 0 : x > y ? 1 : -1;
    //   },
    // },
    // // {
    // //   title: "Start Date",
    // //   field: "start_date",
    // // },
    // {
    //   title: "Start Date",
    //   field: "start_date",
    //   customSort: (a, b) =>
    //     new Date(a.start_date) > new Date(b.start_date) ? 1 : -1,
    //   render: (rowData) => {
    //     return `${moment(rowData.start_date).format("DD-MM-YYYY")}`;
    //   },
    // },
    // // {
    // //   title: "End Date",
    // //   field: "end_date",
    // // },
    // {
    //   title: "End Date",
    //   field: "end_date",
    //   customSort: (a, b) =>
    //     new Date(a.end_date) > new Date(b.end_date) ? 1 : -1,
    //   render: (rowData) => {
    //     return `${moment(rowData.end_date).format("DD-MM-YYYY")}`;
    //   },
    // },
  ];
};
