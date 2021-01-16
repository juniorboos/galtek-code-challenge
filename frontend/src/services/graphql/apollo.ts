import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/",
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
