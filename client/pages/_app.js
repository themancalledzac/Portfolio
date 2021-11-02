import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

// In our _app.js file, we are setting up our 'client side'rendering. 

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
