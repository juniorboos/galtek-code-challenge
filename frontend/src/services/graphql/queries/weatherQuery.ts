import gql from "graphql-tag";

export const GET_WEATHERS = gql`
  {
    weathers {
      id
      city
      coordinates {
        longitude
        latitude
      }
      currentWeather {
        status
        description
        temp
        feelsLike
        tempMin
        tempMax
        pressure
        humidity
        windSpeed
      }
    }
  }
`;
