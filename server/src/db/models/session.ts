import { Schema, model } from "mongoose";
import * as crypto from 'crypto';

const sessionSchema = new Schema({
    userId: {
        type: Number,
        default: -2,
    },
    sesid: {
        type: String,
        required: true,
        unique: true
    }
});

const sessionModel = model("Sessions", sessionSchema);

export const createSession = (userId) => {
    const sesid = crypto.randomBytes(64);
    return sessionModel.create({ userId, sesid })
}

export const getSessionBySesid = (sesid: string) => sessionModel.findOne({ sesid });