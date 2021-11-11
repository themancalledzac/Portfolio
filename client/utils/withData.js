import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { endpoint, prodEndpoint } from "../config";

function createClient({ headers, initialState }) {
  return new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, location, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          );
      }),
      // here we use apollo-link-http under the hood, so all the options here come from that package
      createUploadLink({
        uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
        fetchOptions: {
          credentials: "include",
        },
        // pass the headers along from this request. this enables SSR with logged in state
        headers,
      }),
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: Add Later
          },
        },
      },
    }).restore(initialState || {}),
  });
}

// doesn't currently work with next-with-apollo not working
// export default withApollo(createClient, { getDataFromTree });
