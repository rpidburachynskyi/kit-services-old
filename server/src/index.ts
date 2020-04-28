import * as express from "express";
import codesRouter from "./routes/codes/codes";

import { connectApollo } from './apollo/apollo';
import { connectDb } from './db/db';
import { authRouter } from "./routes/auth/auth";
import * as bodyParser from "body-parser";
import * as cookieParser from 'cookie-parser';
import { getSessionBySesid } from "./db/models/session";
import { getUsersById } from "./db/models/user";

const app = express();


app.use(/.*/, (req, res, next) => {
    if (req.headers.origin)
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', "true");
    next();
});


app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/codes", codesRouter);
app.use("/api", authRouter)

app.use("*", async (req, res, next) => {
    console.log(req.method);
    if (!req.cookies) return next();
    const { sesid } = req.cookies;
    const session = await getSessionBySesid(sesid);

    if (!session) return next();

    const user = await getUsersById(session['userId']);
    req['user'] = user;
    console.log(req['user'], session['userId']);
    next();
});

connectApollo(app, "/graphql");




connectDb()
    .then(() => app.listen(3000, () => console.log("LISTENING 3k PORT...")));
