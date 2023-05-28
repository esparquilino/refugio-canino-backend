const Dog = require("../models/dogModel");

const catchAsync = require("../utils/catchAsync");

exports.getAllDogs = catchAsync(async (req, res, next) => {
  const allDogs = await Dog.find().select("-__v").sort("dogName");

  res.status(200).json({
    status: "success",
    data: {
      allDogsCount: allDogs.length,
      allDogs,
    },
  });
});

exports.getAllFilteredDogs = catchAsync(async (req, res, next) => {
  const allDogs = await Dog.find()
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
      allDogsCount: allDogs.length,
      allDogs,
    },
  });
});

exports.getHiddenDogs = catchAsync(async (req, res, next) => {
  const allDogs = await Dog.find()
    .where("isShown")
    .equals(false)
    .select("-__v")
    .sort("dogName");

  res.status(200).json({
    status: "success",
    data: {
      allDogsCount: allDogs.length,
      allDogs,
    },
  });
});

exports.getAdoptedDogs = catchAsync(async (req, res, next) => {
  const allDogs = await Dog.find()
    .where("isAlive")
    .equals(true)
    .where("adopted")
    .equals(true)
    .select("-__v")
    .sort("dogName");

  res.status(200).json({
    status: "success",
    data: {
      allDogsCount: allDogs.length,
      allDogs,
    },
  });
});

exports.getDeceasedDogs = catchAsync(async (req, res, next) => {
  const allDogs = await Dog.find()
    .where("isAlive")
    .equals(false)
    .select("-__v")
    .sort("dogName");

  res.status(200).json({
    status: "success",
    data: {
      allDogsCount: allDogs.length,
      allDogs,
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
