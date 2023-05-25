const express = require("express");

const adminDogRouter = require("./routes/adminDogRoutes");
const userDogsRouter = require("./routes/dogRoutes");
const formRouter = require("./routes/formRoutes");
const HttpError = require("./utils/httpError");
const globalErrorhandler = require("./controllers/errorControllers");

const app = express();
app.use(express.json()); //req.body

//MIDDLEWARE
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

//ROUTES
app.use("/api/admin/dogs", adminDogRouter);
app.use("/api/forms", formRouter);
app.use("/api/user/dogs", userDogsRouter);

app.all("*", (req, res, next) => {
  next(new HttpError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorhandler);

module.exports = app;
