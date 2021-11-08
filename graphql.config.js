// A config file so that we have support for highlighting graphql syntax
module.exports = {
  projects: {
    app: {
      schema: ["./data/schema.graphql"],
      documents: ["**/*.{graphql,js,ts,jsx,tsx}"],
    },
  },
};
