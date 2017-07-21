/* tslint:disable:no-console, object-literal-sort-keys*/
import {
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
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
        email: {
            type: GraphQLString,
        },
        password: {
            type: GraphQLString,
        },
    },
     name: "User",
});

const RootQuery = new GraphQLObjectType({
    fields: {
        getUsers: {
             args: {
                 limit: {type: GraphQLInt},
                 email: {type: GraphQLString},
                },
            type: new GraphQLList(User),
            resolve(parentValue: any, args: any) {
                const limit: number = args.limit && args.limit < 15 ? args.limit : 5;
                return Users.find({email: args.email}).limit(limit).exec();
            },
        },
        getUser: {
            args: {id: {type: new GraphQLNonNull(GraphQLString)}},
            type: User,
            resolve(parentValue: any, args: any) {
                return Users.findById(args.id).exec();
            },
        },
    },
    name: "RootQueryType",
});

export const schema = new GraphQLSchema({
    query: RootQuery,
});
