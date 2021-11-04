import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // the connection to our database, or API
  // uri: "https://countries.trevorblades.com",
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default client;
