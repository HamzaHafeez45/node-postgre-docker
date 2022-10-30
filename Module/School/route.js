const express = require("express");
const schoolController = require("./controller");

const router = express();

const schemas = require("../../schemas.js");
const middleware = require("../../middleware");

router.get(
  "/:id",
  middleware(schemas.SCHOOLDETAIL, "params"),
  schoolController.getSchoolById
);
router.get("/", schoolController.getAllSchool);
router.post(
  "/",
  middleware(schemas.SCHOOL, "body"),
  schoolController.postSchool
);
router.put(
  "/",
  middleware(schemas.SCHOOL, "body"),
  schoolController.updateSchoolById
);
router.delete(
  "/:id",
  middleware(schemas.SCHOOLDETAIL, "params"),
  schoolController.deleteSchoolById
);

module.exports = router;
