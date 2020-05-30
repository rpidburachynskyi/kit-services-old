import { Schema, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { SHA512 } from "crypto-js";

const userSchema = new Schema({
	id: {
		type: String,
		default: "",
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

userSchema.pre("save", async function (next) {
	if (this.id !== "") return next();

	this.id = uuidv4();
	next();
});

let userModel = model("Users", userSchema);

export const createUser = (email: string, password: string) =>
	userModel.create({ email, password: SHA512(password).toString() });

export const getUsersById = (id: string) => userModel.findOne({ id });
export const getUsersByEmailAndPassword = (email: string, password: string) =>
	userModel.findOne({ email, password: SHA512(password).toString() });

export const changePassword = (userId: string, password: string) =>
	userModel.findOneAndUpdate(
		{ id: userId },
		{
			password: SHA512(password).toString(),
		},
		{ new: true }
	);
