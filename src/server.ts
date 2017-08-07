/* tslint:disable:no-console*/
import app from "./app";

import dotenv = require("dotenv");
dotenv.config();
import { normalizePort } from "uri-builder";

const PORT: any = normalizePort(process.env.PORT || 3000);
app.listen(PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${PORT}/graphql`);
});
