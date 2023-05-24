const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect(
    `mongodb+srv://esparquilin:perritos@refugiocanino.zvqzlpv.mongodb.net/perritos?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    }
  )
  .then(console.log("DB perritos connection succesful!"))
  .catch((err) => {
    console.log("DB perritos error connection!");
    console.log(err.message);
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
