import * as actionTypes from "./actionTypes";

export const signIn = (data) => ({
  type: actionTypes.LOGIN,
  payload: data,
});

export const getAllIndustry = () => ({
  type: actionTypes.GET_ALL_INDUSTRIES,
});

export const signUp = (data) => ({
  type: actionTypes.SIGNUP,
  payload: data,
});

export const sendOtp = (email) => ({
  type: actionTypes.SEND_OTP,
  payload: email,
});

export const verifyOtp = (otp) => ({
  type: actionTypes.VERIFY_OTP,
  paylaod: otp,
});
