require("dotenv").config();
module.exports = {
  services: {
    database: {
      mongo_uri: process.env.MONGODB_URI,
    },
  },
};
