const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./../routes/routes");
const config = require("./../config/config");
const errMiddleware = require("./../middleware/error-middleware");
const models = require("./../models");

class ExpressLoader {
  constructor() {
    const app = express();
    // for parsing application/json
    app.use(bodyParser.json());
    // for parsing application/x www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(errMiddleware);
    routes(app);
    app.listen(config.port, () => {
      console.log("server started..!!");
    });
  }
}
module.exports = ExpressLoader;
