export interface ICity {
  id: number;
  name: string;
}

export interface IWeatherData {
  id: number;
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}

export interface IWeatherResponse {
  cnt: number;
  list: Array<IWeatherData>;
}
