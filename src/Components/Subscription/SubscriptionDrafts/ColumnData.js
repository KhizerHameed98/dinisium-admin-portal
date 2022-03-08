export const columns = (viewDetails) => {
  return [
    {
      title: "ITO Name",
      render: (rowData) => {
        if (rowData.ito_name === null) {
          return "N/A";
        } else {
          return `${rowData.ito_name}`;
        }
      },
    },

    {
      title: "Token Name",
      render: (rowData) => {
        if (rowData.ito_token === null) {
          return "N/A";
        } else {
          return `${rowData.ito_token}`;
        }
      },
    },

    {
      title: "Start Date",
      render: (rowData) => {
        if (rowData.start_date === null) {
          return "N/A";
        } else {
          return `${rowData.start_date}`;
        }
      },
    },

    {
      title: "Threshold",
      render: (rowData) => {
        if (rowData.threshold === null) {
          return "N/A";
        } else {
          return `${rowData.threshold}`;
        }
      },
    },

    {
      title: null,
      // field:"button",
      render: (rowData) => {
        return (
          <button
            style={{ marginRight: "3%" }}
            className="dls-btn bg-semi-black text-white width-max-content"
            onClick={() => viewDetails(rowData.id)}
          >
            View Details
          </button>
        );
      },
    },
  ];
};
