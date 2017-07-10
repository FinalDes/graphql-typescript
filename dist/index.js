"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema_1 = require("./schema");
const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema_1.schema,
    graphiql: true
}));
app.listen(4000, () => {
    console.log("Listening port 4000");
});
