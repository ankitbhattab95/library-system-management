const app = require("express");
const bookCtrl = require("./../controllers/book-controller");
const router = app.Router();

router.post("/books", bookCtrl.saveBook);
router.get("/books", bookCtrl.getAllBooks);
router.get("/books/:id", bookCtrl.getBook);
router.get("/booksDetails/:id", bookCtrl.getBookDetails);
router.patch("/books/:id", bookCtrl.updateBook);
router.delete("/books/:id", bookCtrl.deleteBook);

module.exports = router;
