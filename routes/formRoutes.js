const express = require("express");
const formControllers = require("../controllers/formControlers");
const router = express.Router();

router
  .route("/new")
  .get(formControllers.getNewFormRequest)
  .post(formControllers.createNewFormRequest);
router.route("/resolved").get(formControllers.getResolvedFormRequests);

module.exports = router;
