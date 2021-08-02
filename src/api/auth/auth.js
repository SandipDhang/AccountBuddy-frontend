import apiBuddy from "../index";

export const autoLogin = async () => {
  return await apiBuddy.get("auth/check");
};

export const login = async (payload) => {
  return await apiBuddy.post("auth/login", payload);
};

export const getAllIndustryTypes = async () => {
  return await apiBuddy.get("industry/all");
};

export const signup = async (payload) => {
  return await apiBuddy.post("auth/register", payload);
};

export const sendOtp = async (email) => {
  return await apiBuddy.post("auth/otp/send", email);
};

export const verifyOtpAPI = async (otp) => {
  console.log("otp called");
  return await apiBuddy.post("auth/otp/verify", otp);
};
