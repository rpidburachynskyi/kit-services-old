import { Schema, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const sessionSchema = new Schema({
	userId: {
		type: String,
		required: true,
	},
	sesid: {
		type: String,
		required: true,
		unique: true,
	},
});

const sessionModel = model("Sessions", sessionSchema);

export const createSession = (userId: string) => {
	const sesid = uuidv4();
	return sessionModel.create({ userId, sesid });
};

export const getSessionBySesid = (sesid: string) =>
	sessionModel.findOne({ sesid });
