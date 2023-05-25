const Form = require("../models/formModel");
const HtttpError = require("../utils/httpError");

const catchAsync = require("../utils/catchAsync");

exports.getNewFormRequest = catchAsync(async (req, res, next) => {
  const allForms = await Form.find()
    .select("-__v")
    .where("resolved")
    .equals(false);

  res.status(200).json({
    status: "success",
    data: {
      allFormsCount: allForms.length,
      allForms,
    },
  });
});

exports.updateFormRequest = catchAsync(async (req, res, next) => {
  const formRequest = await Form.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!formRequest) {
    return next(new HtttpError("No se encontro el form", 404));
  }

  res.status(200).json({
    status: "success",
    data: formRequest,
  });
});

exports.deleteFormRequest = catchAsync(async (req, res, next) => {
  const formRequest = await Form.findByIdAndDelete(req.params.id);

  if (!formRequest) {
    return next(new HtttpError("No se encontro el form", 404));
  }

  res.status(200).json({
    status: "success",
    data: null,
  });
});

exports.createNewFormRequest = catchAsync(async (req, res, next) => {
  const newForm = await Form.create(req.body);

  res.status(200).json({
    status: "success",
    data: newForm,
  });
});

exports.getResolvedFormRequests = catchAsync(async (req, res, next) => {
  const allForms = await Form.find().where("resolved").equals(true);

  res.status(200).json({
    status: "success",
    data: {
      allFormsCount: allForms.length,
      allForms,
    },
  });
});
