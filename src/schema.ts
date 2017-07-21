/* tslint:disable:no-console*/
import {
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
} from "graphql";
import {Users} from "./db/user.model";

const User = new GraphQLObjectType({
    fields: {
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
    },
     name: "User",
});

const RootQuery = new GraphQLObjectType({
    fields: {
        getUsers: {
            type: new GraphQLList(User),
            resolve(parentValue: any, args: any) {
                return Users.find().exec((err, doc) => {
                    console.log(doc);
                });
            },
        },
    },
    name: "RootQueryType",
});

export const schema = new GraphQLSchema({
    query: RootQuery,
});
