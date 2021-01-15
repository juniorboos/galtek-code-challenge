import { graphql } from "graphql";
import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolvers";

const typeDefs = `
   type Coordinates {
      longitude: Float!
      latitude: Float!
   }

   type CurrentWeather {
      status: String!
      description: String!
      icon: String!
      temp: Int!
      feelsLike: Int!
      tempMin: Int!
      tempMax: Int!
      pressure: Int!
      humidity: Int!
      windSpeed: Float!
   }

   type Weather {
      id: ID!
      city: String!
      coordinates: Coordinates!
      currentWeather: CurrentWeather!
   }

   type Query {
      weathers: [Weather!]!
   }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export const graphqlTestCall = async (query: any, variables?: any) => {
  return graphql(schema, query, variables);
};
