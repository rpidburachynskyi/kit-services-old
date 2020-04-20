const express = require("express");
const app = express();
const codesRouter = require("./routes/codes/codes");

app.use(/.*/, (req, res, next) => {
    if(req.headers.origin)
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use("/api/codes", codesRouter);


app.listen(3000);