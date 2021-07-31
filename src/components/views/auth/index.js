import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { connect, useDispatch } from "react-redux";
import "./style.css";
import Signin from "./signIn";
import Slider from "react-slick";
import SignUp from "./signUp";
import Otp from "./otp";
import ForgotPassword from "./forgotPassword";
import { sendOtp } from "../../../actions";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const settings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Auth = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const childrens = [
    <Signin changeView={setStep} variants={variants} />,
    <SignUp changeView={setStep} variants={variants} />,
    <Otp changeView={setStep} variants={variants} />,
    <ForgotPassword changeView={setStep} variants={variants} />,
  ];

  useEffect(() => {
    if (step === 2)
      dispatch(sendOtp({ email: sessionStorage.getItem("ab_email") }));
    // eslint-disable-next-line
  }, [step]);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="auth-wrapper"
    >
      <img
        src="/images/logo.png"
        height="30"
        alt="Brand_img"
        className="brand-full-logo"
      />
      <div className="auth-container">
        {childrens[step]}
        <Slider {...settings} className="auth-slider">
          <div className="slider-img">
            <h2>
              No more manual
              <br />
              Accounting
            </h2>
            <img src="/images/slider1.png" alt="Slider1_Image" />
          </div>
          <div className="slider-img">
            <h2>
              No more manual
              <br />
              Tax Process
            </h2>

            <img src="/images/slider2.png" alt="Slider2_Image" />
          </div>
          <div className="slider-img">
            <h2>
              No more manual
              <br />
              Inventory Tracking
            </h2>

            <img src="/images/slider3.png" alt="Slider3_Image" />
          </div>
        </Slider>
      </div>
    </motion.div>
  );
};

export default connect()(Auth);
