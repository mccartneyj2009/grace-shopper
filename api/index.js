const express = require("express");
const usersRouter = require("./usersRouter");

const apiRouter = express.Router();

apiRouter.use("/users", usersRouter);

apiRouter.get("/", (req, res) => {
    res.send("api router working");
});

module.exports = apiRouter;
