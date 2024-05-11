const express = require("express");
const router = express.Router();

const userRouter = require("./userRoutes");

router.use("/auth", userRouter);

module.exports = router;
