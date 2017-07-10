import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        hi:{
            type: GraphQLString,
            resolve(parentValue:any,args:any) {
                return "Hello Word"
            }
        }
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery
})