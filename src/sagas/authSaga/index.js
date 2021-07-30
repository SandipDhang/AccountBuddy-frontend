import { put, takeLatest, fork } from "redux-saga/effects";
import * as actionTypes from "../../actions/actionTypes";
import { getAllIndustryTypes, login, signup } from "../../api/auth/auth";
import { Alert } from "../../components/utility/alert";

//WORKERS
function* signinWorker(data) {
  try {
    const res = yield login(data.payload.values);

    if (!res.error) {
      new Alert(res.data.msg).success();
      yield put({ type: actionTypes.COMPLETE_LOGIN, payload: res });
    } else {
      new Alert(res.error.msg).error();
      yield put({
        type: actionTypes.ERROR_LOGIN,
        payload: "Something went wrong",
      });
    }
  } catch (error) {
    new Alert("Something went wrong").error();
    console.log(error);
  }
}

function* getIndustryWorker() {
  try {
    const res = yield getAllIndustryTypes();
    if (!res.error) {
      yield put({
        type: actionTypes.COMPLETE_INDUSTRIES,
        payload: res.data.data,
      });
    }
  } catch (error) {}
}

function* signUpWorker(data) {
  try {
    const res = yield signup(data.payload.data);
    console.log(res, "inSaga");
    if (!res.error) {
      new Alert(res.data.msg).success();
      yield put({ type: actionTypes.COMPLETE_SIGNUP, payload: res });
      data.payload.onSuccessRegister();
    } else {
      new Alert(res.error.msg).error();
      yield put({
        type: actionTypes.ERROR_SIGNUP,
        payload: "Something went wrong",
      });
    }
  } catch (error) {
    console.log(error, "in signup saga");
  }
}

//WATCHERS
function* signinWatcher() {
  yield takeLatest(actionTypes.LOGIN, signinWorker);
}

function* getIndustryWatcher() {
  yield takeLatest(actionTypes.GET_ALL_INDUSTRIES, getIndustryWorker);
}

function* signUpWatcher() {
  yield takeLatest(actionTypes.SIGNUP, signUpWorker);
}

//ASSEMBLY
function* authSaga() {
  yield fork(signinWatcher);
  yield fork(getIndustryWatcher);
  yield fork(signUpWatcher);
}

export default authSaga();
