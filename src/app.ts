import express = require("express");
import helmet = require("helmet");
import graphqlHTTP = require("express-graphql");

import {schema} from "./schema";

const App = express();
App.use(helmet());

App.use("/graphql", graphqlHTTP({
  graphiql: true,
  schema,
}));

export default App;
