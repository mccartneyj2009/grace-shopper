const express = require("express");
const usersRouter = require("./usersRouter");
const meatsRouter = require("./meatsRouter");
const ordersRouter = require("./ordersRouter");
const adminRouter = require("./admin");
const usermeatsRouter = require("./user_meatsRouter");

const apiRouter = express.Router();

apiRouter.use("/users", usersRouter);
apiRouter.use("/meats", meatsRouter);
apiRouter.use("/orders", ordersRouter);
apiRouter.use("/admin", adminRouter);
apiRouter.use("/usermeats", usermeatsRouter);

apiRouter.get("/", (req, res) => {
    res.send("api router working");
});

module.exports = apiRouter;
