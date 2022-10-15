const client = require("./connection");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const schools = require("./Module/School/route");

app.use(bodyParser.json());

client
  .connect()
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((error) => {
    console.log(`${error} occured in connecting`);
  });

app.get("/", (req, res) => {
  res.status(200).end("Welcome to school api");
});

//Routes
app.use("/api/school", schools);

app.listen(3000, () => {
  console.log("Sever is now listening at port 3000");
});
