const express = require("express");
const dogsControllers = require("../controllers/dogsControllers");
const router = express.Router();

router
  .route("/")
  .get(dogsControllers.getFilteredDogs)
  .post(dogsControllers.createNewDog);

router
  .route("/:id")
  .get(dogsControllers.getDog)
  .patch(dogsControllers.updateDog)
  .delete(dogsControllers.deleteDog);

module.exports = router;
