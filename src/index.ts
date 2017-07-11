import express = require('express');
import graphqlHTTP = require('express-graphql');
import {schema} from "./schema";

import dotenv = require("dotenv");
import { PortValidator } from './validator/portValidator';
dotenv.config();

const port:any = PortValidator.validate(process.env.PORT) || 3000;
const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port,()=>{
  console.log(`Listening port ${port}`);
});