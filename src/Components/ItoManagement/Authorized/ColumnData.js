import moment from "moment";
export const columns = [
  {
    title: "ITO Name",
    field: "name",
    customSort: (a, b) => {
      let x = a.name.toUpperCase();
      let y = b.name.toUpperCase();
      return x == y ? 0 : x > y ? 1 : -1;
    },
  },
  {
    title: "Token Name",
    field: "token_name",
    customSort: (a, b) => {
      let x = a.token_name.toUpperCase();
      let y = b.token_name.toUpperCase();
      return x == y ? 0 : x > y ? 1 : -1;
    },
  },
  // {
  //   title: "Start Date",
  //   field: "start_date",
  // },
  {
    title: "Start Date",
    field: "start_date",
    customSort: (a, b) =>
      new Date(a.start_date) > new Date(b.start_date) ? 1 : -1,
    render: (rowData) => {
      return `${moment(rowData.start_date).format("DD-MM-YYYY")}`;
    },
  },
  {
    title: "Supply Issued",
    field: "supply",
    customSort: (a, b) => {
      let x = Number(a.supply),
        y = Number(b.supply);
      return x == y ? 0 : x > y ? 1 : -1;
    },
    type: "numeric",
    align: "left",
  },
  {
    title: "Is Blocked",
    field: "onhold",
    customSort: (a, b) => {
      let x = a.onhold;
      let y = b.onhold;
      return x == y ? 0 : x > y ? 1 : -1;
    },
  },
  {
    title: "Status",
    field: "status",
    customSort: (a, b) => {
      let x = a.status.toUpperCase();
      let y = b.status.toUpperCase();
      return x == y ? 0 : x > y ? 1 : -1;
    },
  },
];
