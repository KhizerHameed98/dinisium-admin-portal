export const columns = () => {
  return [
    {
      title: "Token Name",
      field: "token_name",
      customSort: (a, b) => {
        let x = a.ito_name.toUpperCase(),
          y = b.ito_name.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },
    {
      title: "Tokens",
      field: "holdings",
      customSort: (a, b) => {
        let x = Number(a.balance),
          y = Number(b.balance);
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },
    {
      title: "Amount",
      render: (rowData) => {
        return `${parseFloat(rowData.price).toFixed(3)}`;
      },
    },
  ];
};
