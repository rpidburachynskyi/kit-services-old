const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.get("/", (req, res) => {
    const { query } = req;
    const { text = ""} = query;

    res.send({result: text});
});

module.exports = router;