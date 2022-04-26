require("dotenv").config();
const express = require("express");
const apiRouter = require("./api");
const client = require("./db/client");
const cors = require("cors");
const jwt = require("jsonwebtoken");

let PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

const { getUserById } = require("./db");
app.use(async (req, res, next) => {
    if (!req.headers.authorization) {
        return next();
    }
    const auth = req.headers.authorization.split(" ")[1];
    const _user = jwt.decode(auth, process.env.JWT_SECRET);
    if (!_user) {
        return next();
    }
    const user = await getUserById(_user.id);
    req.user = user;

    next();
});
app.use("/api", apiRouter);

// app.use(express.static("build"));

// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/build/index.html");
// });

app.use((err, req, res, next) => {
    res.status(400).send({
        name: err.name,
        message: err.message,
    });
});

app.listen(PORT, () => {
    console.log("Server is up on port: " + PORT);
    client.connect();
});
