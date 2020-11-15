const dotenv = require("dotenv");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config({ path: __dirname + "/dev.env" });

if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
  port: process.env.PORT || 3000,
  api: {
    prefix: "/api",
  },
  mysql: {
    DATABASE: process.env.DB_DATABASE,
    USER: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
  },
};
