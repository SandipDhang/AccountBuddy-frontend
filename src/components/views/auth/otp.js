import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { connect, useDispatch } from "react-redux";
import OtpInput from "react-otp-input";
import { verifyOtp } from "../../../actions";

const Otp = ({ changeView, variants }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const handleOtp = (otp) => setOtp(otp);

  const handleSuccess = () => {
    history.push("/dashboard");
  };

  const handleSubmit = () => {
    dispatch(
      verifyOtp({
        details: { email: sessionStorage.getItem("ab_email"), otp },
        handleSuccess,
      })
    );
  };
  return (
    <motion.div
      className="signin-container"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <h2>Verify OTP</h2>
      <p>We have sent an OTP to your email id</p>
      <div className="otp">
        <OtpInput
          value={otp}
          onChange={handleOtp}
          numInputs={4}
          separator={<span> </span>}
          isInputNum={true}
          className="otp-container"
        />
      </div>
      <button type="submit" className="sign-in-btn" onClick={handleSubmit}>
        Verify
      </button>
    </motion.div>
  );
};

export default connect()(Otp);
