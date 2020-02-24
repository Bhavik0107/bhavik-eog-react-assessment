import { takeEvery, call } from "redux-saga/effects";
import * as actions from "../actions";
import { toast } from "react-toastify";

function* apiErrorReceived(action) {
  yield call(toast.error, `Error Received: ${action.error}`);
}

function* watchApiError() {
  yield takeEvery(actions.weatherApiErrorReceived, apiErrorReceived);
}

export default [watchApiError];
