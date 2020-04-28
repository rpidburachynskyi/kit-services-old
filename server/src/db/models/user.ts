import { Schema, model } from "mongoose";

const userSchema = new Schema({
    id: {
        type: Number,
        default: -2,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre("save", async function (next) {
    if (this.id !== -2) return next();

    this.id = await userModel.countDocuments();
    next();
});

let userModel = model("Users", userSchema);

export const createUser = (email: string, password: string) => userModel.create({ email, password });

export const getUsersById = (id: number) => userModel.findOne({ id });
export const getUsersByEmailAndPassword = (email: string, password: string) => userModel.findOne({ email, password });