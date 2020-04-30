import { Schema, model } from "mongoose";
import * as crypto from 'crypto';

const groupMover = new Schema({
    id: {
        type: Number,
        default: -2
    },
    userId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    regExpPattern: {
        type: String,
        default: ""
    },
    textPattern: {
        type: String,
        default: ""
    },
    eachFunction: {
        type: String,
    },
    globalFunction: {
        type: String,
        default: ""
    },
    argumentsPattern: {
        type: String,
        default: ""
    }
});

groupMover.pre("save", async function (next) {
    if (this.id !== -2) return next();

    this.id = await groupMoverModel.countDocuments();
    next();
});

const groupMoverModel = model("group-movers", groupMover);

export const saveNewGroupMover = (userId: number, name: string, regExpPattern: string, textPattern: string,
    eachFunction: string, globalFunction: string, argumentsPattern: string) => groupMoverModel.create({
        userId, name, regExpPattern, textPattern, eachFunction, globalFunction, argumentsPattern
    });

export const saveGroupMover = (id: Number, regExpPattern: string, textPattern: string,
    eachFunction: string, globalFunction: string, argumentsPattern: string) => groupMoverModel.findOneAndUpdate({ id }, {
        regExpPattern, textPattern, eachFunction, globalFunction, argumentsPattern
    }, { new: true });

export const getGroupMoverById = (id: Number) => groupMoverModel.findOne({ id });
export const getGroupMoversByUserId = (userId: Number) => groupMoverModel.find({ userId });