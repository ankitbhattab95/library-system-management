const app = require("express");
const publisherCtrl = require("./../controllers/publisher-controller");
const router = app.Router();

router.post("/publishers", publisherCtrl.savePublisher);
router.get("/publishers", publisherCtrl.getAllPublishers);
router.get("/publishers/:id", publisherCtrl.getPublisher);
router.patch("/publishers/:id", publisherCtrl.updatePublisher);
router.delete("/publishers/:id", publisherCtrl.deletePublisher);

module.exports = router;
