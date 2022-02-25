import moment from "moment";
import { Modal, Button, Form } from "react-bootstrap";

export const columns = (
  user_id,
  approveTransaction,
  showModal,
  handleClose,
  handleChangee,
  Message,
  ModalAppear,
  RejectOrders,
  Approve
) => {
  return [
    {
      title: "Name",
      field: "fname",
      customSort: (a, b) => {
        let x = a.fname.toUpperCase(),
          y = b.fname.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },
    {
      title: "Token Name",
      field: "token_name",
      customSort: (a, b) => {
        let x = a.token_name.toUpperCase(),
          y = b.token_name.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },
    {
      title: "Sybmol",
      field: "token_symbol",
      customSort: (a, b) => {
        let x = a.token_symbol.toUpperCase(),
          y = b.token_symbol.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      },
    },
    {
      title: "Amount",
      // field: "spreadedamount",

      customSort: (a, b) => {
        let x = Number(a.spreadedamount),
          y = Number(b.spreadedamount);

        return x == y ? 0 : x > y ? 1 : -1;
      },
      render: (rowData) => {
        if (rowData?.spreadedamount === null) {
          return "";
        } else {
          return `${parseFloat(rowData?.spreadedamount)?.toFixed(4)}`;
        }
      },
    },
    {
      title: "Tokens",
      field: "tokens",
      customSort: (a, b) => {
        let x = Number(a.tokens),
          y = Number(b.tokens);
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
    {
      title: "Type ",
      field: "order_type",
      sorting: false,
    },
    /* {
      title: "Date",
      field: "created_at",
    }, */
    {
      title: "Date",
      customSort: (a, b) =>
        new Date(a.created_at) > new Date(b.created_at) ? 1 : -1,
      render: (rowData) => {
        return `${moment(rowData.created_at).format(
          "YYYY-MM-DD " + "h:mm:a"
        )} `;
      },
    },
    {
      title: null,
      field: "button",
      render: (rowData) => (
        <>
          {user_id != rowData.admin_one && user_id != rowData.admin_two ? (
            <>
              <button
                className="dls-btn bg-semi-black text-white btn btn-dark"
                onClick={approveTransaction}
                disabled={
                  rowData?.disable === undefined ? false : rowData?.disable
                }
                onClick={() => Approve(rowData.id)}
              >
                Confirm
              </button>

              {/* Reject Button  */}
              <Modal show={showModal} style={{ marginTop: "150px" }}>
                <div className="modal-header border-0">
                  <button type="button" className="close" onClick={handleClose}>
                    <span className="font-18">&times;</span>
                  </button>
                </div>
                <Modal.Body>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Rejection Message</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Message"
                      value={Message}
                      onChange={handleChangee}
                    />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => RejectOrders(rowData.id)}
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              <button
                className="dls-btn bg-semi-black text-white btn btn-dark rej"
                onClick={approveTransaction}
                disabled={
                  rowData?.disable === undefined ? false : rowData?.disable
                }
                style={{ marginTop: "15px" }}
                onClick={() => ModalAppear()}
              >
                Reject
              </button>
            </>
          ) : (
            <></>
          )}
        </>
      ),
    },
  ];
};
