import * as express from "express";
import codesRouter from "./routes/codes/codes";

import { connectApollo } from "./apollo/apollo";
import { connectDb } from "./db/db";
import { authRouter } from "./routes/auth/auth";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import { getSessionBySesid } from "./db/models/session";
import { getUsersById } from "./db/models/user";

const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:4200", credentials: true }));

app.use(bodyParser.json());
app.use(cookieParser());

// app.use("*", (req, res, next) => {
// 	setTimeout(() => {
// 		next();
// 	}, 1000);
// });

app.use("/api/codes", codesRouter);
app.use("/api", authRouter);

app.use("*", async (req, res, next) => {
	if (!req.cookies) return next();
	const { sesid } = req.cookies;
	const session = await getSessionBySesid(sesid);

	if (!session) return next();

	const user = await getUsersById(session["userId"]);
	req["user"] = user;
	next();
});

connectApollo(app, "/graphql", {
	origin: "http://localhost:4200",
	credentials: true,
});

connectDb().then(() =>
	app.listen(3000, () => console.log("LISTENING 3k PORT..."))
);
