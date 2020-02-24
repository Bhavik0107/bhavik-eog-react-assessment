import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import weatherReducer from "./reducers/Weather";
import DashboardReducer from "./reducers/Dashboard";

const reducer = combineReducers(
  {
    weather: weatherReducer,
    dashboard: DashboardReducer
  }
);

export default () => {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(reducer, composeEnhancers(middlewares));

  sagaMiddleware.run(sagas);

  return store;
};
