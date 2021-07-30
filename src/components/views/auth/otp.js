import React, { useState } from "react";
import { motion } from "framer-motion";
import OtpInput from "react-otp-input";

const Otp = ({ changeView, variants }) => {
  const [otp, setOtp] = useState("");
  const handleOtp = (otp) => setOtp(otp);

  const handleSubmit = () => {
    console.log(otp);
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

export default Otp;
