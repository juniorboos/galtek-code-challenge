import { GraphQLServer } from "graphql-yoga";
import path from "path";
import resolvers from "./graphql/resolvers";

require("dotenv").config();

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "graphql/schema.graphql"),
  resolvers,
});

server.start();

console.log("Started at port 4000.");
