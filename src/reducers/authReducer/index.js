import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, isLoading: true };
    case actionTypes.COMPLETE_LOGIN:
      return { ...state, isLoading: false };
    case actionTypes.ERROR_LOGIN:
      return { ...state, isLoading: false, errorMessage: action.payload };

    default:
      return { ...state };
  }
};

export default AuthReducer;
