import moment from "moment";
export const columns = [
  {
    title: "Name",
    field: "fname",
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
  // { title: "Date", field: "created_at" },
  {
    title: "Date",
    customSort: (a, b) =>
      new Date(a.created_at) > new Date(b.created_at) ? 1 : -1,
    render: (rowData) => {
      return `${moment(rowData.created_at).format("YYYY-MM-DD " + "h:mm:a")}`;
    },
  },
];
