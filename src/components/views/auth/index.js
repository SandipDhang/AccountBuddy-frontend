import React, { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";
import Signin from "./signIn";
import Slider from "react-slick";
import SignUp from "./signUp";

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
  const [view, setView] = useState("signin");
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
        {view === "signin" ? <Signin /> : <SignUp />}
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

export default Auth;
