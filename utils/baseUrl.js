const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://gato-social-network.herokuapp.com";

module.exports = baseUrl;
