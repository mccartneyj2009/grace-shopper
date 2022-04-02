require("dotenv").config();
const express = require("express");
const apiRouter = require("./api");

const app = express();

app.use("/api", apiRouter);

app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(process.env.PORT, () => {
  console.log("Server is up on port: " + process.env.PORT);
});
