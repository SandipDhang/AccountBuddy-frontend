import { put, takeLatest, fork } from "redux-saga/effects";
import * as actionTypes from "../../actions/actionTypes";
import {
  autoLogin,
  getAllIndustryTypes,
  login,
  sendOtp,
  signup,
  verifyOtpAPI,
} from "../../api/auth/auth";
import { Alert } from "../../components/utility/alert";

//WORKERS
function* autoLoginWorker() {
  try {
    const data = yield autoLogin();
    if (data.status === 200) {
      new Alert("Log in successfull").success();
    }
  } catch (error) {
    yield put({ type: actionTypes.ERROR_AUTO_LOGIN });
    new Alert("Session expired. Login again").error();
  }
}

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
    new Alert(error.response.data.msg).error();
    if (error.response.status === 410) data.payload.verifyEmail();
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

function* sendOtpWorker(email) {
  try {
    const otp = yield sendOtp(email.payload);
    if (!otp.data.error) {
      new Alert("OTP sent successfully").success();
    }
  } catch (error) {
    new Alert("Something went wrong. Please try again later").error();
  }
}

function* verifyOtpWorker(otp) {
  console.log(otp, "Im called in verify worker");
  try {
    const res = yield verifyOtpAPI(otp.payload.details);
    if (!res.data.error) {
      yield put({ type: actionTypes.COMPLETE_VERIFY_OTP });
      new Alert(res.data.msg).success();
      otp.payload.handleSuccess();
    }
  } catch (error) {
    new Alert(error.response.data.msg).error();
  }
}

//WATCHERS
function* autoLoginWatcher() {
  yield takeLatest(actionTypes.AUTO_LOGIN, autoLoginWorker);
}

function* signinWatcher() {
  yield takeLatest(actionTypes.LOGIN, signinWorker);
}

function* getIndustryWatcher() {
  yield takeLatest(actionTypes.GET_ALL_INDUSTRIES, getIndustryWorker);
}

function* signUpWatcher() {
  yield takeLatest(actionTypes.SIGNUP, signUpWorker);
}

function* sendOtpWatcher() {
  yield takeLatest(actionTypes.SEND_OTP, sendOtpWorker);
}

function* verifyOtpWatcher() {
  yield takeLatest(actionTypes.VERIFY_OTP, verifyOtpWorker);
}

//ASSEMBLY
function* authSaga() {
  yield fork(autoLoginWatcher);
  yield fork(signinWatcher);
  yield fork(getIndustryWatcher);
  yield fork(signUpWatcher);
  yield fork(sendOtpWatcher);
  yield fork(verifyOtpWatcher);
}

export default authSaga();
