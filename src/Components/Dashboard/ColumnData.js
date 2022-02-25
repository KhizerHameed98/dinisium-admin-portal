export const columns = (clickToken) => {
  return [
    {
      title: "Token Name",
      // filed: "ito_name",

      render: (rowData) => {
        // return `${rowData.ito_name}`;
        // console.log("rowData", rowData);
        return (
          <div
            className="hoverEffectClass"
            onClick={() => clickToken(rowData.ito_id)}
          >
            {" "}
            {rowData.token_name}{" "}
          </div>
        );
      },
    },

    {
      title: "Tradeable",
      field: "is_tradeable",
      cellStyle: {
        cursor: "auto",
      },
    },
    {
      title: "Authorized Admins",
      field: "authorized_admins",
      cellStyle: {
        cursor: "auto",
      },
    },
    {
      title: "Token Price",
      field: "price",
      cellStyle: {
        cursor: "auto",
      },
    },
    {
      title: "Token Market Cap",
      field: "marketcap",
      cellStyle: {
        cursor: "auto",
      },
    },
    {
      title: "Minted Supply",
      field: "minted_supply",
      cellStyle: {
        cursor: "auto",
      },
    },
    {
      title: "Trading Supply",
      field: "total_supply_available_for_trading",
      cellStyle: {
        cursor: "auto",
      },
    },
    {
      title: "User Wallets Supply",
      field: "supply_held_in_user_wallet",
      cellStyle: {
        cursor: "auto",
      },
    },
    {
      title: "Admin Wallets Supply",
      field: "supply_held_in_admin_wallet",
      cellStyle: {
        cursor: "auto",
      },
    },
  ];
};

// export const columns = [
//   // { title: "Token Name", field: "token_name" },
//   {
//     title: "Token Name",
//     // filed: "ito_name",

//     render: (rowData) => {
//       // return `${rowData.ito_name}`;
//       return (
//         <div>
//           {" "}
//           {rowData.token_name}{" "}
//         </div>
//       );
//     },
//   },

//   { title: "Tradeable", field: "is_tradeable" },
//   { title: "Authorized Admins", field: "authorized_admins" },
//   { title: "Token Price", field: "price" },
//   { title: "Token Market Cap", field: "marketcap" },
//   { title: "Minted Supply", field: "minted_supply" },
//   { title: "Trading Supply", field: "total_supply_available_for_trading" },
//   { title: "User Wallets Supply", field: "supply_held_in_user_wallet" },
//   { title: "Admin Wallets Supply", field: "supply_held_in_admin_wallet" },
// ];
