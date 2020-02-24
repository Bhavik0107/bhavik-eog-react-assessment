import { spawn } from "redux-saga/effects";
import weatherSaga from "./sagas/saga";

export default function* root() {
  yield spawn(weatherSaga);
}
