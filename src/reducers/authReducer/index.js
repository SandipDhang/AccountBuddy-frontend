import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  isLoading: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default AuthReducer;
