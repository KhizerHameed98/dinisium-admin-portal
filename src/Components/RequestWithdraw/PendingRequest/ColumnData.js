// import { approveWithdraw } from "../../../Services/approveWithdraw";
import moment from "moment";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Route from "../../../Constants/browserRoutes";

export const columns = (
  approveRequest,
  rejectRequest,
  showModal,
  handleClose,
  Message,
  handleChangee,
  RejectRequest,
  OpenViewDetail
) => {
  return [
    // { title: "Name", field: "fname" },
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
          {console.log("rrr", rowData)}
          <Modal show={showModal} style={{ marginTop: "150px" }}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Message</Form.Label>
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
                onClick={() => RejectRequest(rowData.id)}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          {/* <button
            // style={{ marginRight: "3%" }}
            className="dls-btn bg-semi-black text-white width-max-content"
            onClick={() => rejectRequest()}
          >
            Reject
          </button>

          <button
            style={{ marginRight: "3%" }}
            className="dls-btn bg-semi-black text-white width-max-content"
            onClick={() => approveRequest(rowData.id)}
          >
            Approve
          </button> */}

          {/* <Link
            style={{ marginRight: "3%" }}
            className="dls-btn bg-semi-black text-white width-max-content"
            to={Route.WITHDRAW_REQUEST_VIEWDETAIL} //Pathname
          >
            View Details
          </Link> */}

          <button
            style={{ marginRight: "3%" }}
            className="dls-btn bg-semi-black text-white width-max-content"
            // to={Route.WITHDRAW_REQUEST_VIEWDETAIL} //Pathname
            onClick={(e) =>
              OpenViewDetail(e, {
                kycid: rowData.kyc_id,
                id: rowData.id,
                amount: rowData.amount,
              })
            }
          >
            View Details
          </button>
        </>
      ),
    },
  ];
};
