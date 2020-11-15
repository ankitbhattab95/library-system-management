const app = require("express");
const borrowerCtrl = require("./../controllers/borrower-controller");
const router = app.Router();

// router.post("/borrower", borrowerCtrl.saveBook);
// router.get("/borrower", borrowerCtrl.getAllBooks);
// router.get("/borrower/:id", borrowerCtrl.getBook);
// router.patch("/borrower/:id", borrowerCtrl.updateBook);
// router.delete("/borrower/:id", borrowerCtrl.deleteBook);

module.exports = router;
