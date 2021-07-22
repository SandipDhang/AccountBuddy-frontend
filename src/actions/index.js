import * as actionTypes from "./actionTypes";

export const signIn = (data) => ({
  type: actionTypes.LOGIN,
  paylaod: data,
});
