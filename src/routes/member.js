const app = require("express");
const memberCtrl = require("./../controllers/member-controller");
const router = app.Router();

router.post("/members", memberCtrl.saveMember);
router.get("/members", memberCtrl.getAllMembers);
router.get("/members/:id", memberCtrl.getMember);
router.patch("/members/:id", memberCtrl.updateMember);
router.delete("/members/:id", memberCtrl.deleteMember);

module.exports = router;
