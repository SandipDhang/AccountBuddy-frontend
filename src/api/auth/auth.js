import apiBuddy from "../index";
const login_api = "auth/login";

export const login = async (payload) => {
  return await apiBuddy.post(login_api, payload);
};
