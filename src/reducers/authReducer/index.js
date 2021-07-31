import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  errorMessage: "",
  industries: [],
  otp: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, isLoading: true };
    case actionTypes.COMPLETE_LOGIN:
      return { ...state, isLoading: false, isLoggedIn: true };
    case actionTypes.ERROR_LOGIN:
      return { ...state, isLoading: false };
    case actionTypes.GET_ALL_INDUSTRIES:
      return { ...state };
    case actionTypes.COMPLETE_INDUSTRIES:
      return { ...state, industries: action.payload };
    case actionTypes.COMPLETE_SIGNUP:
      return { ...state, isLoading: false };
    case actionTypes.ERROR_SIGNUP:
      return { ...state, isLoading: false };
    case actionTypes.COMPLETE_SEND_OTP:
      return { ...state, otp: action.payload };

    default:
      return { ...state };
  }
};

export default AuthReducer;
