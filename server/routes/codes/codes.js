const express = require("express");
const router = express.Router();
const minimizerRouter = require("./minimazer/minimazer");

router.use('/minimizer', minimizerRouter);

module.exports = router;