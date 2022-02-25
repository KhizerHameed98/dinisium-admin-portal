// import { approveWithdraw } from "../../../Services/approveWithdraw";
import moment from "moment";
import { Modal, Button, Form } from "react-bootstrap";

export const columns = (
  approveRequest,
  rejectRequest,
  showModal,
  handleClose,
  Message,
  handleChangee,
  RejectRequest,
  ViewDetail
) => {
  return [
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
    // { title: "Date", field: "created_at" },
    {
      title: "Date",
      customSort: (a, b) =>
        new Date(a.created_at) > new Date(b.created_at) ? 1 : -1,
      render: (rowData) => {
        return `${moment(rowData.created_at).format("YYYY-MM-DD " + "h:mm:a")}`;
      },
    },
    {
      title: null,
      field: "button",
      render: (rowData) => (
        <>
          {/* <button
            // style={{ marginRight: "3%" }}
            className="dls-btn bg-semi-black text-white width-max-content"
            onClick={() => rejectRequest()}
          >
            Reject
          </button> */}

          {/* <button
            style={{ marginRight: "3%" }}
            className="dls-btn bg-semi-black text-white width-max-content"
            onClick={() => approveRequest(rowData.id)}
          >
            Approve
          </button> */}

          <button
            style={{ marginRight: "3%" }}
            className="dls-btn bg-semi-black text-white width-max-content"
            onClick={(e) =>
              ViewDetail(e, {
                kycid: rowData.kyc_id,
                id: rowData.id,
                amount: rowData.amount,
                approved_by: rowData.admin_one,
              })
            }
          >
            View Detail
          </button>
        </>
      ),
    },
  ];
};
