const express = require("express");
const adminDogsControllers = require("../controllers/adminDogsControllers");
const router = express.Router();

router.route("/all").get(adminDogsControllers.getAllDogs);
router.route("/filtered").get(adminDogsControllers.getAllFilteredDogs);
router.route("/hidden").get(adminDogsControllers.getHiddenDogs);
router.route("/adopted").get(adminDogsControllers.getAdoptedDogs);
router.route("/deceased").get(adminDogsControllers.getDeceasedDogs);

module.exports = router;
