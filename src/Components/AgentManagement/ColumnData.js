import browserRoute from "../../Constants/browserRoutes";

export const columns = (addInvestorBtn) => {
  return [
    { title: "Agent Name", field: "name" },
    { title: "Email", field: "email" },
    {
      title: "Contact",
      field: "contact",
    },
    {
      title: "Country",
      field: "country",
    },
    {
      title: null,
      field: "button",
      render: (rowData) => (
        <button
          className="dls-btn bg-semi-black text-white width-max-content"
          onClick={() => addInvestorBtn(rowData)}
        >
          Add Investor
        </button>
      ),
    },
  ];
};
