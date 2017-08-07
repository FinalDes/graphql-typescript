import bcrypt = require("bcrypt");
import jwt = require("jsonwebtoken");
import {Users} from "./user.model";
export function createUser(parentValue: any, args: any) {
    const newUser = new Users({
        email: args.email,
        password: bcrypt.hashSync(args.password, 10),
    });
    return newUser.save();
}

export function login(parentValue: any, {email, password}: {email: string, password: string}){
    const result = Users.findOne({email}).exec()
        .then((user: any) => {
            // console.log(user);
            return bcrypt.compare(password, user.password).then(() => {
                const jwttoken = jwt.sign(
                    {email: user.email},
                    "secret",
                    {expiresIn: "7d"});
                return jwttoken;
            });
        });
    return result;
}
