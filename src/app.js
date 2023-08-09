const express = require("express");
const { connect } = require("mongoose");

const routes = require("../src/routes");

const app = express();

app.use(express.json());
app.use(routes);

app.set("view engine", "ejs");
app.set("views", "src/views");

const bootstrap = async () => {
  await connect("mongodb://127.0.0.1:27017/distance");
  app.listen(4000, () => {
    console.log(4000);
  });
};
bootstrap();
