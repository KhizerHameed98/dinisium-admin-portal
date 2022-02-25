import moment from "moment";

// var reA = /[^a-zA-Z]/g;
// var reN = /[^0-9]/g;

// function sortAlphaNum(a, b) {
//   var aA = a.replace(reA, "");
//   var bA = b.replace(reA, "");
//   if (aA === bA) {
//     var aN = parseInt(a.replace(reN, ""), 10);
//     var bN = parseInt(b.replace(reN, ""), 10);
//     return aN === bN ? 0 : aN > bN ? 1 : -1;
//   } else {
//     return aA > bA ? 1 : -1;
//   }
// }

export const columns = [
  {
    title: "Asset Name",
    field: "name",
    customSort: (a, b) => {
      let x = a.name.toUpperCase(),
        y = b.name.toUpperCase();
      return x == y ? 0 : x > y ? 1 : -1;
    },
    // (a.name > b.name ? 1 : a.name < b.name ? -1 : 0),
  },
  {
    title: "Asset Type",
    field: "type",
    customSort: (a, b) => {
      let x = a.type.toUpperCase(),
        y = b.type.toUpperCase();
      return x == y ? 0 : x > y ? 1 : -1;
    },
  },
  {
    title: "Asset Price",
    field: "price",
    customSort: (a, b) => {
      let x = Number(a.price),
        y = Number(b.price);
      return x == y ? 0 : x > y ? 1 : -1;
    },
  },
  {
    title: "Unit",
    field: "unit",
    customSort: (a, b) => {
      let x = a.unit.trim().toUpperCase(),
        y = b.unit.trim().toUpperCase();
      return x == y ? 0 : x > y ? 1 : -1;
    },
    align: "left",
  },
  {
    title: "Total Supply",
    field: "total_supply",
    customSort: (a, b) => {
      let x = Number(a.total_supply),
        y = Number(b.total_supply);
      return x == y ? 0 : x > y ? 1 : -1;
    },
  },
  // {
  //   title: "Remaining Supply",
  //   field: "remaining_supply",
  // },
  {
    title: "Remaining Supply",
    field: "remaining_supply",
    customSort: (a, b) => {
      let x = Number(a.remaining_supply),
        y = Number(b.remaining_supply);
      return x == y ? 0 : x > y ? 1 : -1;
    },
    render: (rowData) => {
      return `${parseFloat(rowData.remaining_supply).toFixed(4)}`;
    },
  },
  // {
  //   title: "Created At",
  //   field: "created_at",
  // },
  {
    title: "Created At",
    field: "created_at",
    customSort: (a, b) =>
      new Date(a.created_at) > new Date(b.created_at) ? 1 : -1,
    render: (rowData) => {
      return `${moment(rowData.created_at).format("YYYY-MM-DD " + "h:mm:a")}`;
    },
  },
];
