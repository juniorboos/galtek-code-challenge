import { getCitiesWeather } from "../api";
import myCache from "../cache";
import { IWeatherData } from "../entities/types";

function weatherReducer(data: IWeatherData) {
  const { id, name, coord, weather, main, wind } = data;

  return {
    id: id,
    city: name,
    coordinates: {
      longitude: coord.lon,
      latitude: coord.lat,
    },
    currentWeather: {
      status: weather[0].main,
      description: weather[0].description,
      temp: main.temp,
      feelsLike: main.feels_like,
      tempMin: main.temp_min,
      tempMax: main.temp_max,
      pressure: main.pressure,
      humidity: main.humidity,
      windSpeed: wind.speed,
    },
  };
}

export const handlerCitiesWeather = async () => {
  const weatherCache = myCache.get("getCitiesWeather");

  if (weatherCache !== undefined) {
    return weatherCache;
  }

  try {
    const fetchResponse = await getCitiesWeather();
    const res = fetchResponse.list.map((item: IWeatherData) => {
      return weatherReducer(item);
    });

    myCache.set("getCitiesWeather", res, 1800);

    return res;
  } catch (error) {
    console.log(error);
  }
};
