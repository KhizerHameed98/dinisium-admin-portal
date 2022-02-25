import { SettingsPhoneTwoTone } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { registerAgent } from "../../../Redux/actions/actions";

const AddNewAgent = ({ registerAgent }) => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    contact_no: "",
    country: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClose = () => setShow(false);
  const handleCLick = (e) => {
    e.preventDefault();
    // SettingsPhoneTwoTone(true);

    setLoading(true);
    registerAgent({ formData, setFormData, setLoading });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body p-5">
              <form className="form" onSubmit={onSubmit}>
                <div className="form-group row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>First Name</label>

                      <input
                        type="text"
                        placeholder="First Name *"
                        className="form-control"
                        name="fname"
                        value={formData.fname}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Last Name</label>

                      <input
                        type="text"
                        placeholder="Last Name *"
                        className="form-control"
                        name="lname"
                        value={formData.lname}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label>Contact</label>

                    <input
                      type="number"
                      placeholder="Contact *"
                      className="form-control"
                      name="contact_no"
                      value={formData.contact_no}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Email</label>

                      <input
                        type="email"
                        placeholder="Email *"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Country</label>

                      <input
                        type="text"
                        placeholder="Country *"
                        className="form-control"
                        name="country"
                        value={formData.country}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Address</label>

                      <input
                        type="text"
                        placeholder="Address *"
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}{" "}
                  ADD AGENT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {show && (
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
          <Modal.Body className="text-center">
            <div>
              <p>
                Are you sure, you you want to create <strong>ITO series</strong>
                {/* create ITO series create<strong>successfully</strong> */}
              </p>
            </div>

            <ul className="row data-confirmation">
              <li className="col-12 col-md-6">
                <span>First Name : </span>
                <span style={{ paddingLeft: "4px" }}>{formData.fname}</span>
              </li>
              <li className="col-12 col-md-6">
                <span>Last Name : </span>
                <span style={{ paddingLeft: "4px" }}>{formData.lname}</span>
              </li>

              <li className="col-12 col-md-6">
                <span>Contact : </span>
                <span style={{ paddingLeft: "4px" }}>
                  {formData.contact_no}
                </span>
              </li>
              <li className="col-12 col-md-6">
                <span>Email : </span>
                <span style={{ paddingLeft: "4px" }}>{formData.email} $</span>
              </li>
              <li className="col-12 col-md-6">
                <span>Country : </span>
                <span style={{ paddingLeft: "4px" }}>{formData.country}</span>
              </li>
              <li className="col-12 col-md-6">
                <span>Address : </span>
                <span style={{ paddingLeft: "4px" }}>{formData.address}</span>
              </li>
            </ul>

            <button
              type="button"
              className="btn btn-primary w-25 btn-md"
              // onClick={handleClose}
              onClick={handleCLick}
            >
              Ok
            </button>
          </Modal.Body>
          <Modal.Footer className="border-0"></Modal.Footer>
        </Modal>
      )}

      {/* <!-- end inner row --> */}
    </div>
  );
};

export default connect(null, { registerAgent })(AddNewAgent);
