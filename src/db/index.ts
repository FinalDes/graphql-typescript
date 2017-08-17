/* tslint:disable:no-console*/
import dotenv = require("dotenv");
import mongoose = require("mongoose");
import {normalizeMongoURI} from "uri-builder";
dotenv.config();
mongoose.Promise = global.Promise;

const MONGO_URI = normalizeMongoURI({
    db: process.env.MONGODB_DB,
    host: process.env.MONGODB_HOST || "localhost",
    pass: process.env.MONGODB_PASS,
    port: process.env.MONGODB_PORT || 27017,
    user: process.env.MONGODB_USER,
});
mongoose.set("debug", process.env.MONGODB_DEBUG );
mongoose.connect(MONGO_URI, {
    useMongoClient: true,
});

// const User = mongoose.model("User", new Schema({
//     name: String,
// }));

// const user1 = new User({name: "alex",password:"123"});

// user1.save((err) => {
//     if (err) {
//         console.log(err);
//     }
// });

// User.find().exec((err, doc) => {
//     console.log(doc);
// });

export default mongoose;
