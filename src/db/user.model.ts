/* tslint:disable:no-console*/
import {Schema} from "mongoose";
import mongoose from "./db";

export const Users = mongoose.model("Users", new Schema({
    email: String,
    password: String,
}));

// const user1 = new Users({email: "alex", password: "123"});

// user1.save((err) => {
//     if (err) {
//         console.log(err);
//     }
// });

// console.log(Users.findById("5971abd60eac6c7d1aedc8b3").exec((doc, err) => {
//     console.log(err, "err");
//     console.log(doc, "doc");
// }), "data");
