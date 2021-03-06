import React, { useState } from "react";
import verificationImg from "../../../../App/Assets/images/verification.png";
import { verifySms } from "../../../../Redux/actions/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const SmsVerificationForm = ({
  setVerificationPage,
  requestIdSms,
  userId,
  verifySms,
  auth,
}) => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);

  const [verificationCode, setVerificationCode] = useState("");

  const contactLength = auth && auth.contact_no && auth.contact_no.length;
  const contactSteric =
    auth &&
    auth.contact_no &&
    auth.contact_no
      .substring(0, contactLength - 3)
      .split("")
      .reduce((acc, value) => {
        return acc.concat("*");
      }, "");

  const onChange = (e) => {
    setVerificationCode(e.target.value);
  };
  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    verifySms({ verificationCode, requestIdSms, userId, history, setLoading });
    // setVerificationPage({ emailPage: false, smsPage: false, googlePage: true });
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <h3 className="h3">2-Step Verification</h3>
      <p>
        {" "}
        <img
          src={verificationImg}
          style={{ width: "25px", height: "25px" }}
          alt="..."
        />{" "}
        {/* Enter the Verification code Send through this +92*******076
         */}
        {`Enter the Verification code Send through this ${contactSteric}${
          auth &&
          auth.contact_no &&
          auth.contact_no.substring(contactLength - 3, contactLength + 1)
        }`}
      </p>
      <div className="form-group">
        <label> Code</label>

        <input
          type="text"
          placeholder="Enter Code"
          className="form-control"
          name="verificationCode"
          value={verificationCode}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <button
        style={{ marginBottom: "20px" }}
        type="submit"
        className="btn btn-outline-primary"
        disabled={loading}
      >
        {loading && <span className="spinner-border spinner-border-sm"></span>}{" "}
        VERIFY
      </button>
    </form>
  );
};

export default connect(null, { verifySms })(SmsVerificationForm);
