import { put, takeLatest, fork } from "redux-saga/effects";
import * as actionTypes from "../../actions/actionTypes";
import { login } from "../../api/auth/auth";
import { Alert } from "../../components/utility/alert";

//WORKERS
function* signinWorker(data) {
  try {
    const res = yield login(data.payload);

    if (!res.error) {
      new Alert(res.data.msg).success();
      // yield (document.cookie = `token=${res.data.data.token}; secure `);
      yield put({ type: actionTypes.COMPLETE_LOGIN, payload: res });
    } else {
      new Alert(res.error.msg).error();
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
