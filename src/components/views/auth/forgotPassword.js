import React from "react";
import { motion } from "framer-motion";

const ForgotPassword = ({ changeView, variants }) => {
  return (
    <motion.div
      className="other-links"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <button onClick={() => changeView(0)}>
        Already have an account? Login Here
      </button>
      <button onClick={() => changeView(1)}>
        Don't have an account? Create one
      </button>
    </motion.div>
  );
};

export default ForgotPassword;
