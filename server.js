////////////////////
//////SERVER////////
////////////////////
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://esparquilin:perritos@refugiocanino.zvqzlpv.mongodb.net/$perritos?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    }
  )
  .then(console.log("DB perritos connection succesful!"))
  .catch((err) => {
    console.log("DB perritos error connection!");
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
