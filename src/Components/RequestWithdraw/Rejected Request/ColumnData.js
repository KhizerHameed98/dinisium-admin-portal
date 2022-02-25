export const columns = [
  {
    title: "Name",
    customSort: (a, b) => {
      let x = a.fname.toUpperCase(),
        y = b.fname.toUpperCase();
      return x == y ? 0 : x > y ? 1 : -1;
    },
    render: (rowData) => {
      console.log("rowdata", rowData);
      return `${rowData?.fname} ${rowData?.lname}`;
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
  { title: "Rejection Reason", field: "rejection_message", sorting: false },
];
