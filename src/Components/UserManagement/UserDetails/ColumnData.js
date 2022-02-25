export const columns = () => {
  return [
    {
      title: "Token Name",
      field: "ito_name",
      customSort: (a, b) => {
        let x = a.ito_name.toUpperCase(),
          y = b.ito_name.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },
    {
      title: "Tokens",
      field: "balance",
      customSort: (a, b) => {
        let x = Number(a.balance),
          y = Number(b.balance);
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },
    {
      title: "Amount",
      field: "amount",
      customSort: (a, b) => {
        let x = Number(a.amount),
          y = Number(b.amount);
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },
  ];
};
