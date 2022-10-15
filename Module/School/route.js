const express = require("express");
const schoolController = require("./controller");

const router = express();

router.get("/:id", schoolController.getSchoolById);
router.get("/", schoolController.getAllSchool);
router.post("/", schoolController.postSchool);
router.put("/:id", schoolController.updateSchoolById);
router.delete("/:id", schoolController.deleteSchoolById);

module.exports = router;
