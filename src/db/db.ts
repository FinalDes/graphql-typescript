/* tslint:disable:no-console*/
import mongoose = require("mongoose");
import dotenv = require("dotenv");
dotenv.config();
mongoose.Promise = global.Promise;
export const MONGO_URI = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB}`;

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
