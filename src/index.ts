import express = require("express");
import graphqlHTTP = require("express-graphql");
import {schema} from "./schema";

/* tslint:disable:no-console*/
import dotenv = require("dotenv");
import { PortValidator } from "./validator/portValidator";
dotenv.config();

const port: any = PortValidator.validate(process.env.PORT) || 3000;
const app = express();
app.disable("x-powered-by");

app.use("/graphql", graphqlHTTP({
  graphiql: true,
  schema,
}));

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
