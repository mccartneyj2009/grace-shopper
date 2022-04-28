const express = require("express");
const {
    getAllUserMeats,
    createUserMeats,
    deleteUserMeats,
} = require("../db/user_meats");

const usermeatsRouter = express.Router();

usermeatsRouter.get("/", async (req, res, next) => {
    const user_id = req.body;
    try {
        const allMeats = await getAllUserMeats(user_id);
        res.send(allMeats);
    } catch (error) {
        next(error);
    }
});

usermeatsRouter.post("/addusermeat", async (req, res, next) => {
    const { meat_id, user_id, meat_qty } = req.body;
    // console.log(meat_id, user_id, meat_qty);

    try {
        const userMeat = createUserMeats({ meat_id, user_id, meat_qty });
    } catch (error) {
        next(error);
    }

    res.send(meat_id, user_id, meat_qty);
});

usermeatsRouter.delete("/deleteusermeat", async (req, res, next) => {
    const { meat_id } = req.body;
    // console.log(meat_id, user_id, meat_qty);

    try {
        const userMeat = deleteUserMeats(meat_id);
    } catch (error) {
        next(error);
    }

    res.send(meat_id, user_id, meat_qty);
});

module.exports = usermeatsRouter;
