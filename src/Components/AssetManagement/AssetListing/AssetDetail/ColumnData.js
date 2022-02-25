export const columns = [
  { title: "Tokens where asset is used", field: "token_name" },
  {
    title: "Percentage",
    render: (rowData) => {
      if (rowData?.spreadedamount || rowData.asset_quantity === null) {
        return "";
      } else {
        return `${parseFloat(
          (rowData?.asset_quantity / rowData?.asset_total_supply) * 100
        )} %`;
      }
    },
  },
];
