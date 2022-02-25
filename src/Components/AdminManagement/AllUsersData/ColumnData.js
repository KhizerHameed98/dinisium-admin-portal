export const columns = (handleDelete) => {
  return [
    { title: "Name", field: "" },
    { title: "Email", field: "" },
    { title: "Contact", field: "" },
    {
      title: null,
      field: "button",
      render: (rowData) => (
        <button
          className="dls-btn bg-semi-black text-white width-max-content"
          onClick={() => handleDelete(rowData?.id)}
        >
          <strong> REMOVE</strong>
        </button>
      ),
    },
  ];
};
