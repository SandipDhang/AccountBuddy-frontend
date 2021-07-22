import { put, takeLatest, fork } from "redux-saga/effects";
import * as actionTypes from "../../actions/actionTypes";
import { login } from "../../api";

//WORKERS
function* signinWorker(payload) {
  try {
    const res = yield login(payload);
    console.log(res, "saga");
    if (!res.error) {
      yield put({ type: actionTypes.COMPLETE_LOGIN, payload: res });
    } else {
      yield put({
        type: actionTypes.ERROR_LOGIN,
        payload: "Something went wrong",
      });
    }
  } catch (error) {}
}

//WATCHERS
function* signinWatcher() {
  yield takeLatest(actionTypes.LOGIN, signinWorker);
}

//ASSEMBLY
function* authSaga() {
  yield fork(signinWatcher);
}

export default authSaga();
