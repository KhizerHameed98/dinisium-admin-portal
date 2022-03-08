import Tooltip from "@material-ui/core/Tooltip";
import moment from "moment";
export const columns = (readMore, setReadMore) => {
  return [
    { title: "Name", field: "fname" },
    { title: "Token Name", field: "token_name" },
    { title: "Token Symbol", field: "token_symbol" },
    { title: "Order Type", field: "order_type" },

    // { title: "Amount", field: "amount" },
    {
      title: "Amount",
      render: (rowData) => {
        if (rowData?.spreadedamount === null) {
          return "";
        } else {
          return `${parseFloat(rowData?.spreadedamount).toFixed(4)}`;
        }
      },
    },

    // {
    //   title: "Transaction Hash",
    //   render: (rowData) => {
    //     // return `${(rowData.transaction_hash`}

    //     return `${rowData.transaction_hash}`;
    //   },
    // },

    {
      title: "Transaction Hash",
      render: (rowData) => {
        if (rowData?.transaction_hash == undefined) {
          return "";
        } else {
          return (
            <Tooltip title={rowData?.transaction_hash} placement="top">
              <p> {`${rowData?.transaction_hash.substring(0, 10)}....`}</p>
            </Tooltip>
          );
        }
      },
    },
    // { title: "Date", field: "created_at" },
    {
      title: "Date",
      render: (rowData) => {
        return `${moment(rowData.created_at).format("YYYY-MM-DD " + "h:mm:a")}`;
      },
    },
  ];
};
