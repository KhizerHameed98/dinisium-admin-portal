export const columns = [
  {
    title: "Name",
    field: "full_name",
    customSort: (a, b) => {
      let x = a.full_name.toUpperCase(),
        y = b.full_name.toUpperCase();
      return x == y ? 0 : x > y ? 1 : -1;
    },
  },
  { title: "Address", field: "permanent_address", sorting: false },
];
