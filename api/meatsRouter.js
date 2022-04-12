const express = require("express");
const { getAllMeats, getMeatByPrice } = require("../db");
const meatsRouter = express.Router();

meatsRouter.use((req, res, next) => {
  console.log("Requesting Meats");

  next();
});

meatsRouter.get("/", async (req, res) => {
  try {
    const meat = await getAllMeats();
    res.send({
      meat,
    });
  } catch (error) {
    next(error);
  }
});

// meatsRouter.get("/price", async (req, res) => {
//   try {
//     const prices = getMeatByPrice();
//     res.send({
//       prices,
//     });
//   } catch (error) {
//     next(error);
//   }
// });

meatsRouter.get("/filets", async (req, res) => {
  try {
    const filet = "filets";
    res.send({
      filet,
    });
  } catch (error) {
    next(error);
  }
});
module.exports = meatsRouter;
