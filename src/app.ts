/* tslint:disable:no-console*/
import express = require("express");
import helmet = require("helmet");
import graphqlHTTP = require("express-graphql");

import {schema} from "./schema";
import dotenv = require("dotenv");
import { PortValidator } from "./validator/portValidator";
dotenv.config();

const port: any = PortValidator.validate(process.env.PORT, 3000);
const App = express();
// app.use(helmet.noCache());
// app.use(helmet.dnsPrefetchControl());
// app.use(helmet.frameguard({ action: "deny" }));
// app.use(helmet.referrerPolicy({ policy: "no-referrer" }));

App.use("/graphql", graphqlHTTP({
  graphiql: true,
  schema,
}));

export default App;
