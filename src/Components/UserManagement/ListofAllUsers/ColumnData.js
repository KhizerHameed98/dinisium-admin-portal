export const columns = (handleBlockUnBlock) => {
  return [
    {
      title: "Name",
      field: "fname",
      customSort: (a, b) => {
        let x = a.fname.toUpperCase(),
          y = b.fname.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },
    {
      title: "Email",
      field: "email",
      customSort: (a, b) => {
        let x = a.email.toUpperCase(),
          y = b.email.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },
    {
      title: "Country",
      field: "country",
      customSort: (a, b) => {
        let x = a.country.toUpperCase(),
          y = b.country.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },
    {
      title: null,
      field: "button",
      render: (rowData) => (
        <button
          className="dls-btn bg-semi-black text-white width-max-content"
          onClick={() => handleBlockUnBlock(rowData?.id, rowData?.is_blocked)}
        >
          {rowData?.is_blocked ? "Unblock User" : "Block User"}
        </button>
      ),
    },
  ];
};
