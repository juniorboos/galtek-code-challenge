import myCache from "../cache";
import { graphqlTestCall } from "./graphqlTestCall";

require("dotenv").config();

const weathersQuery = `
query {
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
        icon
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

describe("resolvers", () => {
  it("get weathers", async () => {
    const weathersResponse = await graphqlTestCall(weathersQuery, {});
    //  console.log(weathersResponse);
    const weatherCache = myCache.get("getCitiesWeather");

    expect(weathersResponse).toEqual({ data: { weathers: weatherCache } });
  });
});
