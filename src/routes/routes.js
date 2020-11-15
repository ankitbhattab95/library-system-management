const memberRoutes = require("./../routes/member");
const bookRoutes = require("./../routes/book");
const authorRoutes = require("./../routes/author");
const publisherRoutes = require("./../routes/publisher");
const borrowerRoutes = require("./../routes/borrower");
const routes = (app) => {
  app.use("/api", memberRoutes);
  app.use("/api", bookRoutes);
  app.use("/api", authorRoutes);
  app.use("/api", publisherRoutes);
  // app.use("/api", borrowerRoutes);
};
module.exports = routes;
