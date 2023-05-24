const Dog = require("../models/dogModel");
const HttpError = require("../utils/httpError");
const catchAsync = require("../utils/catchAsync");

exports.getAllDogs = catchAsync(async (req, res, next) => {
  const allDogs = await Dog.find();

  res.status(200).json({
    status: "success",
    data: {
      allDogsCount: allDogs.length,
      allDogs,
    },
  });
});

exports.getAllFilteredDogs = catchAsync(async (req, res, next) => {
  const filteredDogs = await Dog.find()
    .where("isAlive")
    .equals(true)
    .where("adopted")
    .equals(false)
    .where("isShown")
    .equals(true)
    .select("-__v");

  res.status(200).json({
    status: "success",
    data: {
      filteredDogsCount: filteredDogs.length,
      filteredDogs,
    },
  });
});

exports.getHiddenDogs = catchAsync(async (req, res, next) => {
  const hiddenDogs = await Dog.find()
    .where("isShown")
    .equals(false)
    .select("-__v");

  res.status(200).json({
    status: "success",
    data: {
      hiddenDogsCount: hiddenDogs.length,
      hiddenDogs,
    },
  });
});

exports.getAdoptedDogs = catchAsync(async (req, res, next) => {
  const adoptedDogs = await Dog.find()
    .where("isAlive")
    .equals(true)
    .where("adopted")
    .equals(true)
    .select("-__v");

  res.status(200).json({
    status: "success",
    data: {
      adoptedDogsCount: adoptedDogs.length,
      adoptedDogs,
    },
  });
});

exports.getDeceasedDogs = catchAsync(async (req, res, next) => {
  const deceasedDogs = await Dog.find()
    .where("isAlive")
    .equals(false)
    .select("-__v");

  res.status(200).json({
    status: "success",
    data: {
      deceasedDogsCount: deceasedDogs.length,
      deceasedDogs,
    },
  });
});

exports.getDogStats = catchAsync(async (req, res, next) => {
  const allDogsCount = await Dog.find().countDocuments();

  const allFilteredDogsCount = await Dog.find()
    .where("isAlive")
    .equals(true)
    .where("adopted")
    .equals(false)
    .where("isShown")
    .equals(true)
    .countDocuments();

  const hiddenDogsCount = await Dog.find()
    .where("isAlive")
    .equals(true)
    .where("isShown")
    .equals(false)
    .countDocuments();

  const adoptedDogsCount = await Dog.find()
    .where("isAlive")
    .equals(true)
    .where("adopted")
    .equals(true)
    .countDocuments();

  const deceasedDogsCount = await Dog.find()
    .where("isAlive")
    .equals(false)
    .countDocuments();

  res.status(200).json({
    status: "success",
    data: {
      allDogsCount,
      allFilteredDogsCount,
      hiddenDogsCount,
      adoptedDogsCount,
      deceasedDogsCount,
    },
  });
});
