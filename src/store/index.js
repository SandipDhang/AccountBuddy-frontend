import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import RootReducers from "../reducers";
import RootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  RootReducers,
  process.env === "production"
    ? applyMiddleware(sagaMiddleware)
    : composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);
sagaMiddleware.run(RootSaga);

export default store;
