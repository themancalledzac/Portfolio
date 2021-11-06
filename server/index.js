import { ApolloServer, gql } from "apollo-server";
import images from "./dummy_images_db.js";
// here is our graphql schema definition.

const typeDefs = gql`
  type Image {
    title: String
    author: String
    country: String
    state: String
    location: String
    google_maps: String
    image_url: String
  }

  type Query {
    images: [Image]
  }
`;

// Here is our definition of our data set (i'd assume this is the same as our seed data?)

// const images = [
//   {
//     title: "Tara testing",
//     author: "Zechariah Edens",
//     location: "Seattle",
//   },
//   {
//     title: "Tara testing 2",
//     author: "Zechariah Edens",
//     location: "Seattle",
//   },
// ];

// Here we define a resolver
// Our data set is defined as above, but Apollo Server doesn't know that it should USE that data et when it's executing a query. to fix this, we create a resolver
// Resolvers tell Apollo Server HOW to fetch the data associated with a particular type. Because our 'Photo' array is hardcoded, the corresponding resolver is straightforward.

const resolvers = {
  Query: {
    images: () => images,
  },
};

// Creat an instance of ApolloServer
// we've defined our schema, data set, and resolver. now we just need to provide this information to Apollo Server when we initialize it.
// The ApolloServer constructor requires two parameters: your schema definition and your set of resolvers

const server = new ApolloServer({ typeDefs, resolvers });

// the 'listen' method launches a web server.
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
