/* tslint:disable: object-literal-sort-keys*/
import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

export const UserSchema = new GraphQLObjectType({
    name: "User",
    fields: {
        id: {type: GraphQLID},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
    },
});
