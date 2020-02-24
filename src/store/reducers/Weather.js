import * as actions from "../actions";

const initialState = {
  temperatureinCelsius: null,
  temperatureinFahrenheit: null,
  description: "",
  locationName: ""
};

const toF = c => (c * 9) / 5 + 32;

const weatherDataReceived = (state, action) => {
  const { getWeatherForLocation } = action;
  const {
    description,
    locationName,
    temperatureinCelsius
  } = getWeatherForLocation;

  return {
    temperatureinCelsius,
    temperatureinFahrenheit: toF(temperatureinCelsius),
    description,
    locationName
  };
};

const handlers = {
  [actions.weatherDataReceived]: weatherDataReceived
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};