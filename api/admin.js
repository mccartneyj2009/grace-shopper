const express = require("express");

const adminRouter = express.Router();

adminRouter.use((req, res, next) => {
  console.log("Requesting Admin");
  next();
});
module.exports = adminRouter;
