import { put, takeLatest, fork } from "redux-saga/effects";
import * as actionTypes from "../../actions/actionTypes";

//WORKERS
function* signinWorker() {
  // const banks = yield fetchBanks();
  yield put({ type: actionTypes.LOGIN, payload: true });
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
