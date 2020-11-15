const app = require("express");
const authorCtrl = require("./../controllers/author-controller");
const router = app.Router();

router.post("/authors", authorCtrl.saveAuthor);
router.get("/authors", authorCtrl.getAllAuthor);
router.get("/authors/:id", authorCtrl.getAuthor);
router.patch("/authors/:id", authorCtrl.updateAuthor);
router.delete("/authors/:id", authorCtrl.deleteAuthor);

module.exports = router;
