import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Route from "../../../../Constants/browserRoutes";
import { login } from "../../../../Redux/actions/actions";
import { connect } from "react-redux";

const SignInForm = ({
  setVerificationPage,
  verificationPage,
  setRequestIdSms,
  setUserId,
  login,
}) => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "admin",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    login({
      formData,
      setVerificationPage,
      verificationPage,
      setRequestIdSms,
      setUserId,
      history,
      setLoading,
    });
    // setVerificationPage({ emailPage: true, smsPage: false, googlePage: false });
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h3 className="login-heading">LOGIN</h3>
      <div className="form-group">
        <label className="">Email</label>
        <input
          id="exampleInputEmail1"
          type="text"
          placeholder="Enter Email*"
          className="form-control"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div className="form-group" style={{ width: "100%" }}>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password*"
          className="form-control"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div
        className="form-group"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
        </div>
        {/* <a href="#">Forget your Password ?</a> */}
      </div>
      {/* <!-- <p style="padding-left: 300px;">forget your Password?</p> --> */}

      {/* <button
            type="submit"
            style={{ marginBottom: "20px" }}
            className="btn btn-outline-primary"
          >
            LOG IN
          </button> */}
      <button
        className="btn btn-primary shadow-2 mb-4"
        type="submit"
        disabled={loading}
      >
        {loading && <span className="spinner-border spinner-border-sm"></span>}{" "}
        LOGIN
      </button>
      {/* <p className="mb-2 text-muted">
        Forgot password? <NavLink to={Route.SIGNIN}>Reset</NavLink>
      </p>
      <p className="mb-0 text-muted">
        Don’t have an account? <NavLink to={Route.SIGNIN}>Signup</NavLink>
      </p> */}
    </form>
  );
};

export default connect(null, { login })(SignInForm);
