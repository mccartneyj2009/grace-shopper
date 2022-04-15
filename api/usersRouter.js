const express = require("express");
const {
  getUser,
  getAllUsers,
  getUserByEmail,
  createUser,
} = require("../db/index");

const usersRouter = express.Router();

usersRouter.get("", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/all", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send({ users });
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
