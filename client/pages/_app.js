import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import client from "../apollo-client";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

// In our _app.js file, we are setting up our 'client side'rendering.

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
