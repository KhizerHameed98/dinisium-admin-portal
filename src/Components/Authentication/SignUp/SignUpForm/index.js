import React, { useState } from "react";

const SignupForm = ({ setCodeVerificationPage }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    country: "",
    password: "",
  });
  const { firstName, lastName, email, contactNo, country, password } = formData;

  const onChange = (e) => {
    setFormData({ ...setFormData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setCodeVerificationPage(true);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h3 className="h3">Sign up</h3>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>First Name</label>
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="First Name"
              className="form-control"
              name="fname"
              value={fname}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Last Name</label>

            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Last Name"
              className="form-control"
              name="lname"
              value={lname}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Email</label>

            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Email*"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Contact No</label>

            <input
              style={{ width: "100%" }}
              type="number"
              placeholder="Contact No"
              className="form-control"
              name="contact_no"
              value={contact_no}
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Country</label>

            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Country"
              className="form-control"
              name="country"
              value={country}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Password</label>

            <input
              style={{ width: "100%" }}
              type="password"
              placeholder="Password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
        </div>
      </div>

      <button
        style={{ marginBottom: "20px" }}
        type="submit"
        className="btn btn-outline-primary"
      >
        SIGN UP
      </button>
    </form>
  );
};

export default SignupForm;
