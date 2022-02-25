import React, { useEffect } from "react";
import { Fragment } from "react";
import { Modal } from "react-bootstrap";

const CreateItoModal = ({
  show,
  setShow,
  formData,
  handleCreateIto,
  loading,
}) => {
  const handleClose = () => setShow(false);
  const {
    ito,
    ito: { term_sheets },
    token,
    series,
  } = formData;

  useEffect(() => {
    if (document) {
      document.getElementById("#description").innerHTML =
        formData.ito.description;
    }
  }, [formData.ito.description]);

  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      style={{ opacity: 1 }}
      centered
    >
      <div className="modal-header border-0">
        <button type="button" className="close" onClick={handleClose}>
          <span className="font-18">&times;</span>
        </button>
      </div>

      <Modal.Body>
        <div className="text-center">
          <p>
            Are you sure, you want to <strong>create an ITO?</strong>
          </p>
        </div>

        <ul className="row data-confirmation">
          <li className="col-12 col-md-12">
            <span>
              <strong>ITO Detail</strong>
            </span>
          </li>

          <li className="col-12 col-md-6">
            <span>ITO Name : </span>
            <span style={{ marginLeft: "4px" }}>{ito?.name}</span>
          </li>
          {ito.alloted_admins?.map((alloted_admin, index) => (
            <li className="col-12 col-md-6" key={alloted_admin?.id}>
              <span>Alloted Admin {index + 1}: </span>
              <span style={{ marginLeft: "4px" }}>{alloted_admin?.label}</span>
            </li>
          ))}
          <li className="col-12 col-md-6">
            <span>Start Date : </span>
            <span style={{ marginLeft: "4px" }}>{ito?.start_date}</span>
          </li>
          {term_sheets?.map((term_sheet, index) => (
            <li className="col-12 col-md-6">
              <span>Term Sheet {index + 1}: </span>
              <span style={{ marginLeft: "4px" }}>{term_sheet?.name}</span>
            </li>
          ))}
          <li className="col-12 col-md-12">
            <span>Description : </span>
            <span>
              <div id="#description" style={{ marginLeft: "4px" }}>
                {ito?.description}
                {/* document.getElementById("demo").innerHTML ="
                <h1> Paragraph changed!</h1>"; */}
              </div>
            </span>
          </li>
        </ul>
        <ul className="row data-confirmation">
          <li className="col-12 col-md-12">
            <span>
              <strong>Token Detail</strong>
            </span>
          </li>

          <li className="col-12 col-md-6">
            <span>Token Name : </span>
            <span style={{ marginLeft: "4px" }}>{token?.token_name}</span>
          </li>
          <li className="col-12 col-md-6">
            <span>Token Symbol : </span>
            <span style={{ marginLeft: "4px" }}>{token?.token_symbol}</span>
          </li>
          <li className="col-12 col-md-6">
            <span>Token Decimal : </span>
            <span style={{ marginLeft: "4px" }}>{token?.token_decimal}</span>
          </li>
          <li className="col-12 col-md-6">
            <span>Supply : </span>
            <span style={{ marginLeft: "4px" }}>{token?.supply}</span>
          </li>
          <li className="col-12 col-md-6">
            <span>Price : </span>
            <span style={{ marginLeft: "4px" }}>{token?.price}</span>
          </li>
          <li className="col-12 col-md-6">
            <span>Target Value : </span>
            <span style={{ marginLeft: "4px" }}>{token?.target_value}</span>
          </li>
          <li className="col-12 col-md-6">
            <span>Buying Spread : </span>
            <span style={{ marginLeft: "4px" }}>{token?.buying_spread}</span>
          </li>
          <li className="col-12 col-md-6">
            <span>Selling Spread : </span>
            <span style={{ marginLeft: "4px" }}>{token?.selling_spread}</span>
          </li>
          <li className="col-12 col-md-12">
            <span>
              <strong>Asset Detail</strong>
            </span>
          </li>
          {token?.back_assets?.map((back_asset, index) => (
            <Fragment key={back_asset?.id}>
              <li className="col-12 col-md-6">
                <span>Weightage {index + 1}: </span>
                <span style={{ marginLeft: "4px" }}>
                  {back_asset?.weightage}
                </span>
              </li>
              <li className="col-12 col-md-6">
                <span>Asset Price {index + 1}: </span>
                <span style={{ marginLeft: "4px" }}>
                  {back_asset?.asset_price}
                </span>
              </li>
              <li className="col-12 col-md-6">
                <span>Asset Value {index + 1}: </span>
                <span style={{ marginLeft: "4px" }}>
                  {back_asset?.asset_value}
                </span>
              </li>
              <li className="col-12 col-md-6">
                <span>Asset Quantity {index + 1}: </span>
                <span style={{ marginLeft: "4px" }}>
                  {back_asset?.asset_quantity}
                </span>
              </li>
            </Fragment>
          ))}

          {/* {term_sheets?.map((term_sheet, index) => (
            <li className="col-12 col-md-6">
              <span>Term Sheet {index + 1}: </span>
              <span>{term_sheet?.name}</span>
            </li>
          ))} */}
        </ul>
        <ul className="row data-confirmation">
          <li className="col-12 col-md-12">
            <span>
              <strong>Initial Series Detail</strong>
            </span>
          </li>

          <li className="col-12 col-md-6">
            <span>Series Name : </span>
            <span style={{ marginLeft: "4px" }}>{series?.name}</span>
          </li>

          <li className="col-12 col-md-6">
            <span>Start Date : </span>
            <span style={{ marginLeft: "4px" }}>{series?.start_date}</span>
          </li>
          <li className="col-12 col-md-6">
            <span>End Date : </span>
            <span style={{ marginLeft: "4px" }}>{series?.end_date}</span>
          </li>
          <li className="col-12 col-md-6">
            <span>Supply : </span>
            <span style={{ marginLeft: "4px" }}>{series?.supply}</span>
          </li>
          <li className="col-12 col-md-6">
            <span>Description : </span>
            <span style={{ marginLeft: "4px" }}>{series?.description}</span>
          </li>
          <li className="col-12 col-md-6">
            <span>Start Date : </span>
            <span style={{ marginLeft: "4px" }}>{series?.start_date}</span>
          </li>
        </ul>

        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary w-25 btn-md"
            onClick={handleCreateIto}
            disabled={loading}
          >
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}{" "}
            Ok
          </button>
        </div>
      </Modal.Body>

      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default CreateItoModal;
