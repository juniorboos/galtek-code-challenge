import { handlerCitiesWeather } from "../controllers/weatherController";

export default {
  Query: {
    weathers: () => handlerCitiesWeather(),
  },
};
