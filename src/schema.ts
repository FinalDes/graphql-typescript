import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
} from "graphql";

const RootQuery = new GraphQLObjectType({
    fields: {
        hi: {
            type: GraphQLString,
            resolve(parentValue: any, args: any) {
                return "Hello Word";
            },
        },
    },
    name: "RootQueryType",
});

export const schema = new GraphQLSchema({
    query: RootQuery,
});
