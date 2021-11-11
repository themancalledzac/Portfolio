module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: "http://localhost:3001/api/:slug*",
      },
    ];
  },
};
