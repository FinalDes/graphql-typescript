import {Schema} from "mongoose";
import mongoose from "./db";

export const Users = mongoose.model("User", new Schema({
    name: String,
}));
