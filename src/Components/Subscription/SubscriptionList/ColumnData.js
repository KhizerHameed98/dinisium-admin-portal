import moment from "moment";
export const columns = [
  {
    title: "ITO Name",
    field: "ito_name",
    customSort: (a, b) => {
      let x = a.ito_name.toUpperCase(),
        y = b.ito_name.toUpperCase();
      return x == y ? 0 : x > y ? 1 : -1;
    },
  },
  {
    title: "Token Name",
    field: "ito_token",
    customSort: (a, b) => {
      let x = a.ito_token.toUpperCase(),
        y = b.ito_token.toUpperCase();
      return x == y ? 0 : x > y ? 1 : -1;
    },
  },
  // { title: "Start Date", field: "start_date" },`
  {
    title: "Start Date",
    customSort: (a, b) =>
      new Date(a.start_date) > new Date(b.start_date) ? 1 : -1,
    render: (rowData) => {
      return `${moment(rowData.start_date).format("YYYY-MM-DD")}`;
    },
  },
  {
    title: "Threshold",
    field: "threshold",
    customSort: (a, b) => {
      let x = Number(a.threshold),
        y = Number(b.threshold);
      return x == y ? 0 : x > y ? 1 : -1;
    },
  },
  {
    title: "Status",
    field: "status",
    customSort: (a, b) => {
      let x = a.status.toLowerCase();
      let y = b.status.toLowerCase();
      return x == y ? 0 : x > y ? 1 : -1;
    },
  },
];
