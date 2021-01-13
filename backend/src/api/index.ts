import cities from "../constants/cities";
import axios from "axios";
import config from "../constants/config";

import { IWeatherResponse, ICity } from "../entities/types";

export const getCitiesWeather = async (): Promise<IWeatherResponse> => {
  const { unit, baseURL } = config.weather.api;

  const unitParam = `&units=${unit}`;
  const keyParam = `&appid=${process.env.WEATHER_API_KEY}`;

  let citiesParam =
    "?id=" +
    cities
      .map((city: ICity) => {
        return city.id;
      })
      .join(",");

  return axios
    .get<IWeatherResponse>(baseURL + citiesParam + unitParam + keyParam)
    .then((response) => response.data)
    .catch((error) => {
      return error;
    });
};
