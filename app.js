const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const route = require("./routes/routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(route);

mongoose
  .connect("mongodb://127.0.0.1:27017/cms-test", { useNewUrlParser: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("starting at port 3000");
    });
  })
  .catch((e) => console.log(e));
