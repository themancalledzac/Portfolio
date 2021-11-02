import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // the connection to our database, or API
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

export default client;
