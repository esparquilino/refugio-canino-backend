const express = require("express");
const dogRouter = require("./routes/dogRoutes");
const HttpError = require("./utils/httpError");
const globalErrorhandler = require("./controllers/errorControllers");
const app = express();

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

app.use(express.json()); //req.body

//ROUTES
app.use("/api/v1/dogs", dogRouter);

app.all("*", (req, res, next) => {
  next(new HttpError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorhandler);

module.exports = app;
