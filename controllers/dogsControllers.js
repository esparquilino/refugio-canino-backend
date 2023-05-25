const Dog = require("../models/dogModel");
const HttpError = require("../utils/httpError");
const catchAsync = require("../utils/catchAsync");

exports.getFilteredDogs = catchAsync(async (req, res, next) => {
  const page = +req.query.page || 1;
  const limit = req.query.limit || 12;
  const size = req.query.size || ["xs", "s", "m", "l", "xl"];
  const sort = req.query.sort || "dogName";

  const allDogs = await Dog.find()
    .where("isAlive")
    .equals(true)
    .where("adopted")
    .equals(false)
    .where("isShown")
    .equals(true)
    .where("size")
    .in(size)
    .skip((page - 1) * limit)
    .limit(limit)
    .select("-__v -createdAt -createdBy -dataContact")
    .sort(sort);

  const allDogsCount = await Dog.find()
    .where("isAlive")
    .equals(true)
    .where("adopted")
    .equals(false)
    .where("isShown")
    .equals(true)
    .where("size")
    .in(size)
    .countDocuments();

  const totalPages = Math.ceil(allDogsCount / limit);

  res.status(200).json({
    status: "success",
    data: {
      allDogs,
      pagination: {
        allDogsCount,
        totalPages,
        page,
        results: allDogs.length,
      },
    },
  });
});

exports.createNewDog = catchAsync(async (req, res, next) => {
  const newDog = await Dog.create(req.body);

  res.status(201).json({
    status: "success",
    data: newDog,
  });
});

exports.getDog = catchAsync(async (req, res, next) => {
  const dog = await Dog.findById(req.params.id);

  if (!dog) {
    return next(new HttpError("No se encontró el perrito", 404));
  }

  res.status(200).json({
    status: "success",
    data: dog,
  });
});

exports.updateDog = catchAsync(async (req, res, next) => {
  const dog = await Dog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!dog) {
    return next(new HttpError("No se encontró el perrito", 404));
  }

  res.status(200).json({
    status: "success",
    data: dog,
  });
});

exports.deleteDog = catchAsync(async (req, res, next) => {
  const dog = await Dog.findByIdAndDelete(req.params.id);

  if (!dog) {
    next(new HttpError("No se encontró el perrito", 404));
  }

  res.status(200).json({
    status: "success",
    data: null,
  });
});
