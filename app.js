const ExpressLoader = require("./src/loaders/express-loader");
const bootApplication = async () => {
  new ExpressLoader();
};
bootApplication();
