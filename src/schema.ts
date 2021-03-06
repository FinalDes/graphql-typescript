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
import {createUser, login, Users, UserSchema} from "./schema/user";

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getUsers: {
             args: {
                 limit: {type: GraphQLInt},
                 email: {type: GraphQLString},
                },
            type: new GraphQLList(UserSchema),
            resolve(parentValue: any, args: any) {
                const limit: number = args.limit && args.limit < 15 ? args.limit : 5;
                const query = args.email ? {email: args.email} : {};
                return Users.find({}).limit(limit).exec();
            },
        },
        getUser: {
            args: {id: {type: new GraphQLNonNull(GraphQLString)}},
            type: UserSchema,
            resolve(parentValue: any, args: any) {
                return Users.findById(args.id).exec();
            },
        },
    },
});

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            args: {
                email: {type: new GraphQLNonNull(GraphQLString)},
                password: {type: new GraphQLNonNull(GraphQLString)},
            },
            type: UserSchema,
            resolve: createUser,
        },
        login: {
            args: {
                email: {type: new GraphQLNonNull(GraphQLString)},
                password: {type: new GraphQLNonNull(GraphQLString)},
            },
            type: UserSchema,
            resolve: login,
        },
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation,
});
