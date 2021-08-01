module.exports = {
  plugins: [
    {
      plugin: require("craco-raw-loader"),
      options: { test: /\.example$/ },
    },
  ],
};
