export const AssetDraftColumns = [
  { title: "Asset Name", field: "" },
  { title: "Asset Price", field: "" },
  { title: "Unit", field: "" },
  { title: "Total Supply", field: "" },

  {
    title: null,
    field: "button",
    render: (rowData) => {
      <button className="dls-btn bg-semi-black text-white width-max-content">
        View Details
      </button>;
    },
  },
];
