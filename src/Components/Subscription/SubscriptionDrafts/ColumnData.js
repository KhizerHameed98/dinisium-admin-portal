export const columns = (viewDetails) => {
  return [
    { title: "ITO Name", field: "ito_name" },
    { title: "Token Name", field: "ito_token" },
    { title: " Start Date", field: "start_date" },
    { title: "Threshold", field: "threshold" },

    {
      title: null,
      // field:"button",
      render: (rowData) => {
        return (
          <button
            style={{ marginRight: "3%" }}
            className="dls-btn bg-semi-black text-white width-max-content"
            onClick={()=>viewDetails(rowData.id)}
          >
            View Details
          </button>
        );
      },
    },
  ];
};
